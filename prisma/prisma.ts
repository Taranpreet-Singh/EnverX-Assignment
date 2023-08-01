import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | null = null;

const getInstance = () => {
  if (!prismaInstance) prismaInstance = new PrismaClient();

  return prismaInstance;
};

export const prisma = getInstance();
