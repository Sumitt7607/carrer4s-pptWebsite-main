import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CircleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const CircleCard = ({ icon: Icon, title, description, index }: CircleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        rotateX: -5,
        z: 50,
      }}
      className="group perspective-1000"
    >
      <div className="relative flex flex-col items-center">
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />

        {/* Main circle */}
        <motion.div
       className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center cursor-pointer"

          style={{
            background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted)) 100%)`,
            boxShadow: `
              0 0 0 2px hsl(var(--primary) / 0.3),
              0 10px 40px -10px hsl(var(--primary) / 0.3),
              inset 0 -5px 20px hsl(var(--primary) / 0.1)
            `,
          }}
          whileHover={{
            boxShadow: `
              0 0 0 3px hsl(var(--primary) / 0.6),
              0 20px 60px -10px hsl(var(--primary) / 0.5),
              inset 0 -5px 30px hsl(var(--primary) / 0.2)
            `,
          }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: {
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Inner gradient overlay */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

          {/* Icon container */}
          <motion.div
            className="relative z-10"
            animate={{
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary group-hover:text-accent transition-colors duration-300" />
          </motion.div>

          {/* Rotating border effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderImage: `linear-gradient(var(--rotation), hsl(var(--primary)), transparent, hsl(var(--accent)), transparent) 1`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Title and description */}
        <motion.div
          className="mt-4 text-center max-w-[180px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CircleCard;
