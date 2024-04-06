import { publicProcedure, router } from "@server/trpc";
import { db } from "@server/db";
import z from "zod";

export const userRouter = router({
	list: publicProcedure.query(async () => {
		// Retrieve users from a datasource, this is an imaginary database
		const users = await db.user.findMany();
		//    ^?
		return users;
	}),
	byId: publicProcedure.input(z.string()).query(async (opts) => {
		const { input } = opts;
		//      ^?
		// Retrieve the user with the given ID
		const user = await db.user.findById(input);
		return user;
	}),
	create: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async (opts) => {
			const { input } = opts;
			//      ^?
			// Create a new user in the database
			const user = await db.user.create(input);
			//    ^?
			return user;
		}),
});