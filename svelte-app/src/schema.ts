import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const subjects = sqliteTable('subjects', {
	id: text('id', { length: 36 })
		.primaryKey()
		.notNull()
		.$defaultFn(() => crypto.randomUUID()),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`)
})

export const subjectDetails = sqliteTable('subject_details', {
	id: text('id', { length: 36 })
		.primaryKey()
		.notNull()
		.$defaultFn(() => crypto.randomUUID()),
	subjectId: text('subject_id', { length: 36 })
		.notNull()
		.references(() => subjects.id),
	name: text('name').notNull(),
	createdAt: text('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
})
