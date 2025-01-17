import type { Actions } from './$types'

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const name = formData.get('name') as string
		// const userId = user?.id
		const uuid = crypto.randomUUID()
		console.log('uuid', uuid)

		const result1 = await supabase.from('subjects').insert({ id: uuid })
		console.log('result', result1)
		if (result1.error) {
			console.error(result1.error)
			return { status: 500, body: 'Couldnt store data' }
		}
		const { error } = await supabase.from('subject_details').insert({ subject_id: uuid, name })
		if (error) {
			console.error(error)
			return { status: 500, body: 'Couldnt store data' }
		}

		return { status: 201, body: '' }
	}
}
