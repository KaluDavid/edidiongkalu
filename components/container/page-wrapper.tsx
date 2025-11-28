"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial={{ y: "100%" }}
        animate={{
          y: 0,
          transition: {
            duration: 1.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.35,
          },
        }}
        exit={{}}
        className="size-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
