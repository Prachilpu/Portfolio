import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Let&apos;s connect! Wanna brainstorm or chat over a virtual coffee?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-purple-600" />
                Send Me a Message
              </CardTitle>
              <CardDescription>Fill out the form and I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your message" className="min-h-[120px]" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-purple-600" />
                Let&apos;s Chat
              </CardTitle>
              <CardDescription>
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your
                vision.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-500">prachipundir777@gmail.com</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Based in</h3>
                <p className="text-gray-500">Punjab, India</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Open for</h3>
                <p className="text-gray-500">Internships, Freelance Projects, Collaborations</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
