import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Reuse instance in development to prevent multiple connections
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if( process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;