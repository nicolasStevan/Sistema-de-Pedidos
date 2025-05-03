import prismaClient from "../../prisma";

class ListOrdersService {
  async execute() {
    // Lista todas as ordens
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return orders;
  }
}

export { ListOrdersService };
// O código acima define um serviço para listar ordens em um sistema de gerenciamento de pedidos. Ele busca todas as ordens que não são rascunhos e que têm o status definido como falso, ordenando os resultados pela data de criação em ordem decrescente. O serviço é exportado para ser utilizado em outras partes da aplicação.