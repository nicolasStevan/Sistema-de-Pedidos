import { Request, Response } from 'express';
import { AddItemService } from '../../services/order/AddItemService';

class AddItemController {
  async handle(req: Request, res: Response) {
    const { orderId, productId, amount } = req.body;

    const addItem = new AddItemService();

    const item = await addItem.execute({
      orderId,
      productId,
      amount
    });

    return res.json(item);
  }
}

export { AddItemController };
