"use client";

import { motion } from "framer-motion";
import { PanesContainer } from "@/components/crm/panes";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.996, y: 4, opacity: 0.8 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className="w-[100%] h-[100%]"
    >
      <PanesContainer
        width="100%"
        direction="row"
        justify="unset"
        height="100%"
      >
        {children}
      </PanesContainer>
    </motion.div>
  );
}
