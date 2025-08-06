'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LearnMorePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const impactStats = [
    { number: "2,847", label: "Lives Transformed", description: "From homelessness to hope" },
    { number: "156", label: "Communities Rebuilt", description: "One conversation at a time" },
    { number: "94%", label: "Crime Reduction", description: "Through compassion, not force" },
    { number: "1,200+", label: "Second Chances", description: "Given and received" }
  ]

  const stories = [
    {
      name: "Marcus",
      role: "Former Street Ambassador",
      story: "From serving 15 years to serving his community. Today, Marcus leads our downtown patrol, turning his past into purpose.",
      image: "👨‍💼"
    },
    {
      name: "Sarah",
      role: "Business Owner",
      story: "Our store went from daily disturbances to daily smiles. Street Patrol didn't just protect our business—they protected our dreams.",
      image: "🏪"
    },
    {
      name: "The Johnson Family",
      role: "Community Members",
      story: "We watched our neighborhood transform from fear to family. These aren't just patrols—they're peacebuilders walking our streets.",
      image: "🏠"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TRANSFORM
            <br />
            <span className="text-gray-300">TOGETHER</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every person has a story worth rewriting.
            <br />
            Every community has a future worth building.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            This Isn't Just Safety.
            <br />
            This Is Redemption In Action.
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Street Patrol is where second chances meet second nature. Where those who've walked the hardest paths become the guides for others still finding their way. We don't just patrol streets—we patrol possibilities.
          </motion.p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Numbers That Tell Stories
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-black text-black mb-2">{stat.number}</div>
                <div className="text-xl font-bold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            From Streets to Strength
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-6xl mb-4">{story.image}</div>
                <h3 className="text-2xl font-bold mb-2 text-black">{story.name}</h3>
                <p className="text-gray-600 mb-4">{story.role}</p>
                <p className="text-gray-700 leading-relaxed">{story.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Your Business Can Be Part of This
            <br />
            <span className="text-gray-300">Revolution</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            When you partner with Street Patrol, you're not just hiring security. You're investing in human potential. You're choosing to be part of a movement that proves safety and compassion can coexist. You're helping write redemption stories that inspire entire communities.
          </motion.p>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-2xl font-bold text-white">
              "We don't just protect your business."
            </p>
            <p className="text-2xl font-bold text-gray-300">
              "We protect your community's future."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Change Lives?
            <br />
            <span className="text-gray-600">Including Your Own</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every partnership creates ripples of change. Every conversation plants seeds of hope. Every step forward together writes a new chapter for our communities.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-black text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105">
              Start Your Partnership
            </button>
            <button className="border-2 border-black text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-black hover:text-white">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Street Patrol</h3>
          <p className="text-gray-400 mb-4">Where Second Chances Meet Second Nature</p>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Street Patrol. Transforming communities, one conversation at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
