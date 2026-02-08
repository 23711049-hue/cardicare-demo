"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Stethoscope, ArrowRight, ShieldCheck, Activity, Heart } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const [role, setRole] = useState<'patient' | 'doctor' | null>(null);
  const [loading, setLoading] = useState(false);

  // State untuk Form Input
  const [formData, setFormData] = useState({
    name: '',
    id: '', // Bisa NIK atau ID IDI
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi Verifikasi ke Server (2 detik)
    setTimeout(() => {
      if (role === 'patient') {
        router.push('/patient');
      } else {
        router.push('/doctor');
      }
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Branding */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase">
            <ShieldCheck size={14} />
            Mawapres 2026 Innovation
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            CARDI<span className="text-blue-500">CARE</span>
            <span className="text-red-500">.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Sistem Triase Gawat Darurat Jantung Terintegrasi AI. Menghubungkan pasien berisiko tinggi dengan penanganan medis dalam hitungan detik.
          </p>
          
          <div className="flex gap-4 justify-center lg:justify-start pt-4 opacity-70">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
              <Activity size={16} />
              <span>Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
              <Heart size={16} />
              <span>AI Diagnosis</span>
            </div>
          </div>
        </div>

        {/* Right Side: Login Portal Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] shadow-2xl">
          {!role ? (
            // STATE 1: PILIH PERAN
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Pilih Akses Masuk</h2>
              
              <button 
                onClick={() => setRole('patient')}
                className="w-full group bg-slate-800 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500 p-6 rounded-2xl flex items-center gap-6 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
                  <User size={28} />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">Pasien / Umum</h3>
                  <p className="text-slate-400 text-xs mt-1">Akses monitoring mandiri & SOS</p>
                </div>
                <ArrowRight className="ml-auto text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition" />
              </button>

              <button 
                onClick={() => setRole('doctor')}
                className="w-full group bg-slate-800 hover:bg-emerald-600/20 border border-slate-700 hover:border-emerald-500 p-6 rounded-2xl flex items-center gap-6 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
                  <Stethoscope size={28} />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">Tenaga Medis</h3>
                  <p className="text-slate-400 text-xs mt-1">Dashboard IGD & Analisis Klinis</p>
                </div>
                <ArrowRight className="ml-auto text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition" />
              </button>
            </div>
          ) : (
            // STATE 2: FORM LOGIN (DINAMIS)
            <form onSubmit={handleLogin} className="space-y-6 animate-in slide-in-from-right-10 fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <button type="button" onClick={() => setRole(null)} className="text-slate-400 hover:text-white text-sm">Kembali</button>
                <h2 className="text-xl font-bold text-white">Login {role === 'patient' ? 'Pasien' : 'Dokter'}</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition mt-2"
                    placeholder={role === 'patient' ? "Contoh: Budi Santoso" : "Contoh: dr. Spesialis Jantung"}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    {role === 'patient' ? 'Nomor Induk Kependudukan (NIK)' : 'Nomor NPA IDI'}
                  </label>
                  <input 
                    required
                    type="number" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition mt-2 font-mono"
                    placeholder={role === 'patient' ? "16 Digit NIK" : "NPA IDI Resmi"}
                    onChange={(e) => setFormData({...formData, id: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all
                  ${loading ? 'bg-slate-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95'}
                `}
              >
                {loading ? 'Verifikasi Data...' : 'Masuk Dashboard'}
              </button>

              <p className="text-center text-[10px] text-slate-500">
                {role === 'patient' 
                  ? 'Data Anda dilindungi enkripsi End-to-End standar medis.' 
                  : 'Akses terbatas hanya untuk personel medis terdaftar.'}
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}