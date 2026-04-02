import {
  pgTable,
  serial,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { shiftSubjects } from "./shiftSubject";
import { users } from "./users";

export const iterations = pgTable("iterations", {
  id: serial("id").primaryKey(),

  ssId: integer("ss_id")
    .references(() => shiftSubjects.ssId)
    .notNull(),

  ts: timestamp("ts").defaultNow().notNull(),

  iterationCount: integer("iteration_count").notNull(),

  selectedSet: integer("selected_set"),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  createdBy: integer("created_by")
    .references(() => users.id)
    .notNull(),

  isDeleted: boolean("is_deleted").default(false).notNull(),
});