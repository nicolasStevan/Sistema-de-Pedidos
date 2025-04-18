import prismaClient from "../../prisma";

import { Product } from "@prisma/client";


interface IProductRequest {
    name: string;
    price: string;
    description: string;
    category_id: string;
    banner: string;
}

class CreateProductService{
    async execute({name, price, description, banner,category_id}:IProductRequest){

        return {ok:true}
    }
}

export { CreateProductService };