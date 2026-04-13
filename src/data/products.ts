export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  material: string;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  specs: Record<string, string>;
  inStock: boolean;
  variants: { label: string; options: string[] }[];
  featured?: boolean;
}

export const categories = [
  { id: 'sinks', name: 'Sinks', description: 'Premium kitchen & bathroom sinks', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80' },
  { id: 'faucets', name: 'Faucets', description: 'Designer faucets & taps', image: 'https://images.unsplash.com/photo-1585128903994-9788298932a4?w=600&q=80' },
  { id: 'basins', name: 'Basins', description: 'Luxury wash basins', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80' },
  { id: 'accessories', name: 'Accessories', description: 'Bath & kitchen accessories', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80' },
];

export const products: Product[] = [
  {
    id: '1', name: 'Milano Undermount Sink', price: 899, originalPrice: 1099, category: 'sinks', material: 'Stainless Steel',
    rating: 4.8, reviews: 124, inStock: true, featured: true,
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'],
    description: 'Crafted from premium 304 stainless steel, the Milano sink features a seamless undermount design that elevates any kitchen.',
    specs: { 'Dimensions': '32" x 19" x 10"', 'Material': '304 Stainless Steel', 'Gauge': '16 Gauge', 'Finish': 'Brushed Nickel', 'Installation': 'Undermount', 'Warranty': 'Lifetime Limited' },
    variants: [{ label: 'Size', options: ['30"', '32"', '36"'] }, { label: 'Finish', options: ['Brushed Nickel', 'Matte Black', 'Chrome'] }],
  },
  {
    id: '2', name: 'Aria Waterfall Faucet', price: 459, category: 'faucets', material: 'Brass',
    rating: 4.9, reviews: 89, inStock: true, featured: true,
    images: ['https://images.unsplash.com/photo-1585128903994-9788298932a4?w=800&q=80', 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=800&q=80'],
    description: 'The Aria Waterfall Faucet combines artistry with engineering. Its cascading waterfall flow creates a spa-like experience.',
    specs: { 'Height': '12.5"', 'Material': 'Solid Brass', 'Finish': 'Brushed Gold', 'Flow Rate': '1.2 GPM', 'Valve': 'Ceramic Disc', 'Warranty': '10 Years' },
    variants: [{ label: 'Finish', options: ['Brushed Gold', 'Matte Black', 'Chrome', 'Rose Gold'] }],
  },
  {
    id: '3', name: 'Verona Vessel Basin', price: 649, originalPrice: 799, category: 'basins', material: 'Ceramic',
    rating: 4.7, reviews: 67, inStock: true, featured: true,
    images: ['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'],
    description: 'A statement piece for modern bathrooms. Hand-finished ceramic with a perfectly smooth interior glaze.',
    specs: { 'Dimensions': '24" x 16" x 6"', 'Material': 'Fine Ceramic', 'Weight': '28 lbs', 'Drain': '1.75" Standard', 'Finish': 'Matte White', 'Warranty': '5 Years' },
    variants: [{ label: 'Color', options: ['Matte White', 'Matte Black', 'Grey'] }],
  },
  {
    id: '4', name: 'Luxe Towel Ring', price: 129, category: 'accessories', material: 'Brass',
    rating: 4.6, reviews: 203, inStock: true, featured: true,
    images: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80'],
    description: 'Minimalist brass towel ring with a weighted feel and premium finish that complements any bathroom.',
    specs: { 'Diameter': '7.5"', 'Material': 'Solid Brass', 'Finish': 'Brushed Gold', 'Mounting': 'Wall Mount', 'Hardware': 'Included', 'Warranty': '5 Years' },
    variants: [{ label: 'Finish', options: ['Brushed Gold', 'Chrome', 'Matte Black'] }],
  },
  {
    id: '5', name: 'Monaco Pull-Down Faucet', price: 579, category: 'faucets', material: 'Stainless Steel',
    rating: 4.8, reviews: 156, inStock: true,
    images: ['https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=800&q=80'],
    description: 'Professional-grade pull-down faucet with a magnetic docking system and 3-function spray head.',
    specs: { 'Height': '18"', 'Material': 'Stainless Steel', 'Spray Modes': '3', 'Hose Length': '24"', 'Finish': 'Chrome', 'Warranty': 'Lifetime' },
    variants: [{ label: 'Finish', options: ['Chrome', 'Brushed Nickel', 'Matte Black'] }],
  },
  {
    id: '6', name: 'Firenze Farmhouse Sink', price: 1249, category: 'sinks', material: 'Fireclay',
    rating: 4.9, reviews: 45, inStock: true,
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'],
    description: 'Handcrafted fireclay farmhouse sink. Each piece is kiln-fired at 2000°F for unmatched durability.',
    specs: { 'Dimensions': '33" x 20" x 10"', 'Material': 'Fireclay', 'Weight': '85 lbs', 'Bowl Depth': '10"', 'Finish': 'Glossy White', 'Warranty': 'Lifetime' },
    variants: [{ label: 'Size', options: ['30"', '33"', '36"'] }, { label: 'Color', options: ['White', 'Biscuit'] }],
  },
  {
    id: '7', name: 'Siena Wall-Mount Basin', price: 549, category: 'basins', material: 'Solid Surface',
    rating: 4.5, reviews: 38, inStock: false,
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'],
    description: 'Ultra-slim wall-mounted basin crafted from solid surface material. Seamless and stain-resistant.',
    specs: { 'Dimensions': '20" x 14" x 4"', 'Material': 'Solid Surface', 'Installation': 'Wall Mount', 'Drain': 'Included', 'Warranty': '10 Years' },
    variants: [{ label: 'Color', options: ['White', 'Grey'] }],
  },
  {
    id: '8', name: 'Palazzo Soap Dispenser', price: 89, category: 'accessories', material: 'Glass & Brass',
    rating: 4.4, reviews: 312, inStock: true,
    images: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80'],
    description: 'Hand-blown glass soap dispenser with a solid brass pump. A subtle luxury for everyday rituals.',
    specs: { 'Height': '8"', 'Capacity': '12 oz', 'Material': 'Glass & Brass', 'Pump': 'Brass', 'Warranty': '2 Years' },
    variants: [{ label: 'Glass Color', options: ['Clear', 'Smoky', 'Amber'] }],
  },
];

export const testimonials = [
  { name: 'Sarah Mitchell', role: 'Interior Designer', text: 'The quality is exceptional. Every piece feels like it was made just for my projects. My clients are always impressed.', rating: 5 },
  { name: 'James Chen', role: 'Architect', text: 'Finally, a brand that understands modern luxury. The Milano sink transformed our latest residential project.', rating: 5 },
  { name: 'Emily Ross', role: 'Homeowner', text: 'Worth every penny. The Aria faucet is the centerpiece of our bathroom renovation. Stunning craftsmanship.', rating: 5 },
];
