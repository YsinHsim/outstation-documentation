import prisma from "../utils/prisma";
import bcrypt from "bcryptjs";


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { username, email, password } = body;

    // Validate input fields
    if( !username || !email || !password) {
        throw createError({ statusCode: 400, statusMessage: "All fields required." });
    }

    // Trim inputs to prevent unwanted spaces
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim().toLowerCase();

    // Check if user exists
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [{ email: trimmedEmail }, { username: trimmedUsername }],
        },
    });

    if( existingUser) {
        throw createError({ statusCode: 400, statusMessage: "User already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash( password, 10);

    // Create user
    const user = await prisma.user.create({
        data: {
            username: trimmedUsername,
            email: trimmedEmail,
            password: hashedPassword,
        },
    });

    return { message: "User registered successfully.", user };
});

