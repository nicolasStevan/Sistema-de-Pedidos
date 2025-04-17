import { NextFunction, Request, Response } from "express";    

import { verify } from "jsonwebtoken";

interface TokenPayload {
    sub: string;
}

export function isAuthenticated(
    req: Request, 
    res: Response,
    next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken) {
       return res.status(401).end(); // Se não houver token, retorna 401 Unauthorized
    }

    const [, token] = authToken.split(" "); // Extrai o token do cabeçalho Authorization

    try {
      const { sub } = verify(
        token,
        process.env.JWT_SECRET
      )as Payload; // Verifica se o token é válido e decodifica o payload
    

    req.user_id = sub; 

    return next();

    }catch (err) {
      return res.status(401).end(); // Se o token for inválido, retorna 401 Unauthorized

   
      }

    
}