import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Cpu, Wifi, Cog, Zap, Building2, FlaskConical, 
  TrendingUp, Briefcase, GraduationCap, Rocket 
} from "lucide-react";

const branches = [
  { 
    icon: Cpu, 
    name: "Computer Science", 
    abbr: "CSE",
    salary: "₹8-50 LPA",
    companies: "Google, Microsoft, Amazon",
    growth: 95,
  },
  { 
    icon: Wifi, 
    name: "Electronics & Comm", 
    abbr: "ECE",
    salary: "₹6-25 LPA",
    companies: "Intel, Qualcomm, Samsung",
    growth: 80,
  },
  { 
    icon: Cog, 
    name: "Mechanical Engg", 
    abbr: "ME",
    salary: "₹5-18 LPA",
    companies: "Tata Motors, L&T, Mahindra",
    growth: 65,
  },
  { 
    icon: Zap, 
    name: "Electrical Engg", 
    abbr: "EE",
    salary: "₹5-20 LPA",
    companies: "NTPC, Siemens, ABB",
    growth: 70,
  },
  { 
    icon: Building2, 
    name: "Civil Engineering", 
    abbr: "CE",
    salary: "₹4-15 LPA",
    companies: "L&T, DLF, Shapoorji",
    growth: 55,
  },
  { 
    icon: FlaskConical, 
    name: "Chemical Engg", 
    abbr: "CHE",
    salary: "₹5-18 LPA",
    companies: "Reliance, ONGC, IOCL",
    growth: 60,
  },
];

const stats = [
  { icon: GraduationCap, value: "15L+", label: "B.Tech Seats" },
  { icon: Briefcase, value: "85%", label: "Placement Rate" },
  { icon: TrendingUp, value: "₹12L", label: "Avg Package" },
  { icon: Rocket, value: "500+", label: "Top Recruiters" },
];

const BranchCard = ({ branch, index }: { branch: typeof branches[0]; index: number }) => {
  const Icon = branch.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group perspective-1000"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:glow-saffron"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            animate={isHovered ? { rotate: 360 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-7 h-7 text-primary-foreground" />
          </motion.div>
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
            {branch.abbr}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-4">{branch.name}</h3>

        {/* Salary range */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground">Salary Range</span>
            <span className="text-primary font-bold">{branch.salary}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${branch.growth}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            />
          </div>
        </div>

        {/* Companies */}
        <div className="text-sm">
          <span className="text-muted-foreground">Top Recruiters: </span>
          <span className="text-foreground">{branch.companies}</span>
        </div>

        {/* Demand indicator */}
        <motion.div
          className="mt-4 pt-4 border-t border-border flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
        >
          <span className="text-xs text-muted-foreground">Market Demand</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < Math.floor(branch.growth / 20) ? "bg-primary" : "bg-secondary"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            💼 Career Opportunities
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Engineering </span>
            <span className="text-gradient-saffron">Branches & Careers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore different B.Tech branches and their career prospects. Choose wisely based on your interests!
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center border border-primary/20"
              >
                <motion.div
                  className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold text-gradient-saffron mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Branches grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <BranchCard key={branch.name} branch={branch} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
