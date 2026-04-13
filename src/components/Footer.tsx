import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-xl font-bold tracking-wider mb-4">LUXE<span className="text-gold">HAUS</span></h3>
          <p className="text-sm text-background/60 leading-relaxed">Premium kitchen & bathroom fittings crafted for those who appreciate the finer things.</p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">Shop</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/shop?category=sinks" className="hover:text-background transition-colors">Sinks</Link></li>
            <li><Link to="/shop?category=faucets" className="hover:text-background transition-colors">Faucets</Link></li>
            <li><Link to="/shop?category=basins" className="hover:text-background transition-colors">Basins</Link></li>
            <li><Link to="/shop?category=accessories" className="hover:text-background transition-colors">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">Company</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">Newsletter</h4>
          <p className="text-sm text-background/60 mb-3">Get exclusive offers and design inspiration.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className="flex-1 bg-background/10 border border-background/20 px-3 py-2 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/40" />
            <button type="submit" className="bg-background text-foreground px-4 py-2 text-xs tracking-widest uppercase font-medium hover:bg-background/90 transition-colors">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/40">
        © {new Date().getFullYear()} LuxeHaus. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
