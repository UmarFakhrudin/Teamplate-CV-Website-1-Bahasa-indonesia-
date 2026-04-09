/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Palette, 
  FileText, 
  Globe, 
  Plane, 
  Trophy, 
  Edit, 
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
  Sun,
  Moon,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

// --- Data ---
const profile = {
  name: "BUDI SANTOSO",
  title: "Copywriter & Desain Grafis",
  summary: "Saya adalah seorang profesional kreatif dengan latar belakang pendidikan Desain Komunikasi Visual dari Universitas Indonesia. Saya memiliki keahlian mendalam dalam copywriting dan desain grafis, dengan pengalaman mengelola kampanye kreatif untuk berbagai brand. Saya adalah pribadi yang disiplin, inovatif, dan mampu bekerja secara kolaboratif dalam tim untuk mencapai target komunikasi yang efektif.",
  contact: {
    phone: "0812-3456-7890",
    email: "budi.santoso@example.com",
    location: "Jl. Merdeka No. 123, Jakarta Pusat",
    socials: {
      linkedin: "https://www.linkedin.com/in/budisantoso",
      instagram: "https://www.instagram.com/budisantoso",
      github: "https://github.com/budisantoso"
    }
  },
  profileImage: "/foto_saya.jpg",
  resumeImage: "/cv_saya.jpg",
  skills: [
    { name: "Adobe Photoshop", level: 90 },
    { name: "Copywriting", level: 95 },
    { name: "Desain Grafis", level: 88 },
    { name: "Adobe Illustrator", level: 85 },
    { name: "Content Strategy", level: 80 }
  ],
  experience: [
    {
      company: "Creative Agency Nusantara",
      role: "Senior Copywriter",
      period: "2022 - Sekarang",
      location: "Jakarta Selatan",
      description: "Mengembangkan konsep kreatif dan naskah iklan untuk berbagai kampanye digital dan media cetak klien besar. Berkolaborasi dengan tim kreatif untuk menghasilkan strategi komunikasi yang efektif."
    },
    {
      company: "Digital Media Studio",
      role: "Graphic Designer",
      period: "2020 - 2022",
      location: "Jakarta Barat",
      description: "Merancang identitas visual, materi promosi media sosial, dan tata letak publikasi digital. Memastikan konsistensi brand di seluruh platform komunikasi visual."
    },
    {
      company: "Tech Startup Indonesia",
      role: "Content Creator",
      period: "2018 - 2020",
      location: "Jakarta Pusat",
      description: "Memproduksi konten visual dan tulisan yang menarik untuk meningkatkan engagement di berbagai platform media sosial. Menganalisis tren pasar untuk menciptakan konten yang relevan."
    }
  ],
  education: [
    {
      school: "Universitas Indonesia",
      period: "2014 - 2018",
      major: "S1 Desain Komunikasi Visual",
      location: "Depok, Jawa Barat",
      status: "Lulus dengan Predikat Cum Laude"
    },
    {
      school: "SMA Negeri 1 Jakarta",
      period: "2011 - 2014",
      major: "Ilmu Pengetahuan Alam",
      location: "Jakarta Pusat",
      status: "Lulus dengan Baik"
    }
  ],
  languages: [
    { name: "Inggris", level: 75 },
    { name: "Indonesia", level: 100 },
    { name: "Jawa", level: 100 }
  ],
  hobbies: [
    { name: "Jalan-jalan", icon: <Plane className="w-6 h-6" /> },
    { name: "Sepak Bola", icon: <Trophy className="w-6 h-6" /> },
    { name: "Editing", icon: <Edit className="w-6 h-6" /> },
    { name: "Web Dev", icon: <Code className="w-6 h-6" /> }
  ]
};

// --- Components ---

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-amber-600 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ 
          x: mousePos.x - 16, 
          y: mousePos.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(217, 119, 6, 0.1)' : 'transparent'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-amber-600 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 3, y: mousePos.y - 3 }}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.2 }}
      />
    </>
  );
};

