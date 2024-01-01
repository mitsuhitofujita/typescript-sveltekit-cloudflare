CREATE TABLE `greetings` (
	`id` integer PRIMARY KEY NOT NULL,
	`message` text NOT NULL,
	`inserted_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
