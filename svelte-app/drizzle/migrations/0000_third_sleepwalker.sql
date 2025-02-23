CREATE TABLE `subject_details` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`subject_id` text(36) NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `subjects` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
