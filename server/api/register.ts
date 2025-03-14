import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { username, email, password } = body;

    if( !username || !email || !password) {
        throw createError({ statusCode: 400, statusMessage: "All fields required" });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if( existingUser) {
        throw createError({ statusCode: 400, statusMessage: "User already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash( password, 10);

    // Create user
    const user = await prisma.user.create({
        data: { username, email, password: hashedPassword },
    });

    return { message: "User registered successfully.", user };
});

