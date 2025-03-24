import React from 'react'
import SalaryChart from '../swe/salary-chart'
import SkillsSection from '../swe/skills-section'
import TechStack from '../swe/tech-stack'
import TimelineSection from '../swe/timeline-section'
import { Code, Database, Globe, Server, Zap } from "lucide-react"
import Image from 'next/image'

const WebDev = () => {
  return (
    <div>
         {/* Description Section */}
      <section id="description" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
              <Code className="mr-2 h-4 w-4" />
              Career Path
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Web Developer
            </h2>
            <p className="text-lg text-gray-300">
            Web Developers are responsible for building code to create a website. A developer cannot just start blindly coding. Instead, they must begin with planning. In this phase, they create models and flowcharts that detail how the code should be written and all features are designed here too. Afterwards, they present this work to their business/executive team to ensure it meets business standards. Only then can a Web Developer begin writing code for a program!
            </p>
            
          </div>
          
          <div className="relative">
            
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                Work Environment
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-400 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold">Office or Remote:</span> Work in modern tech offices or remotely
                    from anywhere in the world
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-400 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold">Team Collaboration:</span> Work with designers, product managers,
                    and other developers
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-400 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold">Flexible Hours:</span> Many companies offer flexible schedules and
                    work-life balance
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-orange-400 text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold">Continuous Learning:</span> Fast-paced environment requiring ongoing
                    skill development
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6">
  {/* API Development Card */}
  <div className="bg-slate-800/70 p-6 rounded-3xl border border-slate-700 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl">
    <div className="relative mb-6 w-full">
      <Image 
        src="/api-workings.png"
        height={350}
        width={350}
        alt="API illustration"
        className="rounded-2xl object-contain w-full h-auto mx-auto"
      />
    </div>
    <h3 className="font-bold text-3xl text-gray-100 mb-4 text-center">API Development:</h3>
    <p className="text-base text-gray-300 leading-relaxed text-justify">
      An application's UI (user-interface) needs an API to interact with. The UI doesn't directly have access to a server, and all resources, such as posts, come from a database (only accessible on the server environment). This means we need something to deliver the resources from the server, which is the API. 
      <br /><br />
      Here's an analogy: think of the "client" or UI as a customer. They want food (resources like posts, comments, shares) but cannot directly talk to the chef (server). A waiter (API) does this for you. They directly give the chefs food orders (requests) and the chefs give them food (response with resources).
    </p>
  </div>

  {/* Web Development Card */}
  <div className="bg-slate-800/70 p-6 rounded-3xl border border-slate-700 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl">
    <div className="relative mb-6 w-full">
      <Image 
        src="/webdev.png"
        height={400}
        width={500}
        alt="Web Development illustration"
        className="rounded-2xl object-contain mx-auto"
      />
    </div>
    <h3 className="font-bold text-3xl text-gray-100 mb-4 text-center">Building Websites:</h3>
    <p className="text-base text-gray-300 leading-relaxed text-justify">
      Developers who specialize in building websites are known as Website (Web) Developers. To build a website, a Web Developer must use HTML, CSS, and JavaScript. HTML is used to structure all the contents on the webpage. CSS gives the webpage style. JavaScript gives the webpage functionality. 
      <br /><br />
      A good analogy is that HTML is the bones (structure of the body) of the website, CSS is the skin (external looks/styling), and JavaScript is the brain (command-center of logic).
    </p>
  </div>
</div>


 


      {/* Skills Section */}
      <SkillsSection />

      {/* Education Path */}
      <section id="education" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4">
            Education Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Road to Becoming a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Web Developer
            </span>
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Multiple pathways can lead to a successful career in web development
          </p>
        </div>

        <TimelineSection />

        <div className="mt-16 bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-6">Grade 12 Requirements for Computer Science Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Required Courses</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Advanced Functions (MHF4U)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Calculus & Vectors (MCV4U)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>English (ENG4U)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Computer Science (ICS4U) recommended</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-purple-400">Grade Requirements</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Top universities: 85-95% average</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Other universities: 75-85% average</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>College programs: 65-75% average</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Math courses: 80%+ recommended</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-3 text-green-400">Additional Requirements</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Supplementary applications</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Coding portfolio (recommended)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Extracurricular activities</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Coding competitions (asset)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Section */}
      <section id="salary" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium mb-4">
            Earning Potential
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            How Much Will You{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Earn?</span>
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Web development offers competitive salaries that increase with experience and specialization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold mb-6">Salary Breakdown in Canada</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-lg">Entry Level (0-2 years)</span>
                <span className="text-2xl font-bold text-green-400">$60,000 - $85,000</span>
              </div>
              <div className="w-full bg-slate-700/50 h-1.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-500 h-1.5 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">Mid Level (3-5 years)</span>
                <span className="text-2xl font-bold text-blue-400">$85,000 - $120,000</span>
              </div>
              <div className="w-full bg-slate-700/50 h-1.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-500 h-1.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">Senior Level (6-10 years)</span>
                <span className="text-2xl font-bold text-purple-400">$120,000 - $160,000</span>
              </div>
              <div className="w-full bg-slate-700/50 h-1.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-purple-400 to-purple-500 h-1.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">Lead/Architect (10+ years)</span>
                <span className="text-2xl font-bold text-orange-400">$160,000 - $200,000+</span>
              </div>
              <div className="w-full bg-slate-700/50 h-1.5 rounded-full">
                <div
                  className="bg-gradient-to-r from-orange-400 to-orange-500 h-1.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <p className="mt-6 text-gray-300">
              By the time you graduate and gain a few years of experience, you can expect to earn in the mid-level
              range. With specialization in high-demand areas like AI, cloud computing, or cybersecurity, these figures
              can be even higher.
            </p>
          </div>

          <div className="h-[400px] bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Salary Trends (2016-2026)</h3>
            <SalaryChart />
          </div>
        </div>
      </section>

      {/* Technology Impact Section */}
      <section id="technology" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Technology Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            How Technology Has{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Transformed
            </span>{" "}
            the Field
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            The web development landscape has evolved dramatically in recent years
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Technological Shifts</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">AI-Assisted Development</h4>
                  <p className="text-gray-300">
                    Tools like GitHub Copilot and ChatGPT are revolutionizing how code is written, allowing developers
                    to focus on higher-level problem-solving rather than syntax.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Server className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Cloud-Native Development</h4>
                  <p className="text-gray-300">
                    The shift to cloud platforms has changed how applications are built, deployed, and scaled, requiring
                    new skills in containerization, microservices, and serverless architectures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Low-Code/No-Code Platforms</h4>
                  <p className="text-gray-300">
                    These platforms are democratizing web development, allowing non-Web Developers to build
                    applications while changing the role of professional developers to focus on more complex problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Changing Societal Expectations</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Remote Work Revolution</h4>
                  <p className="text-gray-300">
                    The pandemic accelerated the shift to remote work, making it a permanent feature of the industry and
                    expanding job opportunities globally regardless of location.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-red-400"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m7 9 2 2"></path>
                    <path d="m15 9-2 2"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M12 16v2"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Ethical Responsibility</h4>
                  <p className="text-gray-300">
                    Increased focus on privacy, security, and ethical AI development has placed new responsibilities on
                    developers to consider the societal impact of their work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-yellow-400"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Continuous Learning Culture</h4>
                  <p className="text-gray-300">
                    The rapid pace of technological change has created an expectation of lifelong learning, with
                    developers needing to constantly update their skills to remain relevant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <TechStack />
        </div>
      </section>

      {/* Future Outlook Section */}
      <section id="future" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Future Outlook
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Future</span>{" "}
            of web development
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            The demand for Web Developers continues to grow with excellent job prospects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Job Growth</h3>
              <p className="text-gray-300 mb-6">
                Employment of Web Developers is projected to grow 22% from 2020 to 2030, much faster than the
                average for all occupations.
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-bold">22%</span>
                </div>
                <span className="text-gray-300">Growth rate (2020-2030)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Industry Trends</h3>
              <p className="text-gray-300 mb-6">
                Emerging fields like AI, machine learning, AR/VR, and blockchain are creating new specializations and
                opportunities for developers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>AI & Machine Learning</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Augmented & Virtual Reality</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Blockchain & Web3</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Job Security</h3>
              <p className="text-gray-300 mb-6">
                Web development offers strong job security with a low unemployment rate and high demand across
                virtually all industries.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-400">Unemployment Rate</div>
                  <div className="text-2xl font-bold text-green-400">1.9%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Job Satisfaction</div>
                  <div className="text-2xl font-bold text-green-400">4.2/5</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Work-Life Balance</div>
                  <div className="text-2xl font-bold text-green-400">3.9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-6">Timeline of Websites:</h3>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-blue-400">1990s</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">The Birth of the Web</h4>
                <p className="text-gray-300">
                  The World Wide Web was introduced by Tim berners-Lee in 1989, allowing for sharing of information across multiple computers. Websites during this area were known as "Web 1.0" and were developed using HTML and CSS. They were only informational websites and there was no interactivity on them.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-purple-400">2000s</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Rise of Web 2.0</h4>
                <p className="text-gray-300">
                  With the rise of programming languages such as PHP and JavaScript, developers can now make their webpages interactive allowing for a more immersive experience for users. This era also saw the rise of social media platforms such as Youtube, Facebook, and MySpace.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-green-400">2010s</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">The Mobile Revolution</h4>
                <p className="text-gray-300">
                  As phones become more popular, there was an ever increasing demand to make websites "responsive" (mobile-friendly). The UI had to change because a phone is much smaller compared to the large screen of a computer. 
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-orange-400">2020s</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Popularity of Web3</h4>
                <p className="text-gray-300">
                  As blockchain becomes popular, there are new technologies that allow for its integreation into websites for payment and record-keeping known as Web3 tech. Co-Founder of Ethereum, Gavin Wood, coined the the Web3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default WebDev