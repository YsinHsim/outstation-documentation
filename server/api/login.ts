import prisma from "../utils/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = "kambing_perap";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { email, password } = body;

    // Validate input
    if( !email || !password) {
        throw createError({ statusCode: 400, statusMessage: "Email and password required." });
    }

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    
    // Always return the same error message to avoid user enumeration
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw createError({ statusCode: 401, statusMessage: "Invalid email or password." });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });

    // Set secure HTTP-only cookie
    setCookie(event, "auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Secure only in production
        sameSite: "strict",
        maxAge: 60 * 60, // 1 hour
        path: "/",
    });

    return { message: "Login successful", token };
})