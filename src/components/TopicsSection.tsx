import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  Building2,
  MapPin,
  FileText,
  AlertTriangle,
  ShieldX,
  Target,
  Lightbulb,
  HelpCircle,
} from "lucide-react";
import CircleCard from "./CircleCard";

const topics = [
  {
    icon: BookOpen,
    title: "Course Information",
    description: "Explore B.Tech branches & specializations",
  },
  {
    icon: CheckCircle,
    title: "Eligibility Criteria",
    description: "Know the minimum requirements to apply",
  },
  {
    icon: Building2,
    title: "Types of Universities",
    description: "Government, Private, Deemed & Autonomous",
  },
  {
    icon: MapPin,
    title: "State-wise Universities",
    description: "Best engineering colleges across India",
  },
   {
    icon: FileText,
    title: "Documentation",
    description: "Documents required",
  },
  {
    icon: FileText,
    title: "Admission Process",
    description: "Step-by-step guide to secure your seat",
  },
  
  {
    icon: AlertTriangle,
    title: "Common Mistakes",
    description: "Avoid these blunders during admission",
  },
  {
    icon: ShieldX,
    title: "Fake Dealings Alert",
    description: "Beware of frauds and scams",
  },
  {
    icon: HelpCircle,
    title: "state and central counseling in india ",
    description: "What makes us different",
  },
  {
    icon: Target,
    title: "Career4s Services",
    description: "How we help you succeed",
  },
  {
    icon: Lightbulb,
    title: "Management Quota Myth",
    description: "Truth behind management seats",
  },
  {
    icon: HelpCircle,
    title: "Why Career4s?",
    description: "What makes us different",
  },
   
    
];

const TopicsSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Admission Process
          <span className="text-gradient-saffron">Highlights</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Navigate your B.Tech admission journey with confidence
        </p>
      </motion.div>

      {/* Circle cards grid */}
      {/* Circle cards grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
  {topics.map((topic, index) => (
    <CircleCard
      key={topic.title}
      icon={topic.icon}
      title={topic.title}
      description={topic.description}
      index={index}
    />
  ))}
</div>


      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [-20, 20, -20],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [20, -20, 20],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
};

export default TopicsSection;
