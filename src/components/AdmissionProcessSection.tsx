import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileEdit, BookOpen, Users, CheckSquare, Building2 } from "lucide-react";

const steps = [
  {
    icon: FileEdit,
    title: "Registration",
    subtitle: "Step 1",
    description: "Fill application forms for JEE Main/Advanced or State CETs. Upload documents, pay fees.",
    details: ["JEE Main: January-February", "JEE Advanced: April-May", "State CETs: March-April"],
  },
  {
    icon: BookOpen,
    title: "Entrance Exam",
    subtitle: "Step 2",
    description: "Appear for entrance examinations. Prepare thoroughly for PCM subjects.",
    details: ["JEE Main: April", "JEE Advanced: June", "State CETs: May-June"],
  },
  {
    icon: Users,
    title: "Counselling",
    subtitle: "Step 3",
    description: "Register for JoSAA/State counselling. Fill choices, lock preferences.",
    details: ["JoSAA: June-July", "State: July-August", "6-7 Rounds typically"],
  },
  {
    icon: CheckSquare,
    title: "Seat Allotment",
    subtitle: "Step 4",
    description: "Check allotment results. Accept/Reject/Upgrade seat based on preferences.",
    details: ["Accept: Lock your seat", "Float: Wait for upgrade", "Slide: Same college, better branch"],
  },
  {
    icon: Building2,
    title: "Reporting",
    subtitle: "Step 5",
    description: "Visit allotted college. Submit documents, pay fees, complete admission.",
    details: ["Carry all originals", "Pay admission fees", "Collect ID card"],
  },
];

const TimelineStep = ({ step, index, isActive, onClick }: { 
  step: typeof steps[0]; 
  index: number; 
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-primary/50 to-transparent z-0" />
      )}
      
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.98 }}
        className={`relative cursor-pointer glass rounded-2xl p-6 transition-all duration-300 ${
          isActive ? "border-primary glow-saffron" : "border-border hover:border-primary/50"
        }`}
      >
        {/* Step number badge */}
        <motion.div
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm"
          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {index + 1}
        </motion.div>

        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center transition-colors ${
            isActive ? "bg-gradient-to-br from-primary to-accent" : "bg-secondary"
          }`}
          animate={isActive ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <Icon className={`w-8 h-8 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
        </motion.div>

        {/* Content */}
        <span className="text-xs text-primary font-medium">{step.subtitle}</span>
        <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{step.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

        {/* Expandable details */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-border space-y-2">
            {step.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={isActive ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">{detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const AdmissionProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="admission-process" className="py-24 px-4 relative overflow-hidden bg-secondary/30">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
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
            🎯 Step by Step
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Admission </span>
            <span className="text-gradient-saffron">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow this roadmap from registration to reporting. Click each step for detailed information.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <TimelineStep
              key={step.title}
              step={step}
              index={index}
              isActive={activeStep === index}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-center mt-4 text-muted-foreground text-sm">
            Step {activeStep + 1} of {steps.length}
          </p>
        </div>
      </div>
    </section>
  );
};
