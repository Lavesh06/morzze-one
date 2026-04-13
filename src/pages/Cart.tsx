import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const Cart = () => {
  const { items, updateQuantity, removeItem, cartTotal } = useCartStore();
  const [coupon, setCoupon] = useState('');
  const total = cartTotal();
  const shipping = total > 500 ? 0 : 49;

  if (items.length === 0) {
    return (
      <main className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-4" strokeWidth={1} />
          <h1 className="font-serif text-2xl mb-2">Your Cart is Empty</h1>
          <p className="text-sm text-muted-foreground mb-6">Discover our premium collection and find something you love.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs tracking-widest uppercase font-medium">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> Continue Shopping
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex gap-4 border border-border p-4"
              >
                <Link to={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0 bg-secondary overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <Link to={`/product/${item.id}`} className="text-sm font-medium truncate">{item.name}</Link>
                    <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-foreground"><X size={16} /></button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">${item.price}</p>
                  <div className="flex items-center mt-3 border border-border w-fit">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-secondary"><Minus size={12} /></button>
                    <span className="px-3 py-1 text-xs font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-secondary"><Plus size={12} /></button>
                  </div>
                </div>
                <p className="text-sm font-medium self-end">${(item.price * item.quantity).toFixed(2)}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-secondary p-6 h-fit">
            <h2 className="font-serif text-lg mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${total.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping}`}</span></div>
              <div className="border-t border-border pt-3 flex justify-between font-medium text-base">
                <span>Total</span><span>${(total + shipping).toFixed(2)}</span>
              </div>
            </div>
            <form className="flex gap-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon code" className="flex-1 border border-border bg-background px-3 py-2 text-xs focus:outline-none" />
              <button type="submit" className="px-4 py-2 text-xs tracking-wider uppercase border border-foreground hover:bg-foreground hover:text-background transition-colors">Apply</button>
            </form>
            <button className="w-full bg-foreground text-background py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-foreground/90 transition-colors">
              Proceed to Checkout
            </button>
            {shipping > 0 && <p className="text-xs text-muted-foreground text-center mt-3">Free shipping on orders over $500</p>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
