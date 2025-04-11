import { Request, Response } from "express";    

import { verify } from "jsonwebtoken";

interface TokenPayload {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: Function) {

    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
    if (!token) {
        return res.status(401).json({ error: "Token missing" });
    }

    try {
        // Verify the token (you can use jwt.verify or any other method)
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.userId = decoded.id; // Assuming the token contains a user ID
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }

    const [,token] = token.split(" ");
}