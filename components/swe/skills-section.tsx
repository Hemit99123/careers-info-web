"use client"

import { useState } from "react"
import { Code, Database, Globe, Laptop, Server, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("technical")

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
          Essential Skills
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          Skills You'll Need to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Succeed</span>
        </h2>
        <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
          Software development requires a blend of technical and soft skills
        </p>
      </div>

      <Tabs defaultValue="technical" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="h-16 grid grid-cols-2 w-full max-w-md">
            <TabsTrigger value="technical" className="text-lg py-3">
              Technical Skills
            </TabsTrigger>
            <TabsTrigger value="soft" className="text-lg py-3">
              Soft Skills
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="technical" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "technical" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Programming Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>JavaScript/TypeScript</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Python</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Java</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>C#/.NET</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Go</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "technical" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>HTML/CSS</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>React/Angular/Vue</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Node.js</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>GraphQL</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "technical" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Databases & Cloud</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>SQL (MySQL, PostgreSQL)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>NoSQL (MongoDB, Firebase)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>AWS/Azure/GCP</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Docker & Kubernetes</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>CI/CD Pipelines</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "technical" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                  <span>React Native</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                  <span>Flutter</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                  <span>Swift (iOS)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                  <span>Kotlin (Android)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                  <span>Progressive Web Apps</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "technical" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">DevOps & Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Git & GitHub</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Testing (Unit, Integration)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Agile Methodologies</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Jenkins/GitHub Actions</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Monitoring & Logging</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "technical" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Emerging Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Machine Learning/AI</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Blockchain Development</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <span>AR/VR Development</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <span>IoT Programming</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Quantum Computing</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="soft" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "soft" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0ms" }}
            >
              <h3 className="text-xl font-bold mb-4">Problem Solving</h3>
              <p className="text-gray-300 mb-4">
                The ability to break down complex problems into manageable parts and develop effective solutions is the
                core of software development.
              </p>
              <div className="w-full bg-slate-700/50 h-2.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-500 h-2.5 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-400 text-right">Critical importance: 95%</div>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "soft" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="text-xl font-bold mb-4">Communication</h3>
              <p className="text-gray-300 mb-4">
                Clearly explaining technical concepts to both technical and non-technical stakeholders is essential for
                project success.
              </p>
              <div className="w-full bg-slate-700/50 h-2.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-purple-400 to-purple-500 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-400 text-right">Critical importance: 90%</div>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "soft" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-xl font-bold mb-4">Teamwork & Collaboration</h3>
              <p className="text-gray-300 mb-4">
                Software is rarely built by individuals. The ability to work effectively in teams and collaborate across
                disciplines is crucial.
              </p>
              <div className="w-full bg-slate-700/50 h-2.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-500 h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-400 text-right">Critical importance: 85%</div>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "soft" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-xl font-bold mb-4">Adaptability & Learning</h3>
              <p className="text-gray-300 mb-4">
                Technology evolves rapidly. The willingness and ability to continuously learn new technologies and adapt
                to change is essential.
              </p>
              <div className="w-full bg-slate-700/50 h-2.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-orange-400 to-orange-500 h-2.5 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-400 text-right">Critical importance: 95%</div>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "soft" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-xl font-bold mb-4">Attention to Detail</h3>
              <p className="text-gray-300 mb-4">
                Small errors in code can lead to significant issues. Meticulousness and thoroughness are highly valued
                traits.
              </p>
              <div className="w-full bg-slate-700/50 h-2.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-red-400 to-red-500 h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-400 text-right">Critical importance: 85%</div>
            </div>

            <div
              className={`bg-slate-800/50 rounded-2xl border border-slate-700 p-6 transition-all duration-500 ${activeTab === "soft" ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <h3 className="text-xl font-bold mb-4">Time Management</h3>
              <p className="text-gray-300 mb-4">
                Meeting deadlines while maintaining code quality requires excellent time management and prioritization
                skills.
              </p>
              <div className="w-full bg-slate-700/50 h-2.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-400 text-right">Critical importance: 80%</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

