import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
}

interface CartState {
  items: CartItem[];
  wishlist: string[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  cartTotal: () => number;
  cartCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],
      addItem: (item) => set((state) => {
        const existing = state.items.find((i) => i.id === item.id);
        if (existing) {
          return { items: state.items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),
      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) => set((state) => ({
        items: quantity <= 0 ? state.items.filter((i) => i.id !== id) : state.items.map((i) => i.id === id ? { ...i, quantity } : i),
      })),
      clearCart: () => set({ items: [] }),
      toggleWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.includes(id) ? state.wishlist.filter((i) => i !== id) : [...state.wishlist, id],
      })),
      cartTotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      cartCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: 'luxe-cart' }
  )
);
