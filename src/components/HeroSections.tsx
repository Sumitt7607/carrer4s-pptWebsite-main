import { motion } from "framer-motion";

const HeroSections = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* 3D rotating ring decoration */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] border border-accent/15 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-secondary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--secondary)) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 80px hsl(var(--primary) / 0.5)",
          }}
          animate={{
            textShadow: [
              "0 0 80px hsl(32 95% 55% / 0.5)",
              "0 0 120px hsl(32 95% 55% / 0.7)",
              "0 0 80px hsl(32 95% 55% / 0.5)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          
        </motion.h1>
      </motion.div>

      {/* Main headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
           Admission{" "}
          <span className="relative inline-block">
            <span className="text-gradient-saffron">Highlights</span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </span>
        </h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your trusted guide to navigating engineering admissions in India. 
          Make informed decisions for a brighter future.
        </motion.p>
      </motion.div>

     
    </section>
  );
};

export default HeroSections;
