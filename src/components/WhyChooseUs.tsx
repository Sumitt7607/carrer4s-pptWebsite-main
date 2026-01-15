import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Building2 } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Multiple Study Domains",
    description:
      "Admissions open across diverse academic domains including Engineering, Management, Computer Applications, Law, Healthcare, and Emerging Technologies.",
    stat: "15+",
    statLabel: "Academic Domains",
  },
  {
    icon: Building2,
    title: "Recognized Institutions",
    description:
      "Partnered with NAAC-accredited and industry-recognized universities and colleges offering approved and valid degree programs.",
    stat: "50+",
    statLabel: "Partner Institutes",
  },
  {
    icon: Briefcase,
    title: "Career-Oriented Programs",
    description:
      "Programs designed with a strong focus on employability, including internships, skill training, certifications, and placement assistance.",
    stat: "90%+",
    statLabel: "Career Outcomes",
  },
  {
    icon: Users,
    title: "Student Admission Support",
    description:
      "End-to-end admission guidance covering course selection, eligibility checks, documentation, counseling, and post-admission onboarding.",
    stat: "10k+",
    statLabel: "Students Guided",
  },
];
                            
const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            Why Career 4s?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient-saffron">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the advantages that set us apart and make your engineering
            journey exceptional
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative h-full bg-card/60 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 p-6 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 glow-saffron"
                >
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {feature.description}
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-border">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-primary"
                  >
                    {feature.stat}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">
                    {feature.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
