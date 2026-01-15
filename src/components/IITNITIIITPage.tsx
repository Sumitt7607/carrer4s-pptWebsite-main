import { motion } from "framer-motion";

interface College {
  name: string;
  image: string;
}

// 6 colleges for each
const iits: College[] = [
  { name: "IIT Bombay", image: "/iitbm.webp" },
  { name: "IIT Delhi", image: "/iitd.jpg" },
  { name: "IIT Madras", image: "/iitmad.jpeg" },
  { name: "IIT Kanpur", image: "/iitkp.webp" },
  { name: "IIT Kharagpur", image: "/iitkhg.jpg" },
  { name: "IIT Roorkee", image: "/iitrk.webp" },
];

const nits: College[] = [
  { name: "NIT Trichy", image: "/nittri.JPG" },
  { name: "NIT Surathkal", image: "/nitsu.avif" },
  { name: "NIT Warangal", image: "/nitwar.webp" },
  { name: "NIT Rourkela", image: "/nitrou.jpg" },
  { name: "NIT Calicut", image: "/nitcal.webp" },
  { name: "NIT Durgapur", image: "/nitdur.png" },
];

const iiits: College[] = [
  { name: "IIIT Hyderabad", image: "/iithbad.jpg" },
  { name: "IIIT Delhi", image: "/iiiitdel.avif" },
  { name: "IIIT Bangalore", image: "/iiitbang.jpg" },
  { name: "IIIT Allahabad", image: "/iiitpr.avif" },
  { name: "IIIT Gwalior", image: "/iiitgwa.jpg" },
  { name: "IIIT Pune", image: "/iiitpun.webp" },
];

const CollegeSection = ({ title, colleges }: { title: string; colleges: College[] }) => {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      {/* Floating animated background circles */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-yellow-400 via-orange-400 to-yellow-500 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {/* Colleges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 relative z-10">
        {colleges.map((college, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl overflow-hidden bg-black/70 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-black/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-400">{college.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const IITNITIIITPage = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* IIT Section */}
      <CollegeSection title="Indian Institutes of Technology (IITs)" colleges={iits} />
      {/* NIT Section */}
      <CollegeSection title="National Institutes of Technology (NITs)" colleges={nits} />
      {/* IIIT Section */}
      <CollegeSection title="Indian Institutes of Information Technology (IIITs)" colleges={iiits} />
    </div>
  );
};

export default IITNITIIITPage;
