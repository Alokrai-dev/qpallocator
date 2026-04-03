import {
  mysqlTable,
  int,
  varchar,
  date,
  timestamp,
  boolean,
  json,
} from "drizzle-orm/mysql-core";
import { users } from "./users";

export const exams = mysqlTable("exams", {
  id: int("id").autoincrement().primaryKey(),

  examCode: varchar("exam_code", { length: 50 }).notNull().unique(),

  examName: varchar("exam_name", { length: 100 }).notNull(),

  startDate: date("start_date").notNull(),

  endDate: date("end_date").notNull(),

  subject: varchar("subject", { length: 100 }),

  shift: varchar("shift", { length: 50 }),

  noOfIteration: int("no_of_iteration").notNull(),

  // store default config as JSON
  defaultConfiguration: json("default_configuration").$type<{
    colour: string;
    alphabet: string;
    number: string;
  }>(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  createdBy: int("created_by")
    .references(() => users.id)
    .notNull(),

  isDeleted: boolean("is_deleted").default(false).notNull(),
});