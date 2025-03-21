"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState("university")

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-3 flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("university")}
          className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
            activeTab === "university"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:bg-slate-700/50"
          }`}
        >
          University Path
        </button>
        <button
          onClick={() => setActiveTab("college")}
          className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
            activeTab === "college"
              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
              : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:bg-slate-700/50"
          }`}
        >
          College Path
        </button>
        <button
          onClick={() => setActiveTab("bootcamp")}
          className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
            activeTab === "bootcamp"
              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:bg-slate-700/50"
          }`}
        >
          Bootcamp Path
        </button>
        <button
          onClick={() => setActiveTab("self")}
          className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
            activeTab === "self"
              ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
              : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:bg-slate-700/50"
          }`}
        >
          Self-Taught Path
        </button>
      </div>

      {activeTab === "university" && (
        <>
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-green-400 font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Bachelor's Degree (4 years)</h3>
            <p className="text-gray-300 mb-4">
              A four-year Computer Science or Software Engineering degree provides a comprehensive foundation in
              programming, algorithms, data structures, and computer systems.
            </p>
            <div className="flex items-center text-green-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Strong theoretical foundation</span>
            </div>
            <div className="flex items-center text-green-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Broad networking opportunities</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Recognized by most employers</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-green-400 font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Optional: Master's Degree (1-2 years)</h3>
            <p className="text-gray-300 mb-4">
              A Master's in Computer Science or a specialized field like AI, cybersecurity, or data science can open
              doors to advanced positions and research roles.
            </p>
            <div className="flex items-center text-green-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Specialization in advanced topics</span>
            </div>
            <div className="flex items-center text-green-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Higher starting salary</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Research opportunities</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-green-400 font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Entry-Level Position & Growth</h3>
            <p className="text-gray-300 mb-4">
              Start as a Junior Developer and progress through continuous learning and experience to more senior roles.
            </p>
            <div className="flex items-center text-green-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Structured career progression</span>
            </div>
            <div className="flex items-center text-green-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Mentorship opportunities</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Competitive compensation</span>
            </div>
          </div>
        </>
      )}

      {activeTab === "college" && (
        <>
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <span className="text-blue-400 font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">College Diploma (2-3 years)</h3>
            <p className="text-gray-300 mb-4">
              A college program in Computer Programming or Software Development focuses on practical skills and hands-on
              experience.
            </p>
            <div className="flex items-center text-blue-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Practical, hands-on training</span>
            </div>
            <div className="flex items-center text-blue-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Shorter time to completion</span>
            </div>
            <div className="flex items-center text-blue-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Industry-focused curriculum</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <span className="text-blue-400 font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Optional: Advanced Diploma or Certificate</h3>
            <p className="text-gray-300 mb-4">
              Additional specialized certificates in areas like web development, mobile apps, or cloud computing can
              enhance your skills.
            </p>
            <div className="flex items-center text-blue-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Specialized technical skills</span>
            </div>
            <div className="flex items-center text-blue-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Industry certifications</span>
            </div>
            <div className="flex items-center text-blue-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Flexible learning options</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <span className="text-blue-400 font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Entry-Level Position & Growth</h3>
            <p className="text-gray-300 mb-4">
              Begin as a Junior Developer and advance through experience and continuous skill development.
            </p>
            <div className="flex items-center text-blue-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Quick entry into workforce</span>
            </div>
            <div className="flex items-center text-blue-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Practical experience focus</span>
            </div>
            <div className="flex items-center text-blue-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Opportunity for degree bridging</span>
            </div>
          </div>
        </>
      )}

      {activeTab === "bootcamp" && (
        <>
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <span className="text-purple-400 font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Coding Bootcamp (3-6 months)</h3>
            <p className="text-gray-300 mb-4">
              Intensive, immersive programs that teach practical development skills in a compressed timeframe.
            </p>
            <div className="flex items-center text-purple-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Accelerated learning</span>
            </div>
            <div className="flex items-center text-purple-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Project-based curriculum</span>
            </div>
            <div className="flex items-center text-purple-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Industry-relevant technologies</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <span className="text-purple-400 font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Portfolio Building</h3>
            <p className="text-gray-300 mb-4">
              Create personal projects and contribute to open source to demonstrate your skills to potential employers.
            </p>
            <div className="flex items-center text-purple-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Practical skill demonstration</span>
            </div>
            <div className="flex items-center text-purple-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">GitHub profile development</span>
            </div>
            <div className="flex items-center text-purple-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Community engagement</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <span className="text-purple-400 font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Entry-Level Position & Growth</h3>
            <p className="text-gray-300 mb-4">
              Start in a junior role and continue learning while gaining professional experience.
            </p>
            <div className="flex items-center text-purple-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Fastest path to employment</span>
            </div>
            <div className="flex items-center text-purple-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Career transition friendly</span>
            </div>
            <div className="flex items-center text-purple-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Continued self-learning required</span>
            </div>
          </div>
        </>
      )}

      {activeTab === "self" && (
        <>
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
              <span className="text-orange-400 font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Self-Directed Learning</h3>
            <p className="text-gray-300 mb-4">
              Learn through online courses, tutorials, documentation, and practice at your own pace.
            </p>
            <div className="flex items-center text-orange-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Flexible schedule</span>
            </div>
            <div className="flex items-center text-orange-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Low or no cost options</span>
            </div>
            <div className="flex items-center text-orange-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Customized learning path</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
              <span className="text-orange-400 font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Project Building & Open Source</h3>
            <p className="text-gray-300 mb-4">
              Create a strong portfolio of personal projects and contribute to open source to demonstrate your
              abilities.
            </p>
            <div className="flex items-center text-orange-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Real-world experience</span>
            </div>
            <div className="flex items-center text-orange-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Community connections</span>
            </div>
            <div className="flex items-center text-orange-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Visible skill demonstration</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
              <span className="text-orange-400 font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Networking & Job Search</h3>
            <p className="text-gray-300 mb-4">
              Build a professional network, participate in tech communities, and apply for positions that match your
              skills.
            </p>
            <div className="flex items-center text-orange-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Requires strong self-discipline</span>
            </div>
            <div className="flex items-center text-orange-400 mb-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Portfolio-based job search</span>
            </div>
            <div className="flex items-center text-orange-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Continuous learning mindset</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

