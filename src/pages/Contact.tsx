import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

const Contact = () => (
  <main className="pt-20 lg:pt-24 min-h-screen">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Get in Touch</p>
        <h1 className="font-serif text-3xl md:text-4xl">Contact Us</h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="space-y-8 mb-8">
            {[
              { icon: Phone, label: 'Phone', value: '+1 (800) 555-LUXE' },
              { icon: Mail, label: 'Email', value: 'hello@luxehaus.com' },
              { icon: MapPin, label: 'Showroom', value: '245 Design District, New York, NY 10013' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <item.icon size={20} className="text-muted-foreground mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-secondary aspect-video flex items-center justify-center text-sm text-muted-foreground">
            Map placeholder
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First Name" className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors" />
            <input placeholder="Last Name" className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors" />
          </div>
          <input placeholder="Email" type="email" className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors" />
          <input placeholder="Phone" type="tel" className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors" />
          <select className="w-full border border-border bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:border-foreground">
            <option>Select a subject</option>
            <option>Product inquiry</option>
            <option>Order support</option>
            <option>Partnership</option>
            <option>Other</option>
          </select>
          <textarea rows={5} placeholder="Your message" className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none" />
          <button type="submit" className="w-full bg-foreground text-background py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-foreground/90 transition-colors">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </main>
);

export default Contact;
