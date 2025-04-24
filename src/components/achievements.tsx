import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Code, Mic } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "HackerRank 5⭐ Badge",
      description: "Achieved 5-star rating in Problem Solving on HackerRank",
      icon: <Code className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Hackthon Winner 🥈",
      description: "Silver medal for innovative project at Coading competition",
      icon: <Award className="h-10 w-10 text-gray-400" />,
    },
    {
      title: "Gold Medal in Public Speaking 🥇",
      description: "First place in university-wide public speaking competition",
      icon: <Mic className="h-10 w-10 text-yellow-500" />,
    },
  ]

  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4">{achievement.icon}</div>
                <CardTitle>{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{achievement.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
