const { pgTable, uuid, timestamp, text } = require("drizzle-orm/pg-core");

const messages = pgTable("messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  message: text("message").notNull(),
  timestamp: timestamp("timestamp", { withTimezone: true }).defaultNow(),
});

const rooms = pgTable("rooms",{
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  password: text("password"),
  timestamp: timestamp("timestamp", { withTimezone: true }).defaultNow(),
})

module.exports = { messages, rooms };
