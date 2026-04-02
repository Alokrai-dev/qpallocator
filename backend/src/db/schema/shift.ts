import {
  pgTable,
  serial,
  date,
  time,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { exams } from "./exam";
import { users } from "./users";

export const shifts = pgTable("shifts", {
  id: serial("id").primaryKey(),

  date: date("date").notNull(),

  startTime: time("start_time").notNull(),

  endTime: time("end_time").notNull(),

  examId: integer("exam_id")
    .references(() => exams.id)
    .notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  createdBy: integer("created_by")
    .references(() => users.id)
    .notNull(),

  isDeleted: boolean("is_deleted").default(false).notNull(),
});