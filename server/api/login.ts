import { PrismaClient } from "@prisma/client/extension";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = "kambing_perap";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { email, password } = body;

    if( !email || !password) {
        throw createError({ statusCode: 400, statusMessage: "Email and password required." });
    }

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if( !user) {
        throw createError({ statusCode: 401, statusMessage: "Invalid email or password." });
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if( !passwordMatch) {
        throw createError({ statusCode: 401, statusMessage: "Invalid email or password." });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });

    return { message: "Login successful", token };
})