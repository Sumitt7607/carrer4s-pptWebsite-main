import { motion } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  CreditCard,
  Users,
  CheckCircle,
} from "lucide-react";

const admissionSteps = [
  {
    title: "Application Form",
    description:
      "Fill out the online admission this is the very first application form with personal and academic details.",
    icon: FileText,
  },
  {
    title: "Document Verification",
    description:
      "Submit the required documents such as mark sheets, ID proof, and certificates.",
    icon: ClipboardCheck,
  },
  {
    title: "Entrance Test / Interview",
    description:
      "Appear for the entrance examination or personal interview if applicable.",
    icon: Users,
  },
  {
    title: "Fee Payment",
    description:
      "Pay the admission fee to confirm your seat after selection.",
    icon: CreditCard,
  },
  {
    title: "Admission Confirmation",
    description:
      "Receive confirmation and enrollment details from the college.",
    icon: CheckCircle,
  },
];

export default function AdmissionProcess() {
  return (
    <section className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Admission Process
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Follow these simple steps to secure admission into our college.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-full bg-card/60 backdrop-blur-sm
                         rounded-2xl border border-border
                         hover:border-primary/50 p-6 transition-all"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br
                              from-primary to-accent
                              flex items-center justify-center mb-4">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/*Step Number*/}
              <span className="absolute top-4 right-4 text-sm font-bold text-primary">
                Step {index + 1}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            className="px-8 py-3 rounded-xl font-semibold
                       bg-primary text-primary-foreground
                       hover:bg-primary/90 transition-all"
          >
            Check Out  detailed  college  list for a admission at our  website 
          </button>
        </div>
      </div>
    </section>
  );
}
