import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, AlertTriangle, Clock, FileX, Calculator, Search, Target, Shield } from "lucide-react";

const mistakes = [
  {
    icon: FileX,
    title: "Incorrect Form Filling",
    description: "Spelling errors in name, wrong category selection, mismatched photo specifications",
    severity: "high",
  },
  {
    icon: Clock,
    title: "Missing Deadlines",
    description: "Late registration, missing counselling rounds, delayed document submission",
    severity: "high",
  },
  {
    icon: Calculator,
    title: "Ignoring Seat Matrix",
    description: "Not checking opening/closing ranks, ignoring category-wise cutoffs",
    severity: "medium",
  },
  {
    icon: Search,
    title: "Poor Research",
    description: "Not researching college placements, infrastructure, or faculty quality",
    severity: "medium",
  },
  {
    icon: Target,
    title: "Unrealistic Expectations",
    description: "Only filling top NITs/IITs without backup options",
    severity: "medium",
  },
  {
    icon: Shield,
    title: "No Document Backup",
    description: "Not keeping copies of important documents and receipts",
    severity: "low",
  },
];

const MistakeCard = ({ mistake, index }: { mistake: typeof mistakes[0]; index: number }) => {
  const Icon = mistake.icon;
  const severityColors = {
    high: "from-destructive/20 to-destructive/5 border-destructive/50",
    medium: "from-accent/20 to-accent/5 border-accent/50",
    low: "from-primary/20 to-primary/5 border-primary/50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -30, y: 50 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        rotateY: index % 2 === 0 ? 5 : -5,
      }}
      className="perspective-1000"
    >
      <div className={`glass rounded-2xl p-6 h-full bg-gradient-to-br ${severityColors[mistake.severity as keyof typeof severityColors]} transition-all duration-300 hover:glow-saffron`}>
        {/* Warning indicator */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Icon className="w-7 h-7 text-destructive" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <XCircle className="w-6 h-6 text-destructive" />
          </motion.div>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2">{mistake.title}</h3>
        <p className="text-sm text-muted-foreground">{mistake.description}</p>

        {/* Severity badge */}
        <div className="mt-4 flex items-center gap-2">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            mistake.severity === "high" ? "bg-destructive/20 text-destructive" :
            mistake.severity === "medium" ? "bg-accent/20 text-accent" :
            "bg-primary/20 text-primary"
          }`}>
            {mistake.severity.toUpperCase()} RISK
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CommonMistakesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="common-mistakes" className="py-24 px-4 relative overflow-hidden">
      {/* Background warning pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 25}%`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, delay: i * 0.5 }}
          >
            <AlertTriangle className="w-16 h-16 text-destructive" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            ⚠️ Avoid These Errors
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Common </span>
            <span className="text-gradient-saffron">Mistakes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from others' errors. Avoid these common pitfalls that can derail your B.Tech admission journey.
          </p>
        </motion.div>

        {/* Mistakes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mistakes.map((mistake, index) => (
            <MistakeCard key={mistake.title} mistake={mistake} index={index} />
          ))}
        </div>

        {/* Warning banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 border-l-4 border-destructive bg-destructive/5"
        >
          <div className="flex items-start gap-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
            </motion.div>
            <div>
              <h4 className="font-bold text-foreground mb-1">Critical Reminder</h4>
              <p className="text-muted-foreground">
                Always double-check your application before submission. One small mistake can cost you your dream college!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