const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDarkMode ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 backdrop-blur-md shadow-sm py-3') : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-xl md:text-2xl font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
          >
            {profile.name.split(' ')[0]} <span className="text-amber-600">{profile.name.split(' ').slice(1).join(' ')}.</span>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300 hover:text-amber-500' : 'text-slate-600 hover:text-amber-600'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all ${isDarkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${isDarkMode ? 'text-amber-400' : 'text-slate-600'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={isDarkMode ? 'text-white' : 'text-slate-900'}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-40 md:hidden overflow-hidden flex flex-col justify-center items-center ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
          >
            <div className="px-4 py-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-3xl font-bold transition-colors ${isDarkMode ? 'text-white hover:text-amber-500' : 'text-slate-900 hover:text-amber-600'}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 flex gap-6 justify-center">
                <a href={profile.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
                  <Instagram className="w-8 h-8" />
                </a>
                <a href={profile.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href={profile.contact.socials.github} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
                  <Github className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, isDarkMode }: { children: React.ReactNode, subtitle?: string, isDarkMode?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1.5 bg-amber-600 mt-4 rounded-full"
    />
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (platform: 'email' | 'whatsapp') => {
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !message) {
      alert('Silakan isi nama, email, dan pesan Anda.');
      return;
    }

    if (platform === 'email') {
      const body = `Halo ${profile.name},%0D%0A%0D%0ANama: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0APesan:%0D%0A${message}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}&su=${encodeURIComponent(subject || 'Kontak dari Portfolio')}&body=${body}`;
      window.open(gmailUrl, '_blank');
    } else {
      // Format phone: remove non-digits, replace leading 0 with 62
      let phone = profile.contact.phone.replace(/[^0-9]/g, '');
      if (phone.startsWith('0')) {
        phone = '62' + phone.substring(1);
      }
      const text = `Halo ${profile.name}, saya ${name}.%0A%0ASubjek: ${subject}%0A%0APesan: ${message}`;
      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    }
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} selection:bg-amber-100 selection:text-amber-900`}>
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className={`absolute top-0 right-0 -z-10 w-full md:w-1/2 h-full md:skew-x-12 transform md:translate-x-1/4 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900/40' : 'bg-slate-100/50'}`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 transition-colors ${isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                Tersedia untuk Bekerja
              </span>
              <h1 className={`text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {profile.name}
              </h1>
              <p className={`text-lg md:text-2xl font-medium mb-8 max-w-xl mx-auto lg:mx-0 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {profile.title}
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                  href="#contact" 
                  className={`px-8 py-4 rounded-xl font-semibold transition-all shadow-lg text-center ${isDarkMode ? 'bg-white text-slate-900 hover:bg-slate-200 shadow-white/5' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}
                >
                  Hubungi Saya
                </a>
                <a 
                  href={profile.resumeImage}
                  download={`CV_${profile.name.replace(/\s+/g, '_')}.jpg`}
                  className={`px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all shadow-lg flex items-center justify-center gap-2 text-center ${isDarkMode ? 'shadow-amber-900/20' : 'shadow-amber-200'}`}
                >
                  <FileText className="w-5 h-5" />
                  Unduh CV
                </a>
              </div>
              
              <div className="flex justify-center lg:justify-start gap-4 mt-10">
                <a 
                  href={profile.contact.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-12 h-12 border rounded-xl flex items-center justify-center transition-all shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-white hover:text-slate-900' : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'}`}
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href={profile.contact.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-12 h-12 border rounded-xl flex items-center justify-center transition-all shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-white hover:text-slate-900' : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'}`}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href={profile.contact.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-12 h-12 border rounded-xl flex items-center justify-center transition-all shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-white hover:text-slate-900' : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'}`}
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none mb-16 lg:mb-0"
            >
              <div className="relative z-10">
                <div className={`aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative border-8 transition-colors duration-500 ${isDarkMode ? 'bg-slate-800 border-slate-900' : 'bg-slate-200 border-white'}`}>
                  <img 
                    src={profile.profileImage} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Badge Pengalaman - Diposisikan di bawah foto agar tidak menutupi wajah */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  transition={{ delay: 0.8 }}
                  className={`absolute -bottom-6 left-1/2 p-2 md:p-3 rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 border z-20 whitespace-nowrap transition-colors duration-500 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}
                >
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-colors ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'}`}>
                    <Trophy className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                  </div>
                  <div className="text-left">
                    <p className={`text-[8px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Pengalaman</p>
                    <p className={`text-xs md:text-sm font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>7+ Tahun</p>
                  </div>
                </motion.div>
              </div>

              {/* Elemen Dekoratif */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-900 rounded-full -z-0 opacity-10 blur-3xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-amber-200 rounded-[4rem] -z-0 opacity-50" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <SectionHeading 
                isDarkMode={isDarkMode}
                subtitle="Gambaran singkat tentang latar belakang profesional dan kepribadian saya."
              >
                Tentang Saya
              </SectionHeading>
              <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {profile.summary}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Lokasi</h4>
                    <p className={isDarkMode ? 'text-slate-500' : 'text-slate-500'}>{profile.contact.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Email</h4>
                    <p className={isDarkMode ? 'text-slate-500' : 'text-slate-500'}>{profile.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className={`p-8 rounded-3xl ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
                <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Bahasa</h3>
                <div className="space-y-4">
                  {profile.languages.map((lang) => (
                    <div key={lang.name}>
                      <div className={`flex justify-between text-sm font-medium mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        <span>{lang.name}</span>
                        <span>{lang.level}%</span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className={`h-full ${isDarkMode ? 'bg-amber-500' : 'bg-slate-900'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-600 p-6 md:p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-6">Hobi</h3>
                <div className="grid grid-cols-2 gap-4">
                  {profile.hobbies.map((hobby) => (
                    <div key={hobby.name} className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        {hobby.icon}
                      </div>
                      <span className="text-xs font-medium">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`py-20 transition-colors duration-500 overflow-hidden relative ${isDarkMode ? 'bg-slate-900' : 'bg-slate-900'}`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`backdrop-blur-xl border rounded-[3rem] p-8 md:p-16 text-center transition-colors duration-500 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/5 border-white/10'}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-amber-600/20">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Siap untuk Bekerja Bersama?</h2>
              <p className="text-slate-400 text-lg mb-10">
                Unduh resume lengkap saya untuk melihat detail kualifikasi, pengalaman, dan keahlian yang saya miliki dalam format yang siap cetak.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={profile.resumeImage}
                  download={`CV_${profile.name.replace(/\s+/g, '_')}.jpg`}
                  className="px-10 py-5 bg-amber-600 text-white rounded-2xl font-bold hover:bg-amber-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-600/20 text-lg"
                >
                  <FileText className="w-6 h-6" />
                  Unduh Resume (JPG)
                </a>
                <a 
                  href="#contact"
                  className={`px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-lg ${isDarkMode ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
                >
                  <Mail className="w-6 h-6" />
                  Hubungi Sekarang
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            isDarkMode={isDarkMode}
            subtitle="Kemampuan teknis dan alat yang saya gunakan untuk mewujudkan ide."
          >
            Keahlian Saya
          </SectionHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {profile.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl shadow-sm border transition-all cursor-default ${isDarkMode ? 'bg-slate-900 border-slate-800 group hover:border-amber-500/50' : 'bg-white border-slate-100 group hover:border-amber-200'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl transition-colors ${isDarkMode ? 'bg-slate-800 group-hover:bg-amber-900/30' : 'bg-slate-50 group-hover:bg-amber-50'}`}>
                    {skill.name.includes('Photoshop') || skill.name.includes('Desain') ? (
                      <Palette className="w-6 h-6 text-amber-600" />
                    ) : skill.name.includes('Jaringan') ? (
                      <Code className="w-6 h-6 text-amber-600" />
                    ) : (
                      <FileText className="w-6 h-6 text-amber-600" />
                    )}
                  </div>
                  <span className={`text-2xl font-bold transition-colors ${isDarkMode ? 'text-slate-800 group-hover:text-amber-900/20' : 'text-slate-200 group-hover:text-amber-100'}`}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{skill.name}</h3>
                <div className={`h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-amber-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            isDarkMode={isDarkMode}
            subtitle="Perjalanan profesional saya dan peran yang saya jalani selama bertahun-tahun."
          >
            Pengalaman Kerja
          </SectionHeading>

          <div className="relative space-y-12 md:space-y-12">
            {/* Timeline line */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
            
            {profile.experience.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-amber-600 rounded-full border-4 transform -translate-x-1/2 z-10 ${isDarkMode ? 'border-slate-900' : 'border-white'}`} />
                
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <div className={`p-6 md:p-8 rounded-3xl border transition-all ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:shadow-amber-900/10' : 'bg-slate-50 border-slate-100 hover:shadow-xl hover:shadow-slate-100'}`}>
                    <div className="flex flex-col mb-4">
                      <span className="text-amber-600 font-bold text-xs md:text-sm uppercase tracking-wider">{exp.period}</span>
                      <h3 className={`text-lg md:text-2xl font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                      <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 font-medium mt-2 text-xs md:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className={`w-4 h-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className={`w-4 h-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className={`leading-relaxed text-sm md:text-base ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-900'} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Pendidikan</h2>
            <p className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>Latar belakang akademik dan kualifikasi saya.</p>
            <div className="h-1.5 w-16 bg-amber-600 mt-4 rounded-full mx-auto md:mx-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {profile.education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`backdrop-blur-sm p-6 md:p-8 rounded-3xl border transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-amber-500 font-bold text-xs md:text-sm">{edu.period}</span>
                <h3 className="text-lg md:text-xl font-bold mt-2 mb-1">{edu.school}</h3>
                <p className="text-slate-300 font-medium mb-4 text-sm md:text-base">{edu.major}</p>
                <div className={`space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${isDarkMode ? 'text-slate-600' : 'text-slate-500'}`} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-500" />
                    <span>{edu.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-[3rem] p-8 md:p-16 overflow-hidden relative ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 ${isDarkMode ? 'bg-amber-900/20' : 'bg-amber-100'}`} />
            
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <SectionHeading 
                  isDarkMode={isDarkMode}
                  subtitle="Jangan ragu untuk menghubungi untuk kolaborasi atau sekadar menyapa."
                >
                  Mari Terhubung
                </SectionHeading>
                
                <div className="space-y-8 mt-12">
                  <div className="flex items-center gap-6 group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-600 transition-all ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                      <Mail className={`w-6 h-6 group-hover:text-white ${isDarkMode ? 'text-slate-300' : 'text-slate-900'}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Email Saya</p>
                      <a href={`mailto:${profile.contact.email}`} className={`text-lg font-bold hover:text-amber-600 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {profile.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-600 transition-all ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                      <Phone className={`w-6 h-6 group-hover:text-white ${isDarkMode ? 'text-slate-300' : 'text-slate-900'}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Telepon Saya</p>
                      <a href={`tel:${profile.contact.phone}`} className={`text-lg font-bold hover:text-amber-600 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {profile.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-600 transition-all ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                      <MapPin className={`w-6 h-6 group-hover:text-white ${isDarkMode ? 'text-slate-300' : 'text-slate-900'}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Kunjungi Saya</p>
                      <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {profile.contact.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  <a 
                    href={profile.contact.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white' : 'bg-white text-slate-600 hover:bg-slate-900 hover:text-white'}`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href={profile.contact.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white' : 'bg-white text-slate-600 hover:bg-slate-900 hover:text-white'}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={profile.contact.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white' : 'bg-white text-slate-600 hover:bg-slate-900 hover:text-white'}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className={`p-8 rounded-3xl shadow-xl ${isDarkMode ? 'bg-slate-800 shadow-none border border-slate-700' : 'bg-white shadow-slate-200/50'}`}>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Nama</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-100 text-slate-900'}`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-100 text-slate-900'}`}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Subjek</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Pertanyaan Proyek"
                      required
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-100 text-slate-900'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pesan</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Pesan Anda di sini..."
                      required
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-600' : 'bg-slate-50 border-slate-100 text-slate-900'}`}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button 
                      type="button"
                      onClick={() => handleSendMessage('whatsapp')}
                      disabled={isSent}
                      className={`py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                        isSent 
                          ? 'bg-green-600 text-white shadow-green-200' 
                          : 'bg-green-500 text-white hover:bg-green-600 shadow-green-200'
                      }`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      {isSent ? 'Terkirim!' : 'Kirim via WhatsApp'}
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleSendMessage('email')}
                      disabled={isSent}
                      className={`py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                        isSent 
                          ? 'bg-green-600 text-white shadow-green-200' 
                          : 'bg-amber-600 text-white hover:bg-amber-700 shadow-amber-200'
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                      {isSent ? 'Terkirim!' : 'Kirim via Email'}
                    </button>
                  </div>
                  
                  <p className={`text-center text-xs mt-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Pilih salah satu metode di atas untuk mengirim pesan Anda.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 transition-colors duration-500 border-t ${isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className={`text-xl md:text-2xl font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {profile.name.split(' ')[0]} <span className="text-amber-600">{profile.name.split(' ').slice(1).join(' ')}.</span>
            </div>
            <div className={`text-sm font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              © {new Date().getFullYear()} {profile.name}. Hak cipta dilindungi undang-undang.
            </div>
            <div className="flex gap-4">
              <a 
                href={profile.contact.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm ${isDarkMode ? 'bg-slate-900 border border-slate-800 text-slate-500 hover:text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white'}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={profile.contact.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm ${isDarkMode ? 'bg-slate-900 border border-slate-800 text-slate-500 hover:text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white'}`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={profile.contact.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm ${isDarkMode ? 'bg-slate-900 border border-slate-800 text-slate-500 hover:text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white'}`}
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex gap-8">
              <a href="#" className={`text-sm font-bold transition-colors ${isDarkMode ? 'text-slate-500 hover:text-amber-500' : 'text-slate-600 hover:text-amber-600'}`}>Privacy Policy</a>
              <a href="#" className={`text-sm font-bold transition-colors ${isDarkMode ? 'text-slate-500 hover:text-amber-500' : 'text-slate-600 hover:text-amber-600'}`}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
