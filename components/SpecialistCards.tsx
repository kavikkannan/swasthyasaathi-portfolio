'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope,
  Eye,
  Ear,
  BrainCircuit,
  Heart,
  Bone,
  
  X,
  Activity,
  Layers,
  Scissors,
  Award,
  ArrowRight,
  Brain,
  User
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
      count: "6", 
      color: "from-blue-600 to-blue-700", 
      members: [
        { name: "Dr. Harshita", position: "Bamnawat MBBS MD (Pediatrics) AIIMS Delhi" },
        { name: "Dr. Doreswamy", position: "MBBS, MD Pediatrics, AIIMS" },
        { name: "Dr. Shantanu", position: "MBBS. MO, (Pediatrics), Fellowship Neonatology (Wadia Hospital Mumbai)" },
        { name: "Dr. Lokesh Choundhary", position: "MBBS, MD (Pediatrics), PGIMER ChandigarhT" },
        { name: "Dr. Choundri Muzafar Paswal", position: "(AIIMS) MD Pediatrics, DM Neonatology Gold Medalist" },
        { name: "Dr. Animesh Gandhi", position: "MBBS, MD Pediatrics" },
      ] 
    },
    { 
      icon: Eye, 
      title: "Ophthalmologists", 
      count: "2", 
      color: "from-green-600 to-green-700", 
      members: [
        { name: "Dr. Sonalika Gogia Malhotra ", position: "MBBS, MS Ophthalmology AIIMS, FLVPEL (Pediatric Ophthalmology and Nuero-Ophthalm010gy)"
         },
         { name: "Dr Shruti Tambe", position: "MBBS, MD Ophthalmolgy, Nair Mumbai"
         },
      ]
    },
    { 
      icon: Ear, 
      title: "ENT Specialists", 
      count: "5", 
      color: "from-purple-600 to-purple-700", 
      members: [
        { name: "Dr Aman Verma ", position: "MBBS. MS ENT (AIIMS)" },
        { name: "Dr. Nitika Goyal", position: "MBBS, MS ENT, AIIMS" },
        { name: "Dr Anubhav Raj", position: "MBBS. MS ENT, AIIMS" },
        { name: "Dr Sagar V. Jani ", position: "MBBS, MS ENT" },
        { name: "Dr. Deepika", position: "MBBS, MS ENT (AIIMS)" },
      ]
    },
    { 
      icon: BrainCircuit, 
      title: "Psychiatrists", 
      count: "4", 
      color: "from-red-600 to-red-700", 
      members: [
        { name: "Dr. Aditya Agrawal", position: "MBBS, MD Psychiatry (AIIMS) KGMU" },
        { name: "Dr. Apurva Mehra", position: "MBBS, MD Psychiatry, GMCH, Udaipur" },
        { name: "Dr, Gauri Gupta", position: "MBBS, MD Psychiatry" },
        { name: "Dr. Vidisha Singh", position: "MBBS, MD Psychiatry" }
      ]
    },
    { 
      icon: Activity, 
      title: "Dental Specialists", 
      count: "2", 
      color: "from-teal-600 to-teal-700", 
      members: [
        { name: "Dr, Divya Dasani", position: "BDS Dentistry" },
        { name: "Dr. Divya Jain ", position: "BDS Dentistry" },
      ]
    },



   



    { 
      icon: User, 
      title: "Gynaecologists", 
      count: "3", 
      color: "from-rose-600 to-rose-700", 
      members: [
        { name: "Dr. Kalika Dubey", position: "MBBS, MS Obs & Gyne (AIIMS)" },
        { name: "Dr. Richa Agrawal Motiwala", position: "MBBS, MS Obstetrics and Gynaecology Ex Consultant Apollo Bilaspur" },
        { name: "Dr. palak Dewan", position: "MS (Obs & Gyn)" }

      ]
    },
    { 
      icon: Layers, 
      title: "Dermatology", 
      count: "1", 
      color: "from-rose-600 to-rose-700", 
      members: [
        { name: "Dr. Ravi Mudgal", position: "MBBS MD. DNB FRGUHS Dermatology, AIIMS" },
      ]
    },
    { 
      icon: Activity, 
      title: "Endodontics", 
      count: "1", 
      color: "from-rose-600 to-rose-700", 
      members: [
        { name: "Dr. Ashish Choudhary ", position: "BDS. MDS Endodontics. (ALMS)" },

      ]
    },
    { 
      icon: Activity, 
      title: "Maxillofacial Prosthodontics & Implantology", 
      count: "1", 
      color: "from-rose-600 to-rose-700", 
      members: [
        { name: "Dr. Priyesh Gupta", position: "BDS, MDS (Maxillofacial Prosthodontics) & Implantology" },

      ]
    },
    { 
      icon: Bone, 
      title: "Orthopedics", 
      count: "3", 
      color: "from-amber-600 to-amber-700", 
      members: [
        { name: "Dr. Nehal Saraf", position: "BOS, MDS (Orthodontics & dentofacial orthopedics)" },
        { name: "Dr. Md. Ashraf Jamal", position: "MBBS, MS Orthopedics (AIIMS)" },
        { name: "Dr. Tanvi Bhatt (PT) ", position: "MPT (Orthopaedics)" },
      ]
    },
    { 
      icon: Scissors, 
      title: "General Surgeon", 
      count: "1", 
      color: "from-amber-600 to-amber-700", 
      members: [
        { name: "Dr. Bhavya ", position: "MBBS, MS Gen. Surgery(Gold Medalist) DNB Gen. Surgery FMAS, PGC Breast Surgery" },
]
    },
    { 
      icon: Stethoscope, 
      title: "General Medicine", 
      count: "1", 
      color: "from-amber-600 to-amber-700", 
      members: [
        { name: "Dr. Rahil Ahmed", position: "MD. General Medicine" },
]
    },
    { 
      icon: Award, 
      title: "Super Specialists", 
      count: "15", 
      color: "from-red-600 to-red-700", 
      members: [
        { name: "Dr. Subham Sharma", position: "MBBS, MD. DM Cardiology (AIIMS)" },
        { name: "Dr. Deepika Saroha", position: "MBBS, MD. DM Neurology, (AIIMS)" },
        { name: "Dr, Jyoti Mehta ", position: "MBBS, MD, Radiation Oncology" },
        { name: "Dr. Annu Rajpurohit ", position: "MBBS, MO, DN Medical Oncology (TaTa Memorial Hosp.) Mumbai" },
        { name: "Dr. Naina Kumar Agrawal ", position: "MBBS, MS, MCH (Surgical Oncology) Assistant Professor, SMS Jaipur" },
        { name: "Dr. Rishi Yadav ", position: "MBBS, MD Pulmonary& Critical Care Medicine" },
        { name: "Dr. Akhilesh Humnekar ", position: "MBBS, MS Plastic & Cosmetics Surgeon (AIIMS)" },
        { name: "Dr. Peeyush Kesharwani ", position: "MBBS, MSMCH Cardiothoaric ancVascular Surgery (Safdarjung Delhi)" },
        { name: "Dr. Shrya Shah ", position: "MBBS, MD Clinical Nutritionist" },
        { name: "Dr. Shivam Singh ", position: "MBBS, BASLP, MASLP (Hearing & Speech)" },
        { name: "Dr. Bhakti Arora Kapoor ", position: "MBBS, MSc.Food Science &Nutrition" },
        { name: "Dr. Rainee Pagaria ", position: "MBBS, B.D.S (Datta Meghe Institute Of Medical Science)C/o PAGARIA DENTAL CLINICBALAGHAT" },
        { name: "Dr. Shulabh Pagaria ", position: "MBBS, B.D.S, M.D.S(Pedodontist)C/o PAGARIA DENTAL CLINICBALAGHAT" },
        { name: "Dr. Parth Jethwani", position: "MBBS MD DM Endocrinology (AIIMS)" },
  
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
