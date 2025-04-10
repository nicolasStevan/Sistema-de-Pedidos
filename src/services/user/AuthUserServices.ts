import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {

    email: string;
    password: string;
}

class AuthUserServices {
    async execute({email,password}: AuthRequest) {
       const user = await prismaClient.user.findFirst({
        where: {
            email: email
        }
         });
        //Verifica se o email existe
        if(!user){
            throw new Error("User/password incorrect")
        }
        //Verifica se a senha está correta  

        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){ 
            throw new Error("User/password incorrect")
        }
        //Verifica se o usuário está ativo

        return {ok :true}

    }
}

export { AuthUserServices };