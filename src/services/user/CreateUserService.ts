import prismaClient from "../../prisma";
interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //Verifica se o ele enviou um email
    if (!email) {
      throw new Error("Email incorrect");
    }
    //Verifica se o email já está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    //Cria o usuário no banco de dados
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
