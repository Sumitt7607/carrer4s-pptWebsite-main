import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Image, CreditCard, Award, FileCheck, GraduationCap, CheckCircle2 } from "lucide-react";

const documents = [
  { icon: CreditCard, title: "Aadhar Card", desc: "Identity proof with current address" },
  { icon: FileText, title: "10th Marksheet", desc: "Original + 2 photocopies" },
  { icon: FileText, title: "12th Marksheet", desc: "Original + 2 photocopies" },
  { icon: Award, title: "JEE/CET Scorecard", desc: "Printed from official portal" },
  { icon: Image, title: "Passport Photos", desc: "Recent, 10 copies recommended" },
  { icon: FileCheck, title: "Category Certificate", desc: "If applicable (SC/ST/OBC)" },
  { icon: GraduationCap, title: "School Leaving", desc: "Transfer/Migration certificate" },
  { icon: FileText, title: "Income Certificate", desc: "For fee concession claims" },
];

const DocumentCard = ({ doc, index }: { doc: typeof documents[0]; index: number }) => {
  const Icon = doc.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        z: 50,
      }}
      className="relative group perspective-1000"
    >
      <div className="glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary/50 group-hover:glow-saffron">
        <motion.div
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-7 h-7 text-primary-foreground" />
        </motion.div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{doc.title}</h3>
        <p className="text-sm text-muted-foreground">{doc.desc}</p>
        
        {/* Checkmark overlay on hover */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
        >
          <CheckCircle2 className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const DocumentationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="documentation" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
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
            📋 Required Documents
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Document </span>
            <span className="text-gradient-saffron">Checklist</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ensure you have all necessary documents ready before counselling. 
            Missing documents can delay your admission process.
          </p>
        </motion.div>

        {/* Document grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard key={doc.title} doc={doc} index={index} />
          ))}
        </div>

        {/* Pro tip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass rounded-2xl p-6 border-l-4 border-primary"
        >
          <p className="text-foreground font-medium flex items-center gap-2">
            <span className="text-2xl">💡</span>
            <span>Pro Tip: Keep multiple photocopies of all documents. Carry originals in a separate file.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
66