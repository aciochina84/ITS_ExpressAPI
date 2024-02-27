import { Request, Response, NextFunction } from 'express';
import productService from '../product/product.service';
import cartItemService from './cart-item.service';
import { CartItem } from './cart-item.entity';

//-------------------------------------------------------------------------------
export const list = async (req: Request, res: Response, next: NextFunction) => {
  const items = cartItemService.list();
  res.json(items);
};

// ------------------------------------------------------------------------------
export const add = async (req: Request, res: Response, next: NextFunction) => {
  const { productId, quantity } = req.body;
  console.log(productId, quantity);

  // controllare che il prodotto esista
  const product = await productService.getById(productId);
  if (!product) {
    res.sendStatus(404);
    return;
  }
  // constrollare se in prodotto e gia nel carello
  // se c'e gia sommo la quantita
  const newItem: CartItem = {
    product: productId,
    quantity,
  };
  const saved = await cartItemService.add(newItem);
  // se non c'e aggiungo al carrello

  res.json(saved);
};

// -------------------------------------------------------------------------------

export const updateQuantity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { quantity } = req.body;
  const { id } = req.params;

  const updated = await cartItemService.update(id, { quantity });
  res.json(updated);
};

// ------------------------------------------------------------------------------

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
