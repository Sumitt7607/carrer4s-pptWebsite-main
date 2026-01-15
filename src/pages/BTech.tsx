"use client";
import { useNavigate } from "react-router-dom";
import TopUniversitiesSection from "@/components/TopUniversitiesSection"; 
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  CheckCircle2, 
  Code, 
  Cpu, 
  Wrench, 
  Building, 
  Zap, 
  Database,
  ArrowRight,
  Clock,
  Award,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Testimonial } from "@/components/TestimonialCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const specializations = [
  {
    id: "cse",
    icon: Code,
    title: "Computer Science Engineering",
    description: "Master programming, AI, machine learning, cybersecurity, and software development with industry-relevant skills.",
    highlights: ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Full Stack Development"],
  },
  {
    id: "ece",
    icon: Cpu,
    title: "Electronics & Communication",
    description: "Explore embedded systems, VLSI design, signal processing, and telecommunications for the digital age.",
    highlights: ["VLSI Design", "Embedded Systems", "Signal Processing", "IoT"],
  },
  {
    id: "me",
    icon: Wrench,
    title: "Mechanical Engineering",
    description: "Learn design, manufacturing, robotics, and thermal engineering with hands-on practical experience.",
    highlights: ["CAD/CAM", "Robotics", "Thermal Engineering", "Manufacturing"],
  },
  {
    id: "ce",
    icon: Building,
    title: "Civil Engineering",
    description: "Build the future with structural design, construction management, and sustainable infrastructure.",
    highlights: ["Structural Design", "Construction Management", "Sustainability", "Urban Planning"],
  },
  {
    id: "ee",
    icon: Zap,
    title: "Electrical Engineering",
    description: "Power systems, renewable energy, and smart grid technologies for tomorrow's energy solutions.",
    highlights: ["Power Systems", "Renewable Energy", "Smart Grids", "Control Systems"],
  },
  {
    id: "it",
    icon: Database,
    title: "Information Technology",
    description: "Cloud computing, database management, networking, and enterprise IT solutions.",
    highlights: ["Cloud Computing", "Database Systems", "Networking", "DevOps"],
  },
];

const eligibilityCriteria = [
  "10+2 with Physics, Chemistry, and Mathematics",
  "Minimum 60% aggregate in qualifying examination",
  "Valid JEE Main / State Entrance Exam score",
  "Age limit: 17 to 25 years as on 1st July",
  "Lateral Entry: Diploma holders with 60% marks",
];

const programHighlights = [
  { icon: Clock, title: "4-Year Program", description: "8 semesters of comprehensive learning" },
  { icon: Award, title: "AICTE Approved", description: "Recognized by regulatory bodies" },
  { icon: BookOpen, title: "Industry Curriculum", description: "Updated with latest technologies" },
  { icon: GraduationCap, title: "UGC Recognized", description: "Valid degree certification" },
];

const BTech = () => {
   const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              🎓 BTech Program
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Bachelor of{" "}
              <span className="text-gradient-saffron">Technology</span>
            </h1>
          

            {/* Program Highlights */}
       
          </motion.div>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="py-200 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Course <span className="text-gradient-saffron">Introduction</span>
              </h2>
          <div className="space-y-4 text-muted-foreground">
<p>
  Admission to the Bachelor of Technology (B.Tech) program at Career 4s is available across multiple engineering branches, Students can choose a specialization that aligns with their interests and career goals, subject to eligibility criteria and seat availability.
</p>

<p>
  The admission process is transparent and student-friendly, based on academic merit, entrance exam scores, and counseling. Dedicated advisors guide students through branch selection, documentation, enrollment, and orientation, ensuring a smooth start to their engineering journey.
</p>

</div>


              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {/* <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-6 glow-saffron">
                    Download Brochure
                  </Button> */}
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {/* <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Contact Admissions
                  </Button> */}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Visual element */}
              <div className="relative aspect-square max-w-md mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-accent/30"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 40px hsl(30 100% 50% / 0.3)",
                        "0 0 80px hsl(30 100% 50% / 0.5)",
                        "0 0 40px hsl(30 100% 50% / 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                  >
                    <GraduationCap className="h-20 w-20 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Orbiting icons */}
                {[Code, Cpu, Wrench, Building].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-14 h-14 bg-card rounded-xl border border-primary/30 flex items-center justify-center"
                    style={{
                      top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                      left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.5,
                      repeat: Infinity,
                    }}
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Eligibility <span className="text-gradient-saffron">Criteria</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check if you meet the requirements to join our BTech program
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm rounded-2xl border border-border p-8"
          >
            <div className="space-y-4">
              {eligibilityCriteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{criterion}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30"
            >
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Note:</span> Relaxation in
                eligibility criteria may be applicable for reserved categories as per
                government norms.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choose Your <span className="text-gradient-saffron">Specialization</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from our range of cutting-edge engineering disciplines
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.id}
                id={spec.id}
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
                    <spec.icon className="h-7 w-7 text-primary-foreground" />
                  </motion.div>




                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {spec.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {spec.description}
                  </p>
 



                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {spec.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  {/* Admission Process Button */}
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/admission-process")}
  className="mt-6 w-full px-4 py-2 text-sm font-semibold rounded-xl
             bg-gradient-to-r from-primary to-accent
             text-primary-foreground shadow-md"
>
  Admission Process
</motion.button>
                </div>


                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            
          </motion.div>
        </div>
      </section>
      <TopUniversitiesSection />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default BTech;
