import {
  pgTable,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { shifts } from "./shift";
import { subjects } from "./subject";
import { users } from "./users";

export const shiftSubjects = pgTable("shift_subjects", {
  ssId: integer("ss_id")
    .references(() => shifts.id)
    .notNull(),

  subjectId: integer("subject_id")
    .references(() => subjects.id)
    .notNull(),

  finalSelectedSet: integer("final_selected_set"),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  createdBy: integer("created_by")
    .references(() => users.id)
    .notNull(),

  isDeleted: boolean("is_deleted").default(false).notNull(),
});