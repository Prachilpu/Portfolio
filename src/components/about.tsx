import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const skills = [
    { category: "Languages", items: ["C++", "Java", "Python", "JavaScript", "TypeScript"] },
    { category: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
    { category: "ML/AI", items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
  ]

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-500 mb-6">
              I&apos;m a passionate tech enthusiast currently pursuing my BTech in Computer Science. I love solving
              real-world problems, creating smooth user interfaces, and working on secure systems.
            </p>
            <p className="text-gray-500 mb-6">
              My journey in tech has equipped me with a diverse skill set spanning full-stack development and machine
              learning. I believe in writing clean, efficient code and creating solutions that make a difference.
            </p>
          </div>
          <div className="space-y-4">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
