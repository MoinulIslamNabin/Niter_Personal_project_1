import React, { forwardRef, Suspense } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./Components/Ui/Bg";

// Lazy load the components
const Routine = React.lazy(() => import("./Components/Home/Routine/Routine"));
const Docs = React.lazy(() => import("./Components/Home/Docs/Docs"));

export const AuroraBackgroundDemo = forwardRef(
  ({ routineRef, docsRef }, ref) => (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Optional: makes animation run only once
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 w-full max-w-full overflow-x-hidden"
      >
        <div className="pt-24 w-full max-w-full overflow-x-hidden">
          <Suspense fallback={<div className="text-white">Loading Routine...</div>}>
            <div id="routine-section">
              <Routine />
            </div>
          </Suspense>

          <Suspense fallback={<div className="text-white">Loading Docs...</div>}>
            <div id="docs-section">
              <Docs />
            </div>
          </Suspense>
        </div>
      </motion.div>
    </AuroraBackground>
  )
);
