import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const greetings = sqliteTable('greetings', {
	id: integer('id').primaryKey(),
	message: text('message').notNull(),
	insertedAt: text('inserted_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
});
