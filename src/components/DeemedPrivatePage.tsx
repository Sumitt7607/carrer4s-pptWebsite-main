import { motion, Variants } from "framer-motion";

const colleges = [
  {
    name: "VIT Vellore",
    image:
      "/vit.webp",
  },
  {
    name: "Amity University, Noida",
    image:
      "/amity.webp",
  },
  {
    name: "SRM Institute of Science & Technology",
    image:
      "/srm.jpg",
  },
  {
    name: "Manipal Academy of Higher Education",
    image:
      "/manipal.jpg",
  },
  {
    name: "Lovely Professional University",
    image:
      "/lpu.jpg",
  },
  {
    name: "Shiv Nadar University",
    image:
  "/shiv.jpg",
  },
   {
    name: "Bharti Vidyapeeth  ",
    image:
  "/bhjar.webp",
  },
     {
    name: "Amrita university",
    image:
  "/amrita.jpg    ",
  
  },
    {
    name: "thapar university",
    image:
  "/thapar.jpg    ",
  
  },
    {
    name: "Kalinga university",
    image:
  "/kalinga.jpg    ",
  
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DeemedPrivatePage = () => {
  return (
    <section className="min-h-screen bg-black text-white py-14 px-4 md:px-10">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Deemed & Private Universities
      </motion.h1>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {colleges.map((college, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-orange-500/30 hover:border-orange-500 transition-all"
          >
            {/* Image */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={college.image}
                alt={college.name}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-5 text-center">
              <h2 className="text-lg md:text-xl font-semibold text-orange-400">
                {college.name}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DeemedPrivatePage;
