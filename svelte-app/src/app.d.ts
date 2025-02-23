import type { Session, SupabaseClient, User } from '@supabase/supabase-js'

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env?: {
				D1: D1Database
			}
			cf: CfProperties
			ctx: ExecutionContext
		}
		interface Locals {
			supabase: SupabaseClient
			safeGetSession: () => Promise<{ session: Session | null; user: User | null }>
			authenticate: () => void
			session: Session | null
			user: User | null
		}
		interface PageData {
			session: Session | null
			user: User | null
		}
	}
}

export {}
