import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BTechCard = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient-saffron">Flagship Program</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive BTech Admission program designed to prepare you for the future of engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-3xl opacity-50" />

          {/* Main Card */}
          <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-primary/30 overflow-hidden">
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(90deg, hsl(30 100% 50% / 0.5), hsl(45 100% 50% / 0.3), hsl(30 100% 50% / 0.5))",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "200% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Card inner content */}
            <div className="relative bg-card/95 m-[2px] rounded-2xl p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                      4-Year Program
                    </span>
                    <h3 className="text-4xl sm:text-5xl font-bold mb-4">
                      <span className="text-gradient-saffron">BTech</span>
                    </h3>
                    <h4 className="text-2xl font-semibold text-foreground mb-4">
                      Bachelor of Technology
                    </h4>
              <p className="text-muted-foreground mb-6 text-lg">
  Start your BTech journey with a practical and industry-focused program.
  Learn essential engineering skills, gain hands-on experience, and get ready
  for a strong and successful career in technology.
</p>


                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {[
                        { icon: Code, text: "Modern Curriculum" },
                        { icon: Cpu, text: "Advanced Labs" },
                        { icon: Zap, text: "Industry Projects" },
                        { icon: Settings, text: "Expert Faculty" },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <feature.icon className="h-5 w-5 text-primary" />
                          <span className="text-foreground">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 glow-saffron"
                      >
                        <Link to="/btech">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right Content - Visual Elements */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative aspect-square max-w-md mx-auto"
                  >
                    {/* Animated circles */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-8 rounded-full border-2 border-dashed border-accent/30"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-16 rounded-full border-2 border-dashed border-primary/20"
                    />

                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 30px hsl(30 100% 50% / 0.3)",
                            "0 0 60px hsl(30 100% 50% / 0.5)",
                            "0 0 30px hsl(30 100% 50% / 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      >
                        <span className="text-4xl font-bold text-primary-foreground">B.Tech</span>
                      </motion.div>
                    </div>

                    {/* Floating icons */}
                    {[Code, Cpu, Zap, Settings].map((Icon, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-12 h-12 bg-card rounded-xl border border-primary/30 flex items-center justify-center"
                        style={{
                          top: `${20 + Math.sin(index * 1.5) * 30}%`,
                          left: `${20 + Math.cos(index * 1.5) * 30}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.5,
                          repeat: Infinity,
                        }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BTechCard;
