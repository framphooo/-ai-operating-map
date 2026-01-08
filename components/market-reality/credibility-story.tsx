"use client";

import { motion } from "framer-motion";

// Company logo components with actual brand styling
const CompanyLogo = ({ name }: { name: string }) => {
  const logos: { [key: string]: JSX.Element } = {
    AWS: (
      <div className="font-heading font-bold text-lg tracking-tight" style={{ color: '#FF9900' }}>
        AWS
      </div>
    ),
    EY: (
      <div className="font-heading font-bold text-xl tracking-tight" style={{ color: '#FFE600' }}>
        EY
      </div>
    ),
    BCG: (
      <div className="font-heading font-bold text-lg tracking-tight" style={{ color: '#0066CC' }}>
        BCG
      </div>
    ),
    Oracle: (
      <div className="font-heading font-bold text-base tracking-tight" style={{ color: '#F80000' }}>
        Oracle
      </div>
    ),
    Salesforce: (
      <div className="font-heading font-bold text-sm tracking-tight" style={{ color: '#00A1E0' }}>
        Salesforce
      </div>
    ),
    SAP: (
      <div className="font-heading font-bold text-xl tracking-tight" style={{ color: '#008FD3' }}>
        SAP
      </div>
    ),
  };

  return logos[name] || <span className="font-heading font-semibold">{name}</span>;
};

const companies = [
  { name: "AWS", width: 60, height: 36 },
  { name: "EY", width: 50, height: 36 },
  { name: "BCG", width: 70, height: 36 },
  { name: "Oracle", width: 100, height: 36 },
  { name: "Salesforce", width: 130, height: 36 },
  { name: "SAP", width: 50, height: 36 },
];

export default function CredibilityStory() {
  // Duplicate companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-12 px-6 lg:px-8 bg-background border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Small text content */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm md:text-base text-secondary leading-relaxed">
              At the end of 2025, after the era of global AI acceleration, the insights on this site reflect what the market has actually learned. The content is grounded in real data shared at global forums such as World AI Summit, with presentations from leading organizations.
            </p>
          </div>

          {/* Infinite Scrolling Logo Carousel */}
          <div className="relative mt-10 overflow-hidden h-16">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            
            {/* Animated wrapper for infinite scroll */}
            <motion.div
              className="flex gap-12 md:gap-16 items-center h-full"
              animate={{
                x: [0, -100 * companies.length * 4], // Scroll distance for one full set
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`logo-${company.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ height: company.height, minWidth: company.width }}
                >
                  <CompanyLogo name={company.name} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

