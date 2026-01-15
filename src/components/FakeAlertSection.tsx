import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldAlert, Phone, MessageSquare, CreditCard, UserX, AlertOctagon, CheckCircle2 } from "lucide-react";

const redFlags = [
  { icon: Phone, text: "Unsolicited calls claiming guaranteed seats" },
  { icon: CreditCard, text: "Demand for cash payments without receipts" },
  { icon: UserX, text: "Agents claiming inside connections" },
  { icon: MessageSquare, text: "Fake websites mimicking official portals" },
];

const safePractices = [
  "Only use official counselling websites (josaa.nic.in, etc.)",
  "Never pay in cash - always use official payment gateways",
  "Verify college recognition from AICTE portal",
  "Check official social media handles for updates",
];

export const FakeAlertSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fake-alerts" className="py-24 px-4 relative overflow-hidden bg-destructive/5">
      {/* Animated warning stripes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              hsl(0 84% 60% / 0.3) 40px,
              hsl(0 84% 60% / 0.3) 80px
            )`,
          }}
          animate={{ x: [0, 80] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Pulsing alert circles */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 rounded-full border-2 border-destructive/30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-2 border-destructive/30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Alert banner */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            className="glass rounded-2xl p-8 border-2 border-destructive/50 bg-destructive/10"
            animate={{ boxShadow: ["0 0 20px hsl(0 84% 60% / 0.2)", "0 0 40px hsl(0 84% 60% / 0.4)", "0 0 20px hsl(0 84% 60% / 0.2)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <ShieldAlert className="w-20 h-20 text-destructive" />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  🚨 <span className="text-destructive">BEWARE</span> of Fake Admission Agents!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Thousands of students lose lakhs to fraudulent admission consultants every year. Stay alert!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Red Flags */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border-destructive/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertOctagon className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-bold text-foreground">Red Flags to Watch</h3>
            </div>
            <div className="space-y-4">
              {redFlags.map((flag, index) => {
                const Icon = flag.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20"
                  >
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-destructive flex-shrink-0" />
                    </motion.div>
                    <span className="text-foreground font-medium">{flag.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Safe Practices */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border-primary/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Stay Safe - Follow These</h3>
            </div>
            <div className="space-y-4">
              {safePractices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: -10 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-foreground">{practice}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Emergency contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">If you suspect fraud, report immediately:</p>
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border-primary/50"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-foreground font-bold">National Cyber Crime: 1930</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
