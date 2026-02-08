"use client";

import Link from "next/link";
import { Activity, Mic, Heart, AlertCircle, Pill, MapPin, User, ArrowRight, Sun } from "lucide-react";

export default function PatientPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-32 relative overflow-hidden">
      
      {/* --- DEKORASI BACKGROUND (Biar Gak Sepi) --- */}
      {/* Bola biru samar di pojok kiri atas */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />
      {/* Bola ungu samar di pojok kanan tengah */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-purple-200/30 rounded-full blur-[80px] pointer-events-none" />

      {/* --- HEADER BARU (Clean White) --- */}
      <div className="bg-white/80 backdrop-blur-md px-6 py-6 border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center gap-4">
          
          <Link href="/patient/profile" className="flex-1 group cursor-pointer block">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
                Pasien Umum
              </span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                <Sun size={10} className="text-orange-400" /> Selamat Pagi
              </span>
            </div>
            
            <h1 className="text-xl font-black text-slate-800 group-hover:text-blue-600 transition">
              Halo, Pak Budi 👋
            </h1>
          </Link>
          
          <Link href="/patient/profile" className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 hover:scale-105 transition border-2 border-white relative">
             <User className="text-white" size={24} />
             <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </Link>

        </div>
      </div>

      {/* --- ISI DASHBOARD --- */}
      <div className="max-w-md mx-auto p-6 space-y-6 relative z-10">
        
        {/* 1. KARTU RISIKO JANTUNG (Desain Lebih Soft) */}
        <div className="bg-white rounded-[32px] p-6 shadow-xl shadow-blue-100 border border-blue-50 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-2">
               <div className="flex items-center gap-2">
                 <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                    <Heart size={20} className="fill-blue-600" />
                 </div>
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Status Jantung</p>
               </div>
               <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-lg">LIVE</span>
            </div>
            
            <h3 className="text-4xl font-black text-slate-800 mb-1">Normal</h3>
            <p className="text-slate-400 text-xs mb-4">Detak jantung stabil dalam 24 jam terakhir.</p>

            <div className="flex items-center gap-2 bg-slate-50 w-full px-4 py-3 rounded-2xl border border-slate-100">
              <Activity size={16} className="text-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-600">Monitoring Aktif...</span>
            </div>
          </div>
          {/* Hiasan background abstrak */}
          <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-50 transition group-hover:bg-blue-100" />
        </div>

        {/* 2. MENU LAYANAN UTAMA (Grid Putih Bersih) */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/patient/selfie-cardio" className="bg-white p-5 rounded-[28px] shadow-sm hover:shadow-xl hover:shadow-blue-100 border border-slate-100 hover:border-blue-200 transition-all group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-blue-600">
              <Activity size={28} />
            </div>
            <p className="font-bold text-slate-800">Selfie Cardio</p>
            <p className="text-[10px] text-slate-400 mt-1">Cek via Kamera</p>
          </Link>
          
          <Link href="/patient/vocal-biomarker" className="bg-white p-5 rounded-[28px] shadow-sm hover:shadow-xl hover:shadow-purple-100 border border-slate-100 hover:border-purple-200 transition-all group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-purple-600">
              <Mic size={28} />
            </div>
            <p className="font-bold text-slate-800">Cek Suara</p>
            <p className="text-[10px] text-slate-400 mt-1">Analisis Paru AI</p>
          </Link>
        </div>

        {/* 3. MENU LIST (Lebih Rapi) */}
        <div className="bg-white rounded-[28px] shadow-sm border border-slate-100 overflow-hidden">
           <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition border-b border-slate-50 cursor-pointer">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                  <Pill size={18}/>
               </div>
               <div>
                 <p className="font-bold text-slate-700 text-sm">Jadwal Obat</p>
                 <p className="text-[10px] text-slate-400">Amlodipine 5mg • 19:00 WIB</p>
               </div>
             </div>
             <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-[10px] font-bold">3 SISA</span>
           </div>

           <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-500">
                  <MapPin size={18}/>
               </div>
               <div>
                 <p className="font-bold text-slate-700 text-sm">RS Terdekat</p>
                 <p className="text-[10px] text-slate-400">RSUD Dr. Moewardi (2.1 km)</p>
               </div>
             </div>
             <ArrowRight size={16} className="text-slate-300" />
           </div>
        </div>
      </div>

      {/* --- TOMBOL SOS (Floating & Glowing) --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-40">
        <Link href="/patient/sos" className="group block bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white text-center py-4 rounded-full shadow-lg shadow-red-200 transition-all active:scale-95">
          <span className="text-lg font-black tracking-tight flex items-center justify-center gap-2">
            <div className="bg-white/20 p-1 rounded-full"><AlertCircle size={18} /></div>
            SOS DARURAT
          </span>
        </Link>
      </div>

    </main>
  );
}