import { Order } from "@prisma/client";
import prismaClient from "../../prisma";

class RemoveOrderService {
  async execute({ order_id }: { order_id: string }) {
    // Verifica se a mesa existe
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { RemoveOrderService };