import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Minus, Plus, ArrowLeft, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, toggleWishlist, wishlist } = useCartStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [added, setAdded] = useState(false);

  if (!product) return (
    <div className="pt-32 text-center min-h-screen">
      <p className="text-muted-foreground">Product not found.</p>
      <Link to="/shop" className="text-sm underline mt-4 inline-block">Back to shop</Link>
    </div>
  );

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const isWished = wishlist.includes(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="overflow-hidden bg-secondary mb-3">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full aspect-square object-cover" />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors ${i === selectedImage ? 'border-foreground' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{product.category}</p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{product.rating} · {product.reviews} reviews</span>
            </div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-medium">${product.price}</span>
              {product.originalPrice && <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variants */}
            {product.variants.map((v) => (
              <div key={v.label} className="mb-6">
                <p className="text-xs tracking-widest uppercase font-medium mb-2">{v.label}: <span className="text-muted-foreground font-normal">{selectedVariants[v.label] || v.options[0]}</span></p>
                <div className="flex flex-wrap gap-2">
                  {v.options.map((opt) => (
                    <button key={opt}
                      onClick={() => setSelectedVariants({ ...selectedVariants, [v.label]: opt })}
                      className={`px-4 py-2 text-xs border transition-colors ${(selectedVariants[v.label] || v.options[0]) === opt ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Quantity & Actions */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3 hover:bg-secondary transition-colors"><Minus size={14} /></button>
                <span className="px-4 py-3 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3 hover:bg-secondary transition-colors"><Plus size={14} /></button>
              </div>
              <p className="text-xs text-muted-foreground">{product.inStock ? <span className="flex items-center gap-1 text-success"><Check size={12} /> In Stock</span> : 'Out of Stock'}</p>
            </div>

            <div className="flex gap-3 mb-10">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-foreground text-background py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-foreground/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="w-12 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Toggle wishlist"
              >
                <Heart size={18} fill={isWished ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Specs */}
            <div className="border-t border-border pt-6">
              <h3 className="text-xs tracking-widest uppercase font-medium mb-4">Specifications</h3>
              <dl className="grid grid-cols-2 gap-y-3 gap-x-4">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key}>
                    <dt className="text-xs text-muted-foreground">{key}</dt>
                    <dd className="text-sm font-medium">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
