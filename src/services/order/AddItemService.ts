import prismaClient from "../../prisma";

interface ItemRequest{
    orderId: string;
  productId: string;
  amount: number;
}

class AddItemService {
    async execute({ orderId, productId, amount }: ItemRequest) {
  
      const itemordem = await prismaClient.item.create({
        data: {
          orderId: orderId,     // Correto: usa o parâmetro recebido
          productId: productId, // Correto: usa o parâmetro recebido
          amount
        }
      });
  
      return itemordem;
    }
  }
  
  export { AddItemService }
  