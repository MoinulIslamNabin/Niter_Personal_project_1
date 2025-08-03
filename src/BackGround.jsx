import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./Components/Ui/Bg";
import Routine from "./Components/Home/Routine/Routine";
import Docs from "./Components/Home/Docs/Docs";

export const AuroraBackgroundDemo = forwardRef(
  ({ routineRef, docsRef }, ref) => (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 w-full max-w-full overflow-x-hidden"
      >
        <div className="pt-24 w-full max-w-full overflow-x-hidden">
          <div id="routine-section">
            <Routine />
          </div>
          <div id="docs-section">
            <Docs />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  )
);
