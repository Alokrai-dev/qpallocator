import { Request, Response } from 'express';
import { db } from '../../db/db';
import { exams } from '../../db/schema/exam';

export async function getExams(req: Request, res: Response) {
  try {
    const allExams = await db.select().from(exams);
    res.json({ exams: allExams });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
