import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const getPositions = async () => {
  await prisma.$connect;

  const positions = prisma.positions.findMany();
  prisma.$disconnect();
  return positions;
};

export const addPosition = async (id: string, x: number, y: number) => {
  await prisma.$connect;

  const findMemberPosition =  await prisma.positions.findFirst({
    where: {
      memberId: id
    }
  });

  if(!findMemberPosition) {
    const createPosition = await prisma.positions.create({
      data: {
        memberId: id,
        coordinateX: x,
        coordinateY: y
      }
    })
    return createPosition;
  }else {
    const updatePosition = await prisma.positions.updateMany({
      where: {
        memberId: id
      },
      data: {
        coordinateX: x,
        coordinateY: y
      },
    });

    return updatePosition;
  }
  
}