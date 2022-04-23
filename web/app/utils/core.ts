export const findMembersByGeneration = (members: any, generation: string) => {
  return members.filter(
    ({ category }: { category: string }) => category === generation
  );
};
