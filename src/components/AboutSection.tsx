import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white/90 via-white/80 to-white/90 dark:from-black/80 dark:via-black/90 dark:to-[#020617] transition-colors duration-700"
    >
      {/* --- Floating Deep Blue Glow Particles --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: "rgba(37,99,235,0.25)", // deep blue glow
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 12px rgba(37,99,235,0.5)",
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* --- Container --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(37,99,235,0.3)] mb-4">
            About Me
          </h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[3px] bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"
          />
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Get to know more about my journey, experience, and passion for
            technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* --- Bio Section --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              My Story
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with{" "}
              <span className="text-blue-500 font-medium">1.5 years</span> of
              hands-on experience building scalable and modern applications. As
              a <span className="text-blue-400 font-medium">Team Lead</span> at
              Skillmine, I focus on crafting efficient, AI-driven web solutions
              that transform complex ideas into real-world products.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My curiosity for technology led me to specialize in full-stack
              development. I enjoy integrating{" "}
              <span className="text-blue-500 font-medium">AI capabilities</span>{" "}
              into applications, bridging the gap between intelligent systems
              and intuitive user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond coding, I love exploring new technologies, contributing to
              open source, and mentoring junior developers — always aiming to
              grow and inspire others in tech.
            </p>
          </motion.div>

          {/* --- Experience & Education Cards --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* --- Current Role Card --- */}
            <motion.div whileHover={{ scale: 1.03 }}>
              <Card className="bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                        Team Lead - Full Stack Developer
                      </h4>
                      <p className="text-blue-500 font-medium">Skillmine</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Leading teams and architecting scalable AI-driven
                        solutions.
                      </p>
                      <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                        1.5 years experience
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* --- Education Cards --- */}
            {[
              {
                title: "Master of Computer Applications",
                subtitle: "MCA (2023)",
                desc: "Advanced studies in computer science and applications.",
              },
              {
                title: "Bachelor of Computer Applications",
                subtitle: "BCA (2020)",
                desc: "Foundation in computer science and programming.",
              },
            ].map((edu, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }}>
                <Card className="bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-300/40 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {edu.title}
                        </h4>
                        <p className="text-blue-500 font-medium">
                          {edu.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {edu.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
