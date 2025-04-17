import { NextFunction, Request, Response } from "express";    // Importa os tipos necessários do Express para tipagem das requisições, respostas e função next

import { verify } from "jsonwebtoken"; // Importa a função 'verify' da biblioteca jsonwebtoken para validar tokens JWT

interface TokenPayload {
    sub: string; // Define a interface do payload do token, que contém apenas o campo 'sub' (ID do usuário)
}

export function isAuthenticated( // Função middleware para verificar se o usuário está autenticado
    req: Request, // Objeto da requisição
    res: Response, // Objeto da resposta
    next: NextFunction) { // Função next para passar para o próximo middleware

    const authToken = req.headers.authorization; // Obtém o token do cabeçalho Authorization

    if (!authToken) {
       return res.status(401).end(); // Se não houver token, retorna 401 Unauthorized
    }

    const [, token] = authToken.split(" "); // Extrai o token do formato "Bearer token"

    try {
      const { sub } = verify( // Verifica e decodifica o token JWT usando a chave secreta
        token,
        process.env.JWT_SECRET
      ) as Payload; // Faz o cast para o tipo Payload (esse nome está diferente da interface definida)

    req.user_id = sub; // Adiciona o ID do usuário (sub) no objeto da requisição para uso posterior

    return next(); // Continua para o próximo middleware ou rota

    } catch (err) {
      return res.status(401).end(); // Se o token for inválido ou der erro, retorna 401 Unauthorized
    }
}
