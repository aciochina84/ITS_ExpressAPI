import { CartItem } from './cart-item.entity';

const CART: CartItem[] = [];

// ***************************************************************************
export class CartItemService {
  // ----------------------------------------------------------------------
  async add(item: CartItem) {
    const existing = CART.find((element) => element.product === item.product);

    if (existing) {
      return this.update(existing.id!, {
        quantity: existing.quantity + item.quantity,
      });
    }
    const toAdd = {
      id: `${CART.length}`,
      ...item,
    };

    CART.push(toAdd);

    console.log(CART);
    return toAdd;
  }

  async list() {
    return CART;
  }

  async update(id: string, data: Partial<Omit<CartItem, 'id' | 'product'>>) {
    // Partial ia toate proprietatile si sunt optionale
    // Omite id-ul

    const existing = CART.find((element) => element.id === id);
    if (existing) {
      return null;
    }

    Object.assign(existing, data); // ia toate proprietatile care sunt in data si le pune la dispozi
    // existing.quantity = quantity;
    return existing;
  }
}

// ********************************************************************************

export default new CartItemService();
