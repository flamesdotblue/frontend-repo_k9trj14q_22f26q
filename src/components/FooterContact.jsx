import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterContact() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-neutral-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-rose-500 to-amber-400" />
              <div>
                <div className="text-xl font-bold text-neutral-900">Cognimit Technologies LLP</div>
                <div className="text-sm font-medium text-neutral-600">Where Intelligence Meets Innovation</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-neutral-600">
              We partner with founders and enterprises to design, build, and scale next‑generation products that lead markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-700">Contact</h4>
            <a href="mailto:hello@cognimit.com" className="flex items-start gap-3 text-neutral-700 hover:text-neutral-900">
              <Mail size={18} className="mt-0.5" /> hello@cognimit.com
            </a>
            <a href="mailto:deepak@cognimit.com" className="flex items-start gap-3 text-neutral-700 hover:text-neutral-900">
              <Mail size={18} className="mt-0.5" /> deepak@cognimit.com
            </a>
            <a href="tel:+919327057103" className="flex items-start gap-3 text-neutral-700 hover:text-neutral-900">
              <Phone size={18} className="mt-0.5" /> +91 93270 57103
            </a>
            <a href="https://www.cognimit.com" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-neutral-700 hover:text-neutral-900">
              <Globe size={18} className="mt-0.5" /> www.cognimit.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-700">Office</h4>
            <div className="flex items-start gap-3 text-neutral-700">
              <MapPin size={18} className="mt-0.5" />
              <p className="text-sm">
                A-Block, 606 Prahladnagar Trade Center, B/H Titanium city center, Vejalpur, Ahmedabad, Gujarat, 380051
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-neutral-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Cognimit Technologies LLP. All rights reserved.</p>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
