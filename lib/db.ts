import { PrismaClient } from "@prisma/client";
import { comma } from "postcss/lib/list";

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
