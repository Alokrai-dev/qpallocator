import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),

  subjectName: varchar("subject_name", { length: 100 }).notNull(),

  setCount: integer("set_count").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  createdBy: integer("created_by")
    .references(() => users.id)
    .notNull(),

  isDeleted: boolean("is_deleted").default(false).notNull(),
});