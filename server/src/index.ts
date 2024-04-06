import { router } from '@server/trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { userRouter } from './user';

const appRouter = router({
	user: userRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
	router: appRouter,
});

server.listen(3000);