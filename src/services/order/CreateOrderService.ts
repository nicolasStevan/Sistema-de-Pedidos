import prismaClient from "../../prisma";

import { Product } from "@prisma/client";



interface OrderRequest {
  table: string;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }) {
    // Verifica se a mesa existe
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });

    return order;
  }
}
export { CreateOrderService };
