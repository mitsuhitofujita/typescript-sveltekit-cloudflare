import type { PageServerLoad } from './$types'
import { fail } from '@sveltejs/kit'
import { subjects, subjectDetails } from '../../schema'
import { eq, desc } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/d1'

export const load: PageServerLoad = async ({ platform }) => {
	const d1 = platform?.env?.D1
	if (!d1) {
		return fail(500, { data: { notes: [] }, errors: { d1: 'Database not available' } })
	}
	const db = drizzle(d1)

	const result = await db
		.select({
			id: subjects.id,
			name: subjectDetails.name
		})
		.from(subjects)
		.fullJoin(subjectDetails, eq(subjects.id, subjectDetails.subjectId))
		.orderBy(desc(subjects.createdAt))
		.all()
	console.log('subjects', result)
	return { subjects: result || [] }
}
