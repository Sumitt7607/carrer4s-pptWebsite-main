import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface UniversityCard {
  title: string;
  description: string;
  path: string;
}

const universityCategories: UniversityCard[] = [
  {
    title: "IIT / NIT / IIIT",
    description: "Premier technical institutes in India",
    path: "/colleges/iit-nit-iiit",
  },
  {
    title: "Central Government Universities",
    description: "Top universities funded by central government",
    path: "/colleges/central-universities",
  },
  {
    title: "State Government Universities",
    description: "Leading universities funded by state governments",
    path: "/colleges/state-universities",
  },
  {
    title: "Deemed & Private Universities",
    description: "Reputed private and deemed universities",
    path: "/colleges/deemed-private",
  },
];

const TopUniversitiesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 md:px-16 bg-[#121212] text-white overflow-hidden">
      {/* -------- HEADER -------- */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
          State-wise Top Universities & Colleges
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-lg md:text-xl">
          Explore the best engineering institutions across India
        </p>
      </motion.div>

      {/* -------- CARDS GRID -------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-20">
        {universityCategories.map((category, index) => (
          <motion.div
            key={index}
            className="relative z-20 rounded-2xl p-8 bg-gray-900/80 border border-gray-700 shadow-xl cursor-pointer transition-all duration-300"
            style={{ pointerEvents: "auto" }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 25px 40px rgba(255, 165, 0, 0.3)",
            }}
            onClick={() => navigate(category.path)}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-yellow-400">
              {category.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-400">
              {category.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* -------- DECORATIVE BLOBS (NON-CLICKABLE) -------- */}
      <motion.div
        className="pointer-events-none absolute top-10 left-10 w-52 h-52 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default TopUniversitiesSection;
