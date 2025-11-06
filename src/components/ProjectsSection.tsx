import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Triveni",
    description:
      "Workflow automation and document processing platform that streamlines business processes using intelligent automation.",
    longDescription:
      "A comprehensive workflow automation platform built with React and NestJS. It includes document processing, automated workflows, notifications, and advanced analytics. Implemented AI-powered classification and processing features.",
    technologies: ["React", "NestJS", "MongoDB", "AI/ML", "TypeScript"],
    category: "Full Stack",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Skillzen",
    description:
      "AI-based course creation system enabling educators to design engaging and adaptive learning experiences.",
    longDescription:
      "An intelligent course platform using AI for personalized learning. Includes content generation, adaptive paths, analytics dashboards, and real-time tracking.",
    technologies: ["Angular", "NestJS", "MongoDB", "LangGraph", "AI/ML"],
    category: "AI/Education",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "DMS (Data Management System)",
    description:
      "AI-powered document management system for efficient organization and intelligent search.",
    longDescription:
      "A document management system with AI-powered search, version control, collaborative editing, and advanced security features.",
    technologies: ["React", "NestJS", "MongoDB", "AI/ML", "Elasticsearch"],
    category: "Enterprise",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "FCS Project",
    description:
      "Automated document classification using machine learning and OCR integration.",
    longDescription:
      "An advanced system using ML and OCR for document categorization, extraction, and workflow automation. Supports auto-routing and AI-driven insights.",
    technologies: ["Flutter", "NestJS", "MongoDB", "ML", "OCR"],
    category: "Mobile/AI",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white/90 via-white/80 to-white/90 dark:from-black/80 dark:via-black/90 dark:to-[#020617] transition-colors duration-700"
    >
      {/* Floating Blue Glow Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: "rgba(37,99,235,0.25)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 12px rgba(37,99,235,0.4)",
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
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
            Featured Projects
          </h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[3px] bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"
          />
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work and contributions to innovative
            solutions.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative h-96 [perspective:1000px]"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer ${
                  flippedCard === project.id
                    ? "[transform:rotateY(180deg)]"
                    : ""
                }`}
                onClick={() => handleCardFlip(project.id)}
              >
                {/* Front Side */}
                <Card className="absolute inset-0 [backface-visibility:hidden] bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-300/40 shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-all duration-300">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {project.category}
                        </Badge>
                        {project.featured && (
                          <Badge className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-blue-400/30 text-blue-500 dark:text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-blue-400/30 text-blue-500 dark:text-blue-300"
                        >
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      Tap to see details
                    </p>
                  </CardContent>
                </Card>

                {/* Back Side */}
                <Card className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-300/40 shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-all duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-blue-400/30 text-blue-500 dark:text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:opacity-90"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-blue-400/30 text-blue-500 dark:text-blue-300 hover:bg-blue-500/10"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-blue-400/40 text-blue-600 dark:text-blue-300 hover:bg-blue-500/10"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
