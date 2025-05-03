import prismaClient from "../../prisma";    

interface DetailRequest {
    orderId: string;
    }

class DetailOrderService {
    async execute({ orderId }: DetailRequest) {
        // Verifica se a mesa existe
        const orders = await prismaClient.item.findMany({
            where: {
                orderId: orderId,
            },
            include: {
                product: true, // Inclui os detalhes do produto associado ao item
                order: true, // Inclui os detalhes do pedido associado ao item
            },

        })
       
              
        return orders;
    }
}
export { DetailOrderService };