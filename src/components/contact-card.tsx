"use client";

import { JSX } from "react";
import { motion } from "framer-motion";

interface ContactCardProps {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function ContactCard({ 
  icon, 
  title, 
  children, 
  href,
  className = ""
}: ContactCardProps) {
  // Animation variants for entry
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 80 } }
  };

  // Icon bounce on tap
  const iconTap = { scale: 0.9, rotate: -10 };

  // Card hover/tap effect
  const cardHover = { scale: 1.03, boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.21)" };
  const cardTap = { scale: 0.97 };

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <a
          href={href}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-xl"
          aria-label={`${title} - ${typeof children === 'string' ? children : 'Contact information'}`}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return <div className="block rounded-xl">{children}</div>;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={cardHover}
      whileTap={cardTap}
      className={`w-full ${className}`}
      style={{ touchAction: "manipulation" }}
    >
      <Wrapper>
        <div className="bg-gray-800 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-800/90 hover:border-emerald-800/50 border border-gray-700/50 duration-300 w-full">
          <div className="flex items-start sm:items-center gap-4">
            <motion.div
              className="w-12 h-12 rounded-full bg-emerald-900/60 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-lg shadow-emerald-900/20"
              whileTap={iconTap}
              whileHover={{ scale: 1.08, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {icon}
            </motion.div>
            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-white font-semibold text-lg mb-1"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                {title}
              </motion.h3>
              <motion.div
                className="text-gray-300 text-sm sm:text-base break-words"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
