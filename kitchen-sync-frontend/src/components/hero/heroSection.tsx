'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChefHat, Calendar, Sparkles, ForkKnifeCrossed } from 'lucide-react'
import LoginButton from '../auth/AuthButtons'

export default function HeroSection() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center">
            <span className="mr-4">Kitchen</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ForkKnifeCrossed className="w-16 h-16 md:w-24 md:h-24 text-black" />
            </motion.div>
            <span className="ml-4">Sync</span>
          </h1>
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Synchronize your meals, simplify your life
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 mb-2 text-black" />
            <p className="text-sm">Plan Meals Together</p>
          </div>
          <div className="flex flex-col items-center">
            <ChefHat className="w-12 h-12 mb-2 text-black" />
            <p className="text-sm">Manage Shopping Lists</p>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="w-12 h-12 mb-2 text-black" />
            <p className="text-sm">AI-Powered</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <LoginButton />          
        </motion.div>
      </div>
    </div>
  )
}