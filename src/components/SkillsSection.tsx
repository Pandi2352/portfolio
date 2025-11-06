import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Angular", level: 85, icon: "🅰️" },
      { name: "Remix", level: 80, icon: "🎵" },
      { name: "Flutter", level: 75, icon: "📱" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "NestJS", level: 88, icon: "🐱" },
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "JavaScript", level: 92, icon: "💛" },
    ],
  },
  {
    category: "Database & Tools",
    technologies: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Figma", level: 80, icon: "🎨" },
      { name: "LangGraph", level: 75, icon: "🤖" },
      { name: "Git", level: 88, icon: "📚" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white/90 via-white/80 to-white/90 dark:from-black/80 dark:via-black/90 dark:to-[#020617] transition-colors duration-700"
    >
      {/* Floating Blue Glow Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: "rgba(37,99,235,0.25)",
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
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.3)] mb-4">
            Skills & Technologies
          </h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[3px] bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"
          />
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency
            levels.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-300/40 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {skillCategory.category}
                  </h3>

                  <div className="space-y-5">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + techIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{tech.icon}</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {tech.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {tech.level}%
                          </span>
                        </div>

                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay:
                                categoryIndex * 0.2 + techIndex * 0.1 + 0.3,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Docker",
              "AWS",
              "GraphQL",
              "REST APIs",
              "Microservices",
              "CI/CD",
              "Jest",
              "Cypress",
              "Webpack",
              "Vite",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/70 dark:bg-black/30 border border-blue-400/20 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-500/10 transition-colors cursor-default shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
