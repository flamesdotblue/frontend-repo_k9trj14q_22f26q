import { motion } from 'framer-motion';
import { Brain, Rocket, Smartphone, Cloud, LineChart } from 'lucide-react';

const services = [
  {
    title: 'IT Consulting & Strategy',
    icon: Brain,
    desc:
      'Actionable roadmaps for modernization, cloud adoption, and digital transformation aligned to business outcomes.',
  },
  {
    title: 'Custom Software Development',
    icon: Rocket,
    desc:
      'Design and build secure, scalable platforms and internal tools tailored to your workflows and users.',
  },
  {
    title: 'Mobile & Web Applications',
    icon: Smartphone,
    desc:
      'Premium experiences that perform beautifully across devices using modern stacks and best practices.',
  },
  {
    title: 'SaaS Solutions Development',
    icon: Cloud,
    desc:
      'From MVP to multi-tenant architectures, we engineer reliable SaaS products ready to grow.',
  },
  {
    title: 'Digital Marketing & Growth',
    icon: LineChart,
    desc:
      'Performance-focused acquisition, SEO, and analytics to scale your product and revenue.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Intelligent solutions for modern businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-neutral-600"
          >
            We blend strategic thinking with engineering excellence to deliver measurable impact.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 text-white shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-rose-50/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
