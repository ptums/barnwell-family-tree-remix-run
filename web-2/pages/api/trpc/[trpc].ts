import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { addPosition, getPositions } from 'utils/positions';
import { z } from 'zod';

export const appRouter = trpc.router()
.query('positions', {
  async resolve() {
    const positions = await getPositions();
    return {
      positions
    };
  },
})
.mutation('position', {
  // using zod schema to validate and infer input values
  input: z
    .object({
      memberId: z.string(),
      coordinateX: z.number(),
      coordinateY: z.number(),
    }),
  async resolve({ input }) {
    const { memberId, coordinateX, coordinateY} = input;
    const position = await addPosition(memberId, coordinateX, coordinateY);
    return {
      position
    };
  },
})

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});