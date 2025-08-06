'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import React from 'react'

export default function StreetPatrolLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      title: "Community-Based Safety",
      description: "Non-enforcement patrols that reduce risk and restore peace without force.",
      icon: "🛡️"
    },
    {
      title: "Compassionate Outreach",
      description: "Building trust with vulnerable individuals and connecting them to real help.",
      icon: "❤️"
    },
    {
      title: "Business Partnerships",
      description: "Local businesses rely on Street Ambassadors to maintain safety and civility.",
      icon: "🏢"
    }
  ]

  const stats = [
    { number: "85%", label: "Crime Reduction" },
    { number: "1,200+", label: "Lives Impacted" },
    { number: "45", label: "Active Patrols" },
    { number: "98%", label: "Community Trust" }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section - Tesla Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            STREET PATROL
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-700 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Communities. Reducing Crime. One Conversation at a Time.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-black text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105">
              Partner With Us
            </button>
            <button className="border-2 border-black text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-black hover:text-white">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Tesla Style Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            A Revolutionary Approach to Urban Safety
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="tesla-card text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Tesla Style Numbers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Proven Impact
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-tesla-red mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Tesla Style Typography */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            A Movement, Not Just a Service
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Street Patrol is a revolutionary approach to urban safety. By empowering formerly incarcerated individuals and community leaders, we create trusted teams that businesses can count on and neighborhoods can embrace.
          </motion.p>
          <motion.button 
            className="tesla-button text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get Involved
          </motion.button>
        </div>
      </section>

      {/* CTA Section - Tesla Style */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join the movement that's transforming urban safety one community at a time.
          </motion.p>
          <motion.button 
            className="bg-white text-black font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 hover:bg-gray-200 hover:scale-105"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Partner With Us
          </motion.button>
        </div>
      </section>

      {/* Footer - Tesla Style */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Street Patrol</h3>
            <p className="text-gray-400">Empowering Communities. Reducing Crime.</p>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Street Patrol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
