import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { CreateSubjectRequest } from './CreateSubjectRequest'
import { drizzle } from 'drizzle-orm/d1'
import { subjects, subjectDetails } from '../../../schema'

export const actions: Actions = {
	default: async ({ request, platform }) => {
		const formData = await request.formData()
		const data = {
			name: formData.get('name') as string
		}
		const validated = new CreateSubjectRequest(data)
		if (validated.hasErrors()) {
			return fail(422, { data, errors: validated.groupErrorsByField })
		}
		const d1 = platform?.env?.D1
		if (!d1) {
			return fail(500, { data, errors: { d1: 'Database not available' } })
		}
		const uuid = crypto.randomUUID()
		const db = drizzle(d1)
		const result1 = await db.insert(subjects).values({
			id: uuid
		})
		console.log('subjects', result1)
		const result2 = await db.insert(subjectDetails).values({
			subjectId: uuid,
			name: data.name
		})
		console.log('subject_details', result2)

		return { status: 201, body: { data, errors: {} } }
	}
}
