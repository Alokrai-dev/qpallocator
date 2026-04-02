import {
  pgTable,
  serial,
  varchar,
  date,
  integer,
  timestamp,
  boolean,
  json,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const exams = pgTable("exams", {
  id: serial("id").primaryKey(),

  examCode: varchar("exam_code", { length: 50 }).notNull().unique(),

  examName: varchar("exam_name", { length: 100 }).notNull(),

  startDate: date("start_date").notNull(),

  endDate: date("end_date").notNull(),

  subject: varchar("subject", { length: 100 }),

  shift: varchar("shift", { length: 50 }),

  noOfIteration: integer("no_of_iteration").notNull(),

  // store default config as JSON
  defaultConfiguration: json("default_configuration").$type<{
    colour: string;
    alphabet: string;
    number: string;
  }>(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  createdBy: integer("created_by")
    .references(() => users.id)
    .notNull(),

  isDeleted: boolean("is_deleted").default(false).notNull(),
});