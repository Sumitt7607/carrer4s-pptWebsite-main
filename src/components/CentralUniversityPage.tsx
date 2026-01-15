import { motion } from "framer-motion";

const colleges = [
  {
    name: "Jamia Millia Islamia",
    image: "/jamia.webp",
  },
  {
    name: "Aligarh Muslim University",
    image: "/alli.png",
  },
  {
    name: "Central University of Rajasthan",
    image:"/rajs.png",
  },
  {
    name: "Central University of Haryana",
    image: "/cuhar.webp",
  },
  {
    name: "Central University of Jammu",
    image: "/cujam.jpg",
  },
  {
    name: "Central University of Karnataka",
    image: "/cukar.jpg",
  },
];

const CentralUniversityPage = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12 px-4 md:px-10">
      
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Central Government Universities for B.Tech  
        <span className="block text-sm mt-2 text-gray-400">
          (Other than IITs & NITs)
        </span>
      </motion.h1>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {colleges.map((college, idx) => (
          <motion.div
            key={idx}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg 
                       border border-orange-500/30 hover:border-orange-500 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="h-44 overflow-hidden">
              <motion.img
                src={college.image}
                alt={college.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Name */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-orange-400">
                {college.name}
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Central Govt • B.Tech Admission
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CentralUniversityPage;
