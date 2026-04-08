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
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data ---
const profile = {
  name: "UMAR FAKHRUDIN",
  title: "Copywriter & Desain Grafis",
  summary: "Saya adalah lulusan Sekolah Menengah Kejuruan (SMK) jurusan Teknik Komputer dan Jaringan. Saya mahir dalam pengoperasian komputer dan menguasai Photoshop, Microsoft Word, Microsoft Excel, Microsoft PowerPoint, dll. Saya adalah orang yang sangat disiplin dalam mengatur waktu, mudah beradaptasi, percaya diri, dan mampu berkomunikasi dengan baik.",
  contact: {
    phone: "0896-7666-8137",
    email: "umar.fakhrudin17@gmail.com",
    location: "Kec. Arjawinangun Kab. Cirebon",
    socials: {
      linkedin: "https://www.linkedin.com/in/umar-fakhrudin-9a5786268",
      instagram: "https://www.instagram.com/FakhrudinUmar",
      github: "https://github.com/UmarFakhrudin"
    }
  },
  profileImage: "/foto_saya.jpg",
  resumeImage: "/cv_saya.jpg",
  skills: [
    { name: "Adobe Photoshop", level: 90 },
    { name: "Microsoft Word", level: 95 },
    { name: "Microsoft Excel", level: 85 },
    { name: "Instalasi Jaringan", level: 80 },
    { name: "Desain Grafis", level: 88 }
  ],
  experience: [
    {
      company: "FLORIE X PINNATA STORE",
      role: "Admin Back Office",
      period: "2024 - Sekarang",
      location: "Bayalangu",
      description: "Bertanggung jawab atas Manajemen Inventaris & Stok (Kontrol Inventaris, Pemantauan Tanggal Kedaluwarsa, Administrasi Penjualan & Pembelian, Manajemen Data Produk, Koordinasi Operasional, Pelaporan, Logistik & Koordinasi Stok."
    },
    {
      company: "DEPO JAGO",
      role: "Staff General Affair",
      period: "2023 - 2024",
      location: "Arjawinangun",
      description: "Bertanggung jawab untuk mengelola seluruh operasional fasilitas kantor dan pengadaan aset perusahaan. Berpengalaman dalam mencapai efisiensi anggaran operasional, mengelola hubungan dengan vendor eksternal, dan memastikan seluruh aspek hukum dan keselamatan lingkungan kerja terpenuhi sesuai standar perusahaan."
    },
    {
      company: "J&T EXPRESS CP",
      role: "Leader / Shift Lead Collection Point",
      period: "2020 - 2023",
      location: "Tegalgubug",
      description: "Mengawasi dan memantau alur kerja tim sesuai SOP, Memantau proses pemindaian barang untuk penerimaan dan pengiriman, Memantau pengiriman harian, mingguan, dan bulanan, Menginput alamat pengiriman barang atau surat, mencatat keuangan harian, mingguan, dan bulanan menggunakan sistem agen dan Microsoft Excel."
    },
    {
      company: "POS EXPRESS INDONESIA",
      role: "Sales Counter Officer",
      period: "2019 - 2020",
      location: "Tegalgubug",
      description: "Menginput alamat pengiriman barang atau surat, mencatat keuangan harian, mingguan, dan bulanan menggunakan sistem agen dan Microsoft Excel."
    },
    {
      company: "JNE EXPRES",
      role: "Sales Counter Officer",
      period: "2018 - 2019",
      location: "Tegalgubug",
      description: "Menginput alamat pengiriman barang atau surat, mencatat keuangan harian, mingguan, dan bulanan menggunakan sistem agen dan Microsoft Excel."
    }
  ],
  education: [
    {
      school: "SMK PLUS AL-HILAL",
      period: "2015 - 2018",
      major: "Teknik Komputer dan Jaringan",
      location: "Desa Tegalgubug, Kec. Arjawinangun Kab. Cirebon",
      status: "Lulus dengan Baik"
    },
    {
      school: "MTS AL-HILAL",
      period: "2012 - 2015",
      major: "Siswa",
      location: "Desa Tegalgubug, Kec. Arjawinangun Kab. Cirebon",
      status: "Lulus dengan Baik"
    },
    {
      school: "MI NAHDLATUT TAIBIN",
      period: "2006 - 2012",
      major: "Siswa",
      location: "Desa Majasri, Kec. Susukan Kab. Cirebon",
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

const Navbar = () => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold text-slate-900 tracking-tighter"
          >
            UMAR <span className="text-amber-600">FAKHRUDIN.</span>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
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
            className="fixed inset-0 z-40 md:hidden bg-white overflow-hidden flex flex-col justify-center items-center"
          >
            <div className="px-4 py-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 flex gap-6 justify-center">
                <a href={profile.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href={profile.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href={profile.contact.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
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

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-2"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 max-w-2xl"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct the direct Gmail compose link
    const body = `Halo Umar,%0D%0A%0D%0ANama: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0APesan:%0D%0A${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}&su=${encodeURIComponent(subject || 'Kontak dari Portfolio')}&body=${body}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Show success message
    setIsSent(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-full md:w-1/2 h-full bg-slate-100/50 md:skew-x-12 transform md:translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-wider uppercase mb-4">
                Tersedia untuk Bekerja
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                {profile.name}
              </h1>
              <p className="text-lg md:text-2xl text-slate-600 font-medium mb-8 max-w-xl mx-auto lg:mx-0">
                {profile.title}
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 text-center"
                >
                  Hubungi Saya
                </a>
                <a 
                  href="#resume" 
                  className="px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all shadow-lg shadow-amber-200 flex items-center justify-center gap-2 text-center"
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
                  className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href={profile.contact.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href={profile.contact.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none"
            >
              <div className="aspect-square rounded-3xl bg-slate-200 overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src={profile.profileImage} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-slate-900 rounded-2xl -z-0" />
              <div className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 border-4 border-amber-200 rounded-full -z-0" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <SectionHeading subtitle="Gambaran singkat tentang latar belakang profesional dan kepribadian saya.">
                Tentang Saya
              </SectionHeading>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {profile.summary}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Lokasi</h4>
                    <p className="text-slate-500">{profile.contact.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-500">{profile.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Bahasa</h3>
                <div className="space-y-4">
                  {profile.languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>{lang.name}</span>
                        <span>{lang.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-slate-900"
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
      <section id="resume" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Lihat dan unduh resume profesional lengkap saya.">
            Resume Saya
          </SectionHeading>
          
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-2 md:p-4 rounded-3xl shadow-2xl border border-slate-100 max-w-4xl w-full"
            >
              <div className="aspect-[1/1.414] md:aspect-[1/1.414] max-h-[70vh] md:max-h-none bg-slate-100 rounded-2xl overflow-hidden relative group">
                <img 
                  src={profile.resumeImage} 
                  alt={`CV ${profile.name}`}
                  className="w-full h-full object-contain md:object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Pengunduhan CV dimulai (Placeholder)");
                    }}
                    className="px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform text-sm md:text-base"
                  >
                    <FileText className="w-5 h-5" />
                    Unduh PDF
                  </a>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
              <button 
                onClick={() => alert("Pengunduhan CV dimulai (Placeholder)")}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Unduh CV (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Kemampuan teknis dan alat yang saya gunakan untuk mewujudkan ide.">
            Keahlian Saya
          </SectionHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {profile.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-amber-200 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-amber-50 transition-colors">
                    {skill.name.includes('Photoshop') || skill.name.includes('Desain') ? (
                      <Palette className="w-6 h-6 text-amber-600" />
                    ) : skill.name.includes('Jaringan') ? (
                      <Code className="w-6 h-6 text-amber-600" />
                    ) : (
                      <FileText className="w-6 h-6 text-amber-600" />
                    )}
                  </div>
                  <span className="text-2xl font-bold text-slate-200 group-hover:text-amber-100 transition-colors">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{skill.name}</h3>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
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
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Perjalanan profesional saya dan peran yang saya jalani selama bertahun-tahun.">
            Pengalaman Kerja
          </SectionHeading>

          <div className="relative space-y-8 md:space-y-12">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2" />
            
            {profile.experience.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-amber-600 rounded-full border-4 border-white transform -translate-x-1/2 z-10" />
                
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <div className={`bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-100 transition-all ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">{exp.period}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 font-medium mt-1 text-sm">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
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
      <section id="education" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Pendidikan</h2>
            <p className="text-slate-400">Latar belakang akademik dan kualifikasi saya.</p>
            <div className="h-1.5 w-16 bg-amber-600 mt-4 rounded-full mx-auto md:mx-0" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-amber-500 font-bold text-sm">{edu.period}</span>
                <h3 className="text-xl font-bold mt-2 mb-1">{edu.school}</h3>
                <p className="text-slate-300 font-medium mb-4">{edu.major}</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
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
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
            
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <SectionHeading subtitle="Jangan ragu untuk menghubungi untuk kolaborasi atau sekadar menyapa.">
                  Mari Terhubung
                </SectionHeading>
                
                <div className="space-y-8 mt-12">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-600 transition-all">
                      <Mail className="w-6 h-6 text-slate-900 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email Saya</p>
                      <a href={`mailto:${profile.contact.email}`} className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors">
                        {profile.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-600 transition-all">
                      <Phone className="w-6 h-6 text-slate-900 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Telepon Saya</p>
                      <a href={`tel:${profile.contact.phone}`} className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors">
                        {profile.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-amber-600 transition-all">
                      <MapPin className="w-6 h-6 text-slate-900 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Kunjungi Saya</p>
                      <p className="text-lg font-bold text-slate-900">
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
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href={profile.contact.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={profile.contact.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:bg-slate-900 hover:text-white transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Nama</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subjek</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Pertanyaan Proyek"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Pesan</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Pesan Anda di sini..."
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSent}
                    className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                      isSent 
                        ? 'bg-green-600 text-white shadow-green-200' 
                        : 'bg-amber-600 text-white hover:bg-amber-700 shadow-amber-200'
                    }`}
                  >
                    {isSent ? 'Pesan Terkirim! Membuka Gmail...' : 'Kirim Pesan'}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Ini akan membuka Gmail di tab baru dengan pesan Anda yang siap dikirim.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl md:text-2xl font-bold text-slate-900 tracking-tighter">
              UMAR <span className="text-amber-600">FAKHRUDIN.</span>
            </div>
            <div className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} Umar Fakhrudin. Hak cipta dilindungi undang-undang.
            </div>
            <div className="flex gap-4">
              <a 
                href={profile.contact.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={profile.contact.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={profile.contact.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm font-bold text-slate-600 hover:text-amber-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm font-bold text-slate-600 hover:text-amber-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
