import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { CreateSubjectRequest } from './CreateSubjectRequest'

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const data = {
			name: formData.get('name') as string
		}
		const validated = new CreateSubjectRequest(data)
		if (validated.hasErrors()) {
			return fail(422, { data, errors: validated.groupErrorsByField })
		}
		// const userId = user?.id
		const uuid = crypto.randomUUID()
		console.log('uuid', uuid)

		const result1 = await supabase.from('subjects').insert({ id: uuid })
		console.log('result', result1)
		if (result1.error) {
			console.error(result1.error)
			return fail(500, { data, errors: {} })
		}
		const { error } = await supabase
			.from('subject_details')
			.insert({ subject_id: uuid, name: validated.name })
		if (error) {
			console.error(error)
			return fail(500, { data, errors: {} })
		}

		return { status: 201, body: { data, errors: {} } }
	}
}
