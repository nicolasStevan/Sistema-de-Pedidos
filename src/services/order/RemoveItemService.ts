import prismaClient from "../../prisma";

interface ItemRequest {
  itemId: string;
}

class RemoveItemService {
  async execute({ itemId }: ItemRequest) {


    // Verifica se o item existe
    const itemExists = await prismaClient.item.findFirst({
      where: {
        id: itemId,
      },
    });

    // Remove o item da ordem
    const itemRemoved = await prismaClient.item.delete({
      where: {
        id: itemExists.id,
      },
    });

    return itemRemoved;
  }
}

export { RemoveItemService };
// O código acima define um serviço para remover um item de um pedido em um sistema de gerenciamento de pedidos. Ele verifica se o item existe e, em seguida, o remove do banco de dados usando o Prisma Client. O serviço é exportado para ser utilizado em outras partes da aplicação.