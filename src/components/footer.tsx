import { Github, Linkedin, Code, Award } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: "https://github.com/" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/" },
    { name: "HackerRank", icon: <Code className="h-5 w-5" />, url: "https://hackerrank.com/" },
    { name: "GeeksforGeeks", icon: <Award className="h-5 w-5" />, url: "https://geeksforgeeks.org/" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Prachi Pundir. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">Made with ❤️ using Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
