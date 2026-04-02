import { pgEnum } from 'drizzle-orm/pg-core';

export const userTypeEnum = pgEnum('user_type', ['admin', 'selector']);

// Optional TypeScript type (VERY useful)
export type UserType = 'admin' | 'selector';

export const colourEnum = pgEnum("colour_type", [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
]);

export const alphabetEnum = pgEnum("alphabet_type", [
  "A",
  "B",
  "C",
  "D",
  "E",
]);

export const numberEnum = pgEnum("number_type", [
  "1",
  "2",
  "3",
  "4",
  "5",
]);
