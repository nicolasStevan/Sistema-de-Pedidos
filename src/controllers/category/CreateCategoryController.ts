import { Request, Response } from "express"; // Importa os tipos Request e Response do Express para tipar os parâmetros da função
import { CreateCategoryService } from '../../services/category/CreateCategoryService' // Importa o serviço responsável pela lógica de criação de categorias

class CreateCategoryController { // Define a classe do controller responsável por lidar com a requisição de criação de categoria
    async handle(req: Request, res: Response) { // Método assíncrono que trata a requisição HTTP
        const { name } = req.body; // Extrai o campo 'name' do corpo da requisição

        const createCategoryService = new CreateCategoryService(); // Cria uma instância do serviço de criação de categoria

        const category = await createCategoryService.execute({ // Executa o serviço passando o nome da categoria
            name
        });

        return res.json(category); // Retorna a resposta com os dados da categoria criada em formato JSON
    }
}

export { CreateCategoryController }; // Exporta a classe para que possa ser usada em outros arquivos
