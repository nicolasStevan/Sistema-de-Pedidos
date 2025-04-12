import { NextFunction, Request, Response } from "express";    

import { verify } from "jsonwebtoken";

interface TokenPayload {
    sub: string;
}

export function isAuthenticated(
    req: Request, 
    res: Response,
    next: NextFunction) {

    const authToken = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
    if (!authToken) {
        return res.status(401).json({ error: "Token missing" });
    }

    try {
      const{} = verify(
        token,
        process.env.JWT_SECRET
      )as TokenPayload; // Verifica se o token é válido e decodifica o payload
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }

    const [,token] = authToken.split(" ");

    
}