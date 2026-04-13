import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import type { Product } from '@/data/products';

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem, toggleWishlist, wishlist } = useCartStore();
  const isWished = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="relative overflow-hidden bg-secondary mb-3">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest uppercase px-2 py-1">Sale</span>
        )}
        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-muted-foreground text-background text-[10px] tracking-widest uppercase px-2 py-1">Sold Out</span>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => toggleWishlist(product.id)}
            className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={16} fill={isWished ? 'currentColor' : 'none'} />
          </button>
          {product.inStock && (
            <button
              onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] })}
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag size={16} />
            </button>
          )}
        </div>
      </div>
      <Link to={`/product/${product.id}`}>
        <h3 className="text-sm font-medium text-foreground mb-1">{product.name}</h3>
      </Link>
      <div className="flex items-center gap-1 mb-1">
        <Star size={12} className="fill-gold text-gold" />
        <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">${product.price}</span>
        {product.originalPrice && (
          <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
