// import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
	schema: './src/schema/*.ts',
	out: './database/migrations'
} satisfies Config;
