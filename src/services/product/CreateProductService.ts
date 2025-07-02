import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: number;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({ name, price, description, banner, category_id }: ProductRequest) {
    if (!name || !price || !description || !banner || !category_id) {
      throw new Error("Campos obrigatórios não preenchidos.");
    }

    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
        image: banner,
        category: {
          connect: {
            id: category_id,
          },
        },
      },
    });

    return product;
  }
}

export { CreateProductService };
