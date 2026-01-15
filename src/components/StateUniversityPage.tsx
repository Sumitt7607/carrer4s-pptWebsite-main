import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */

const universities = [
  {
    name: "Anna University",
    image:
      "/anna.jpeg",
  },
  {
    name: "Savitribai Phule Pune University",
    image:
      "/sbp.jpg",
  },
  {
    name: "Osmania University",
    image:
      "/osma.jpg",
  },
  {
    name: "Jadavpur University",
    image:
      "/jadav.webp",
  },
  {
    name: "University of Calcutta",
    image:
      "/uocal.jpg",
  },
  {
    name: "Madras University",
    image:
      "/mad.webp",
  },
];

const colleges = [
  {
    name: "College of Engineering, Guindy",
    image:
      "/guindy.jpg",
  },
  {
    name: "Government College of Technology, Coimbatore",
    image:
      "/coim.jpg",
  },
  {
    name: "Government Engineering College, Gandhinagar",
    image:
      " /gand.jpeg",
  },
  {
    name: "Government College of Engineering, Aurangabad",
    image:
      "/aura.webp",
  },
  {
    name: "Government Engineering College, Ajmer",
    image:
      "/ajmer.jpg",
  },
  {
    name: "Government Engineering College, Thrissur",
    image:
      "/thr.webp",
  },
];

/* ---------------- ANIMATIONS ---------------- */

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/* ---------------- COMPONENT ---------------- */

const StateEducationPage = () => {
  return (
    <section className="min-h-screen bg-black text-white py-14 px-4 md:px-10">
      {/* MAIN HEADING */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        State Government Universities & Colleges
      </motion.h1>

      {/* -------- UNIVERSITIES -------- */}
      <h2 className="text-2xl font-bold text-orange-400 mb-8 text-center">
        State Government Universities
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {universities.map((item, idx) => (
          <motion.div
            key={idx}
            variants={card}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-orange-500/30 hover:border-orange-500 transition-all"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-orange-400">
                {item.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* -------- COLLEGES -------- */}
      <h2 className="text-2xl font-bold text-orange-400 mb-8 text-center">
        State Government Colleges
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {colleges.map((item, idx) => (
          <motion.div
            key={idx}
            variants={card}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-orange-500/30 hover:border-orange-500 transition-all"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-orange-400">
                {item.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StateEducationPage;
