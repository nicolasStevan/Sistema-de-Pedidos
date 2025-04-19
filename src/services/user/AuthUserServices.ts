import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserServices {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    // Verifica se o email existe
    if (!user) {
      throw new Error("User/password incorrect");
    }

    // Verifica se a senha está correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    // Gera o token
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
      },
    };
  }
}

export { AuthUserServices };
