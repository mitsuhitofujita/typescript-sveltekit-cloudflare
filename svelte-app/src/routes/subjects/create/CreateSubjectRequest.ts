import { z } from 'zod'

const CreateSubjectSchema = z.object({
	name: z.string().min(3, '名前は3字以上で入力してください')
})

type CreateSubjectParams = z.infer<typeof CreateSubjectSchema>

export class CreateSubjectRequest {
	public errors: z.ZodIssue[]
	public validatedValues?: CreateSubjectParams

	public constructor(params: CreateSubjectParams) {
		const result = CreateSubjectSchema.safeParse(params)
		console.log('result', result)
		if (result.success) {
			this.validatedValues = result.data
			this.errors = []
		} else {
			this.errors = result.error.errors
		}
		console.log('errors', this.errors)
	}

	public hasErrors(): boolean {
		return this.errors.length > 0
	}

	public getErrors(field: string): string[] {
		return this.errors.filter((error) => error.path[0] === field).map((error) => error.message)
	}

	public get groupErrorsByField(): Record<string, string[]> {
		const errors: Record<string, string[]> = {}
		this.errors.forEach((error) => {
			const field = error.path[0]
			if (!errors[field]) {
				errors[field] = []
			}
			errors[field].push(error.message)
		})
		return errors
	}

	public get name(): string | undefined {
		return this.validatedValues?.name
	}
}
