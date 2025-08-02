'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope,
  Eye,
  Ear,
  Brain,
  Smile,
  Heart,
  BrainCircuit,
  Baby,
  Bone,
  Ambulance,
  X,
  Apple,
  FileText,
  Star,
  Activity,
  ArrowRight
} from "lucide-react";

interface Member {
  name: string;
  position: string;
}

interface Specialist {
  icon: any;
  title: string;
  count: string;
  color: string;
  members: Member[];
}

export default function SpecialistCards() {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specialists: Specialist[] = [
    { 
      icon: Stethoscope, 
      title: "Pediatricians", 
      count: "5", 
      color: "from-blue-600 to-blue-700", 
      members: [
        { name: "Dr. John Doe", position: "Pediatrician" },
        { name: "Dr. Jane Smith", position: "Pediatrician" },
        { name: "Dr. Michael Johnson", position: "Pediatrician" },
        { name: "Dr. Sarah Williams", position: "Pediatrician" },
        { name: "Dr. David Brown", position: "Pediatrician" },
      ] 
    },
    { 
      icon: Eye, 
      title: "Ophthalmologists", 
      count: "1", 
      color: "from-green-600 to-green-700", 
      members: [
        { name: "Dr. Emily Chen", position: "Ophthalmologist" },
        { name: "Dr. Robert Taylor", position: "Ophthalmologist" },
      ]
    },
    { 
      icon: Ear, 
      title: "ENT Specialists", 
      count: "3", 
      color: "from-purple-600 to-purple-700", 
      members: [
        { name: "Dr. Lisa Wang", position: "ENT Specialist" },
        { name: "Dr. Kevin Patel", position: "Otolaryngologist" },
        { name: "Dr. Maria Garcia", position: "ENT Surgeon" }
      ]
    },
    { 
      icon: Brain, 
      title: "Psychiatrists", 
      count: "4", 
      color: "from-red-600 to-red-700", 
      members: [
        { name: "Dr. Sarah Williams", position: "Psychiatrist" },
        { name: "Dr. David Brown", position: "Child Psychiatrist" },
        { name: "Dr. Lisa Ray", position: "Psychiatrist" },
        { name: "Dr. Alex Turner", position: "Clinical Psychologist" }
      ]
    },
    { 
      icon: Smile, 
      title: "Dental Specialists", 
      count: "9", 
      color: "from-teal-600 to-teal-700", 
      members: [
        { name: "Dr. Robert Chen", position: "Pediatric Dentist" },
        { name: "Dr. Emily White", position: "Orthodontist" },
        { name: "Dr. Michael Brown", position: "Dental Surgeon" }
      ]
    },
    { 
      icon: Heart, 
      title: "Cardiologists", 
      count: "4", 
      color: "from-pink-600 to-pink-700", 
      members: [
        { name: "Dr. James Wilson", position: "Cardiologist" },
        { name: "Dr. Emma Davis", position: "Cardiologist" },
        { name: "Dr. Ryan Miller", position: "Cardiothoracic Surgeon" },
        { name: "Dr. Olivia Martin", position: "Pediatric Cardiologist" }
      ]
    },
    { 
      icon: BrainCircuit, 
      title: "Mental Health Experts", 
      count: "5", 
      color: "from-indigo-600 to-indigo-700", 
      members: [
        { name: "Dr. Sophia Chen", position: "Clinical Psychologist" },
        { name: "Dr. David Kim", position: "Psychotherapist" },
        { name: "Dr. Priya Patel", position: "Counseling Psychologist" },
        { name: "Dr. Michael Brown", position: "Psychiatric Nurse" },
        { name: "Dr. Emily Wilson", position: "Art Therapist" }
      ]
    },
    { 
      icon: Baby, 
      title: "Gynaecologists", 
      count: "3", 
      color: "from-rose-600 to-rose-700", 
      members: [
        { name: "Dr. Sarah Johnson", position: "Gynecologist" },
        { name: "Dr. Lisa Wong", position: "Obstetrician" },
        { name: "Dr. Rachel Green", position: "Reproductive Specialist" }
      ]
    },
    { 
      icon: Bone, 
      title: "Orthopedics", 
      count: "3", 
      color: "from-amber-600 to-amber-700", 
      members: [
        { name: "Dr. Robert Chen", position: "Orthopedic Surgeon" },
        { name: "Dr. Emily White", position: "Sports Medicine" },
        { name: "Dr. Michael Brown", position: "Pediatric Orthopedist" }
      ]
    },
    { 
      icon: Ambulance, 
      title: "Emergency Medicine", 
      count: "4", 
      color: "from-red-600 to-red-700", 
      members: [
        { name: "Dr. John Smith", position: "Emergency Physician" },
        { name: "Dr. Sarah Johnson", position: "Trauma Surgeon" },
        { name: "Dr. Michael Brown", position: "ER Specialist" },
        { name: "Dr. Emily Wilson", position: "Pediatric Emergency" }
      ]
    }
  ];

  const openModal = (specialist: Specialist) => {
    setSelectedSpecialist(specialist);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpecialist(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isModalOpen && target.classList.contains('modal-overlay')) {
        closeModal();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isModalOpen]);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialists.map((specialist, index) => (
          <div key={index} className="relative">
            <Card
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
              onClick={() => openModal(specialist)}
            >
              <CardContent className="p-6 text-center flex-1 flex flex-col">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${specialist.color} rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-200 group-hover:scale-110`}
                >
                  <specialist.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{specialist.title}</h3>
                <div className="flex items-center justify-center space-x-2 mt-auto">
                  <p className="text-blue-600 font-medium">
                    {specialist.count} {parseInt(specialist.count) > 1 ? 'Specialists' : 'Specialist'}
                  </p>
                  <button 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(specialist);
                    }}
                  >
                  
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for Member Details */}
      {isModalOpen && selectedSpecialist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay bg-opacity-50 bg-black/70 ">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{selectedSpecialist.title} Team</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedSpecialist.members.map((member, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-lg">
                      {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <div className="ml-4 flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                      <p className="text-xs text-gray-500 truncate">{member.position}</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 text-blue-600 hover:text-blue-800 transition-opacity">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-gray-50 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
