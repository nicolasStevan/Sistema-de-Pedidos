import prismaClient from "../../prisma";

interface OrderRequest {
    orderId: string;
}

class FinishOrderService {
    async execute({orderId}: OrderRequest) {
        // Verifica se a mesa existe
        const order = await prismaClient.order.update({
        where: {
            id: orderId,
        },
        data: {
            status: true,
        },
        });
    
        return order;
    }
    }   
    export { FinishOrderService };
// O código acima define um serviço para finalizar um pedido em um sistema de gerenciamento de pedidos. Ele atualiza o status do pedido para "WAITING" e altera a propriedade "draft" para false, indicando que o pedido não é mais um rascunho. O serviço é exportado para ser utilizado em outras partes da aplicação.