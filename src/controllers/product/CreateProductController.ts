import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      // Logs para diagnóstico
      console.log("BODY recebido:", req.body);
      console.log("FILE recebido:", req.file);

      const { name, price, description, category_id } = req.body;

      if (!req.file) {
        return res.status(400).json({ error: "Imagem do produto é obrigatória." });
      }

      if (!name || !price || !description || !category_id) {
        return res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
      }

      const { filename: banner } = req.file;

      const createProductService = new CreateProductService();

      const product = await createProductService.execute({
        name,
        price: Number(price),
        description,
        banner,
        category_id,
      });

      return res.status(201).json(product);
    } catch (err) {
      console.error("Erro ao cadastrar produto:", err);
      return res.status(500).json({ error: "Erro interno ao cadastrar produto." });
    }
  }
}

export { CreateProductController };
