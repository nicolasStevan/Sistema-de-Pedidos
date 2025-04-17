import { PrismaClient } from '@prisma/client' // Importa a classe PrismaClient do pacote @prisma/client, usada para interagir com o banco de dados

const prismaClient = new PrismaClient(); // Cria uma instância do PrismaClient para realizar as operações no banco

export default prismaClient; // Exporta a instância criada para ser usada em outros arquivos da aplicação
