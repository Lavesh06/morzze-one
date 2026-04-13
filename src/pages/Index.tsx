import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import { products, categories, testimonials } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import heroBathroom from '@/assets/hero-bathroom.jpg';
import brandStory from '@/assets/brand-story.jpg';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

const Index = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src={heroBathroom} alt="Luxury bathroom" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-foreground/20" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="max-w-xl">
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-background/70 mb-4">Premium Kitchen & Bath</motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-6xl lg:text-7xl text-background leading-[1.1] mb-6">
              Elevate Your <span className="text-gradient-gold">Living Space</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-background/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Discover handcrafted fittings that transform everyday spaces into sanctuaries of luxury and design.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4">
              <Link to="/shop" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-background/90 transition-colors">
                Shop Now <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Collections</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Shop by Category</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/shop?category=${cat.id}`} className="group relative block overflow-hidden aspect-[3/4]">
                  <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <h3 className="font-serif text-lg lg:text-xl text-background mb-1">{cat.name}</h3>
                    <p className="text-xs text-background/60 hidden lg:block">{cat.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'Complimentary delivery on orders over $500' },
              { icon: Shield, title: 'Lifetime Warranty', desc: 'Every product backed by our quality promise' },
              { icon: Headphones, title: 'Expert Support', desc: 'Dedicated team of design consultants' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                <item.icon size={28} className="mx-auto mb-4 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Curated Selection</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Featured Products</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              View All <ArrowRight size={14} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src={brandStory} alt="Artisan craftsmanship" loading="lazy" className="w-full" width={1200} height={800} />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Story</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-foreground mb-6">Crafted with Purpose</motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
                Every LuxeHaus piece begins as a vision — a belief that the spaces where we prepare meals and find renewal deserve objects of enduring beauty.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
                Our artisans combine time-honored metalworking techniques with precision engineering, creating fittings that are as functional as they are beautiful. Each piece is tested to exceed industry standards.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                  Explore Collection <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">What Our Clients Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-background p-8 card-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} className="fill-gold text-gold" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Stay Connected</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-foreground mb-4">Join the LuxeHaus World</motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground mb-8">Exclusive offers, design tips, and new arrivals delivered to your inbox.</motion.p>
            <motion.form variants={fadeUp} className="flex max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="flex-1 border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors" />
              <button type="submit" className="bg-foreground text-background px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-foreground/90 transition-colors">Subscribe</button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
