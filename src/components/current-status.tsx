import { BookOpen, Briefcase } from "lucide-react"

export default function CurrentStatus() {
  return (
    <section id="status" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Current Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
            <Briefcase className="h-8 w-8 text-purple-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Learning MERN Stack @ Centilever</h3>
              <p className="text-gray-500">
                Currently enhancing my skills in MongoDB, Express, React, and Node.js through intensive training and
                hands-on projects.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
            <BookOpen className="h-8 w-8 text-purple-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">3rd-year student at LPU</h3>
              <p className="text-gray-500">
                Pursuing Bachelor of Technology in Computer Science Engineering with focus on software development and
                machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
