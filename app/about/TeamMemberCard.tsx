'use client';

import { GraduationCap, Calendar, Heart } from "lucide-react";
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TeamMember {
  name: string;
  education: string;
  experience: string;
  specialization: string;
  image: string;
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="flex flex-col items-center p-6 rounded-xl overflow-hidden group max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <motion.div 
        className="relative w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg"
        animate={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </motion.div>

      {/* Details */}
      <motion.div 
        className="w-full text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.2 }
        }}
      >
        <motion.h3 
          className="text-2xl font-bold text-gray-800 mb-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {member.name}
        </motion.h3>
        
        <div className="space-y-3 text-gray-600">
          <motion.div 
            className="flex items-center justify-center group/item"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="p-1.5 bg-orange-50 rounded-full mr-3 group-hover/item:bg-orange-100 transition-colors">
              <GraduationCap className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-md">{member.education}</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center group/item"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="p-1.5 bg-orange-50 rounded-full mr-3 group-hover/item:bg-orange-100 transition-colors">
              <Calendar className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-md">{member.experience} Experience</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center group/item"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="p-1.5 bg-orange-50 rounded-full mr-3 group-hover/item:bg-orange-100 transition-colors">
              <Heart className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-md text-center">{member.specialization}</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
