import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: number;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({    name,    price,    description,    banner,    category_id,  }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        image: banner, // se você tiver esse campo no banco
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
