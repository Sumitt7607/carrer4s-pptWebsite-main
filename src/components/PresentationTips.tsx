import { motion, Variants } from "framer-motion";

const tips: string[] = [
  "Know your audience and adapt your language.",
  "Practice your speech multiple times.",
  "Maintain eye contact with the audience.",
  "Speak clearly and at a moderate pace.",
  "Use visuals to support your key points.",
  "Stay calm and composed even if mistakes happen.",
  "Engage your audience with questions or examples.",
  "Keep your slides uncluttered and readable.",
  "Time yourself to avoid over-running.",

];

// Type-safe variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10
    }
  }
};

const PresentationTips = () => {
  return (
    <section className="relative bg-[#121212] text-white py-100 px-4 md:px-16 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
          Things to Keep in Mind
        </h2>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base md:text-lg">
          Essential tips to ace your presentations confidently
        </p>
      </motion.div>

      {/* Tips List */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      >
        {tips.map((tip, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="relative p-6 rounded-xl bg-gray-900/70 border border-gray-700 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <span className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg animate-pulse"></span>
            <p className="text-sm sm:text-base md:text-base text-white font-medium">{tip}</p>
          </motion.li>
        ))}
      </motion.ul>

      {/* Decorative animated saffron blur */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default PresentationTips;
