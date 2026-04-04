import { db } from "../../db/db";
import { iterations } from "../../db/schema/iteration";
import { shiftSubjects } from "../../db/schema/shiftSubject";
import { subjects } from "../../db/schema/subject";
import { shifts } from "../../db/schema/shift";
import { eq, and, desc } from "drizzle-orm";

export async function getExamAllocationData(examId: number) {
  // Get all shifts for the exam
  const examShifts = await db.query.shifts.findMany({
    where: eq(shifts.examId, examId),
  });

  // Get all subjects
  const allSubjects = await db.query.subjects.findMany({
    where: eq(subjects.isDeleted, false),
  });

  return {
    shifts: examShifts,
    subjects: allSubjects,
  };
}

export async function randomizeAllocation(data: {
  subjectId: number;
  shiftId: number;
  userId: number;
}) {
  // 1. Find or Create ShiftSubject entry
  let ss = await db.query.shiftSubjects.findFirst({
    where: and(
      eq(shiftSubjects.ssId, data.shiftId),
      eq(shiftSubjects.subjectId, data.subjectId)
    ),
  });

  if (!ss) {
    // If it doesn't exist, we create it dynamically for this shift/subject
    const [result] = await db.insert(shiftSubjects).values({
      ssId: data.shiftId,
      subjectId: data.subjectId,
      createdBy: data.userId,
    });
    
    ss = await db.query.shiftSubjects.findFirst({
      where: eq(shiftSubjects.id, result.insertId),
    });
  }

  if (!ss) throw new Error("Failed to initialize shift-subject mapping");

  // 2. Determine next iteration count
  const lastIteration = await db.query.iterations.findFirst({
    where: eq(iterations.ssId, ss.id),
    orderBy: [desc(iterations.iterationCount)],
  });

  const nextCount = (lastIteration?.iterationCount ?? 0) + 1;

  // 3. Pick a random set (1-10 as per image)
  const selectedSet = Math.floor(Math.random() * 10) + 1;

  // 4. Save iteration
  await db.insert(iterations).values({
    ssId: ss.id,
    iterationCount: nextCount,
    selectedSet: selectedSet,
    createdBy: data.userId,
  });

  // 5. Update shift_subjects if it's the final one?
  // For now, let's just return the iteration
  return {
    ssId: ss.id,
    iterationCount: nextCount,
    selectedSet: selectedSet,
  };
}

export async function getAllocationHistory() {
  // Fetch recent iterations with subject and shift info
  const history = await db.select({
    id: iterations.id,
    iterationCount: iterations.iterationCount,
    selectedSet: iterations.selectedSet,
    ts: iterations.ts,
    subjectName: subjects.subjectName,
    shiftStartTime: shifts.startTime,
  })
  .from(iterations)
  .innerJoin(shiftSubjects, eq(iterations.ssId, shiftSubjects.id))
  .innerJoin(subjects, eq(shiftSubjects.subjectId, subjects.id))
  .innerJoin(shifts, eq(shiftSubjects.ssId, shifts.id))
  .orderBy(desc(iterations.ts))
  .limit(10);

  return history;
}
