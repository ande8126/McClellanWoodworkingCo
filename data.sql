-- queries for db setup

CREATE TABLE "inquiries" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (55),
	"last_name" VARCHAR (100),
	"email" VARCHAR (200),
	"phone" VARCHAR (20),
	"description" TEXT,
	"date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
	