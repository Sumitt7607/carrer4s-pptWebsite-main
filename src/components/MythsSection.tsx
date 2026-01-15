import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { XCircle, CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";

const myths = [
  { myth: "Management Quota seat are all illegal", reality: "Management quota is legally recognized in private colleges. It's legitimate if done through proper college channels with official receipts.", tip: "Always pay through official college accounts and get proper receipts." },
  { myth: "Only IIT/NIT graduates get good jobs", reality: "Skills matter more than college name. Many top performers come from tier-2 and tier-3 colleges with strong skills and projects.", tip: "Focus on building skills, doing internships, and personal projects." },
  { myth: "Branch doesn't matter, college does", reality: "Both matter! A good branch in a decent college can be better than a poor branch in a top college for placements.", tip: "Research placement data for specific branches, not just overall college stats." },
  { myth: "Low JEE rank means no future", reality: "JEE is just one path. State CETs, COMEDK, private universities offer excellent opportunities too.", tip: "Explore all counselling options - there are 15+ lakh B.Tech seats in India!" },
  { myth: "Donation seats guarantee admission", reality: "Even management quota has eligibility criteria. Minimum qualifying marks and document verification are still required.", tip: "Verify eligibility before approaching any college for management seats." },
  { myth: "First round allotment is final", reality: "Counselling has multiple rounds. You can upgrade to better college/branch in subsequent rounds if eligible.", tip: "Use Float and Slide options wisely to keep upgrade chances open." },
];

const MythCard = ({ myth, index }: { myth: typeof myths[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -20 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-80"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl p-6 border-2 border-destructive/30 bg-gradient-to-br from-destructive/10 to-transparent flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <XCircle className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-xs font-bold text-destructive uppercase tracking-wider">MYTH</span>
          </div>
          <h3 className="text-xl font-bold text-foreground flex-grow flex items-center">
            "{myth.myth}"
          </h3>
          <div className="mt-4 flex items-center gap-2 text-muted-foreground text-sm">
            <span>Click to see reality</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">REALITY</span>
          </div>
          <p className="text-foreground flex-grow">{myth.reality}</p>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{myth.tip}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const MythsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="myths" className="py-24 px-4 relative overflow-hidden bg-secondary/30">
      {/* Floating question marks */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl text-primary/5 font-bold select-none"
          style={{ left: `${10 + (i % 4) * 25}%`, top: `${20 + Math.floor(i / 4) * 50}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        >
          ?
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            🎭 Busting Misconceptions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Management Quota & </span>
            <span className="text-gradient-saffron">Other Myths</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click on each card to flip and reveal the truth behind common admission myths!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myths.map((myth, index) => (
            <MythCard key={index} myth={myth} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
