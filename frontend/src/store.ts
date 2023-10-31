import { create } from "zustand";

interface CartEntry {
    itemId: number;
    quantity: number;
}

/*
cart.map(({ quantity }) => {..
        arg1.quantity;
    ..})
*/

export interface MenuItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface Store {
    menuItems: MenuItem[];
    cart: CartEntry[];
}

const useMenuStore = create<Store>((set) => ({
    cart: [],
    menuItems: [],
    setMenuItems: (items: MenuItem[]) => set({ menuItems: items }),

    addCartEntry: (id: number) => {
        set(state => {
            if (state.cart.findIndex(entry => entry.itemId === id) === -1) {
                return {
                    cart: [...state.cart, { itemId: id, quantity: 1 }]
                }
            } else {
                return {
                    cart: state.cart.map(entry => {
                        if (entry.itemId === id) {
                            return { ...entry, quantity: entry.quantity + 1 }
                        } else {
                            return entry
                        }
                    })
                }
            }
        })
    },
    decrementCartEntryQuantity: (id: number) => {
        set(state => (
            {
                cart: state.cart.map(entry => {
                    if (entry.itemId == id) {
                        return { ...entry, quantity: entry.quantity - 1 }
                    }
                    return entry
                }).filter(entry => entry.quantity > 0)
            }
        ))
    },
}))