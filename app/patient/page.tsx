"use client";

import Link from "next/link";
import { Activity, Mic, Heart, AlertCircle, Pill, MapPin, User, ArrowRight, Sun, Zap } from "lucide-react";

export default function PatientPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-32 relative">
      
      {/* --- DEKORASI BACKGROUND (Biar Tidak Suram) --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px]" />
      </div>

      {/* --- HEADER (Sticky & Glassmorphism) --- */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="px-6 py-4 max-w-md mx-auto flex justify-between items-center">
          {/* Kiri: Sapaan */}
          <Link href="/patient/profile" className="flex-1 group">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <User size={10} /> Pasien Umum
              </span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                <Sun size={10} className="text-orange-400 fill-orange-400" /> Pagi
              </span>
            </div>
            <h1 className="text-xl font-black text-slate-800 leading-tight group-hover:text-blue-600 transition">
              Halo, Pak Budi 👋
            </h1>
          </Link>

          {/* Kanan: Foto Profil & Notif */}
          <Link href="/patient/profile" className="relative group">
            <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
               <span className="text-white font-bold text-sm">BS</span>
            </div>
            {/* Dot Merah (Notifikasi) */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 max-w-md mx-auto p-6 space-y-6">

        {/* 1. KARTU JANTUNG (Highlight Utama) */}
        <div className="bg-white rounded-[28px] p-1 shadow-xl shadow-blue-100/50 border border-slate-100">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[24px] p-5 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-blue-100 text-xs font-medium uppercase tracking-wider mb-1">Status Jantung</p>
                  <h2 className="text-3xl font-black tracking-tight">Normal</h2>
                </div>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Heart className="fill-white/20 text-white" size={20} />
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-black/20 rounded-xl p-3 border border-white/10">
                <Activity size={18} className="text-emerald-300 animate-pulse" />
                <div>
                  <p className="text-xs font-bold text-white">Monitoring Aktif</p>
                  <p className="text-[10px] text-blue-200">Terhubung ke Gemini AI</p>
                </div>
              </div>
            </div>
            
            {/* Hiasan background abstrak */}
            <Activity className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-[-15deg]" />
          </div>
        </div>

        {/* 2. GRID MENU (Fitur Utama) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Tombol Selfie */}
          <Link href="/patient/selfie-cardio" className="group bg-white p-5 rounded-[24px] shadow-sm hover:shadow-lg hover:shadow-blue-100 border border-slate-100 transition-all active:scale-95">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap size={24} className="fill-blue-600/20" />
            </div>
            <h3 className="font-bold text-slate-800">Selfie Cardio</h3>
            <p className="text-[10px] text-slate-400 leading-tight mt-1">Cek irama jantung via kamera HP</p>
          </Link>

          {/* Tombol Cek Suara */}
          <Link href="/patient/vocal-biomarker" className="group bg-white p-5 rounded-[24px] shadow-sm hover:shadow-lg hover:shadow-purple-100 border border-slate-100 transition-all active:scale-95">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mic size={24} className="fill-purple-600/20" />
            </div>
            <h3 className="font-bold text-slate-800">Cek Paru</h3>
            <p className="text-[10px] text-slate-400 leading-tight mt-1">Deteksi sesak & cairan paru AI</p>
          </Link>
        </div>

        {/* 3. LIST MENU (Info Pendukung) */}
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
          {/* Obat */}
          <div className="p-4 flex items-center justify-between border-b border-slate-50 hover:bg-slate-50 transition cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 text-orange-500 rounded-lg group-hover:bg-orange-100 transition">
                <Pill size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700">Jadwal Obat</p>
                <p className="text-[10px] text-slate-400">3 butir tersisa hari ini</p>
              </div>
            </div>
            <ArrowRight size={14} className="text-slate-300 group-hover:text-orange-400 group-hover:translate-x-1 transition" />
          </div>

          {/* RS */}
          <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-50 text-teal-500 rounded-lg group-hover:bg-teal-100 transition">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700">RS Terdekat</p>
                <p className="text-[10px] text-slate-400">RSUD Dr. Moewardi (2km)</p>
              </div>
            </div>
            <ArrowRight size={14} className="text-slate-300 group-hover:text-teal-400 group-hover:translate-x-1 transition" />
          </div>
        </div>

      </div>

      {/* --- TOMBOL SOS DARURAT (FIXED BOTTOM) --- */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-50 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <Link href="/patient/sos" className="group relative block w-full">
            {/* Efek Ping (Gelombang) */}
            <div className="absolute top-0 left-0 w-full h-full bg-red-500 rounded-full animate-ping opacity-20"></div>
            
            {/* Tombol Utama */}
            <div className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white py-4 px-6 rounded-full shadow-xl shadow-red-500/30 flex items-center justify-center gap-3 transition-all active:scale-95 border border-red-400">
              <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                <AlertCircle size={20} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-black text-lg leading-none tracking-tight">SOS DARURAT</p>
                <p className="text-[10px] text-red-100 font-medium">Panggil Ambulans & Alert Dokter</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </main>
  );
}