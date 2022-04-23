import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getMembers() {
  await prisma.$connect();

  const members = await prisma.members.findMany();

  prisma.$disconnect();
  return members;
}

export async function getMember(slug: string) {
  await prisma.$connect();

  const member = await prisma.members.findFirst({
    where: { slug },
  });

  prisma.$disconnect();
  return member;
}
