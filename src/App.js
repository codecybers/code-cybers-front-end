import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComingSoon from "./componants/coming-soon";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Coming Soon";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 75);
      return () => clearInterval(typingInterval);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
          >
            <motion.img
              src="./logo_2.png"
              alt="Company Logo"
              className="w-16 h-16 md:w-20 md:h-20 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            />
            <motion.h1
              className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Code Cybers
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg text-gray-400 uppercase mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              Shaping the Digital Future
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ComingSoon></ComingSoon>

        </>
      )}
    </div>
  );
}

