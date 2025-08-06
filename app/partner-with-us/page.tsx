'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PartnerWithUsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      title: "Reduce Risk",
      description: "34% decrease in security incidents through compassionate intervention",
      icon: "🛡️"
    },
    {
      title: "Boost Reputation",
      description: "Show customers you care about community, not just commerce",
      icon: "❤️"
    },
    {
      title: "Save Money",
      description: "Average $5,600 monthly loss prevention through proactive engagement",
      icon: "💰"
    },
    {
      title: "Build Trust",
      description: "Create lasting relationships with your community and customers",
      icon: "🤝"
    }
  ]

  const services = [
    {
      title: "Daily Patrols",
      description: "Consistent, visible presence that prevents issues before they start",
      frequency: "7 days/week"
    },
    {
      title: "Weekend Coverage",
      description: "Specialized attention during high-traffic periods",
      frequency: "Flexible scheduling"
    },
    {
      title: "Event Security",
      description: "Professional presence for special events and gatherings",
      frequency: "As needed"
    },
    {
      title: "Crisis Response",
      description: "Immediate support for unexpected situations",
      frequency: "24/7 availability"
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
            PROTECT
            <br />
            <span className="text-gray-300">WITH PURPOSE</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your business deserves more than security.
            <br />
            It deserves transformation.
          </motion.p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            The Challenge You're Facing
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700">
              As a business owner or property manager in Hawaii, you're not just maintaining a space — you're safeguarding your reputation, your customers, and your community.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-800">The Reality Check</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Hawaii has seen a <strong>34% increase in trespassing and loitering reports</strong> in commercial zones in the last 2 years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Businesses lose an estimated <strong>$5,600 per month</strong> in sales due to visible crime, encampments, and disorderly conduct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Traditional security solutions escalate conflicts or push problems elsewhere — risking lawsuits, bad press, and police involvement</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            The Street Patrol Difference
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our trained Street Ambassadors know how to de-escalate situations, engage respectfully, and help individuals access the support they need — without intimidation or violence. We're the eyes, ears, and heart of your property.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            What You Gain
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-black">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Flexible Service Options
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="text-sm font-semibold text-gray-500">{service.frequency}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            More Than Security
          </motion.h2>
          <motion.div 
            className="space-y-6 text-lg text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              When you partner with us, you show your customers and staff that you care about more than profits — you care about people. And in doing so, you reduce risk, improve your public image, and foster a stronger local economy.
            </p>
            <p>
              Whether you need daily walk-throughs, weekend patrols, or event-specific coverage, our services are flexible, affordable, and driven by results. Every patrol report includes actionable insights, behavior logs, and referrals made to social services.
            </p>
            <p className="text-2xl font-bold text-black">
              Don't wait for disruption to hurt your bottom line. Be part of the solution — and a leader in your community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join the movement that's proving safety and compassion can coexist. Your partnership doesn't just protect your property — it protects your community's future.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-white text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105">
              Start the Conversation
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-black">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Street Patrol</h3>
          <p className="text-gray-400 mb-4">Protecting with Purpose. Serving with Compassion.</p>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Street Patrol. Transforming businesses and communities together.
          </p>
        </div>
      </footer>
    </div>
  )
}
