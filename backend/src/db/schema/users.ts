import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { userTypeEnum } from './enums';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),

  username: varchar('username', { length: 50 }).notNull().unique(),

  password: text('password').notNull(),

  mobileNumber: varchar('mobile_number', { length: 15 }).notNull().unique(),

  type: userTypeEnum('type').notNull().default('selector'),

  createdAt: timestamp('created_at').defaultNow().notNull(),

  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date()),
});
