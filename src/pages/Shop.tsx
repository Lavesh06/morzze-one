import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const materials = [...new Set(products.map((p) => p.material))];
const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || '';
  const [sort, setSort] = useState('popular');
  const [materialFilter, setMaterialFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) result = result.filter((p) => p.category === activeCategory);
    if (materialFilter) result = result.filter((p) => p.material === materialFilter);
    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'newest': result.reverse(); break;
      default: result.sort((a, b) => b.reviews - a.reviews);
    }
    return result;
  }, [activeCategory, materialFilter, sort]);

  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">Shop</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} products</p>
        </motion.div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 border border-border px-4 py-2 text-xs tracking-widest uppercase hover:bg-secondary transition-colors">
            <SlidersHorizontal size={14} /> Filters
          </button>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { searchParams.delete('category'); setSearchParams(searchParams); }}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors ${!activeCategory ? 'bg-foreground text-background' : 'border border-border hover:bg-secondary'}`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { searchParams.set('category', cat.id); setSearchParams(searchParams); }}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors ${activeCategory === cat.id ? 'bg-foreground text-background' : 'border border-border hover:bg-secondary'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="ml-auto border border-border bg-background px-3 py-2 text-xs tracking-wider uppercase focus:outline-none"
          >
            {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        {/* Expandable filters */}
        {showFilters && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="border border-border p-4 mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs tracking-widest uppercase font-medium">Material</span>
              {materialFilter && <button onClick={() => setMaterialFilter('')} className="text-xs text-muted-foreground flex items-center gap-1"><X size={12} /> Clear</button>}
            </div>
            <div className="flex flex-wrap gap-2">
              {materials.map((m) => (
                <button key={m} onClick={() => setMaterialFilter(materialFilter === m ? '' : m)}
                  className={`px-3 py-1.5 text-xs transition-colors ${materialFilter === m ? 'bg-foreground text-background' : 'border border-border hover:bg-secondary'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products match your filters.</p>
        )}
      </div>
    </main>
  );
};

export default Shop;
