import { motion } from "framer-motion";
import parLogo from "../assets/par-logo.jpg";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1324] to-[#0f1e3d] text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* Logo */}
        <div className="mb-12">
          <img
            src={parLogo}
            alt="Par Equity Group Logo"
            className="h-20 md:h-32 w-auto mx-auto"
          />
        </div>

        {/* Maintenance Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-[-0.02em] mb-6">
            Under Maintenance
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            We're currently performing scheduled maintenance to improve our services.
            We'll be back shortly.
          </p>
          
          <div className="space-y-4">
            <p className="text-sm text-white/60">
              Thank you for your patience. For urgent inquiries, please contact us at:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="tel:+27214932767" 
                className="text-white/80 hover:text-white transition-colors"
              >
                +27 21 493 2767
              </a>
              <span className="hidden sm:inline text-white/40">•</span>
              <a 
                href="mailto:info@parring.co.za" 
                className="text-white/80 hover:text-white transition-colors"
              >
                info@parring.co.za
              </a>
            </div>
          </div>
        </motion.div>

        {/* Animated dots */}
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Maintenance;
