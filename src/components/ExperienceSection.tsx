import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Team Lead - Full Stack Developer',
    company: 'Skillmine',
    location: 'Remote',
    period: '2023 - Present',
    duration: '1.5 years',
    description: 'Leading a team of developers in creating innovative AI-powered solutions. Responsible for architecture decisions, code reviews, and mentoring junior developers.',
    achievements: [
      'Led development of 4+ major projects including Triveni and Skillzen',
      'Improved team productivity by 40% through better processes',
      'Implemented AI/ML solutions for document processing',
      'Mentored 5+ junior developers'
    ],
    technologies: ['React', 'Angular', 'NestJS', 'MongoDB', 'AI/ML'],
    icon: Briefcase
  },
  {
    id: 2,
    type: 'education',
    title: 'Master of Computer Applications',
    company: 'University',
    location: 'India',
    period: '2021 - 2023',
    duration: '2 years',
    description: 'Advanced studies in computer science with focus on software engineering, algorithms, and modern development practices.',
    achievements: [
      'Specialized in Full Stack Development',
      'Completed advanced projects in AI/ML',
      'Strong foundation in data structures and algorithms',
      'Graduated with distinction'
    ],
    technologies: ['Java', 'Python', 'Database Systems', 'Software Engineering'],
    icon: GraduationCap
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Computer Applications',
    company: 'University',
    location: 'India',
    period: '2017 - 2020',
    duration: '3 years',
    description: 'Foundation in computer science and programming with exposure to various technologies and development methodologies.',
    achievements: [
      'Strong programming fundamentals',
      'Web development projects',
      'Database management systems',
      'Software development lifecycle'
    ],
    technologies: ['C++', 'Java', 'Web Technologies', 'Database'],
    icon: GraduationCap
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'
                }`}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2 rounded-lg ${
                          exp.type === 'work' ? 'bg-primary/10' : 'bg-accent/10'
                        }`}>
                          <exp.icon className={`h-6 w-6 ${
                            exp.type === 'work' ? 'text-primary' : 'text-accent'
                          }`} />
                        </div>
                        <Badge variant={exp.type === 'work' ? 'default' : 'secondary'}>
                          {exp.type === 'work' ? 'Work' : 'Education'}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}