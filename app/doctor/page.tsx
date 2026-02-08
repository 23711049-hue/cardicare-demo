import React from 'react';

export default function DoctorDashboard() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 font-sans">
      <nav className="border-b border-slate-800 bg-[#1e293b]/50 backdrop-blur-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">C</div>
          <h1 className="text-xl font-bold tracking-tight text-white">CARDICARE <span className="text-blue-500 text-sm font-normal">Command Center</span></h1>
        </div>
      </nav>

      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Kolom Kiri: Daftar Pasien */}
        <div className="col-span-1 md:col-span-3 space-y-4">
          <div className="p-4 bg-red-600/20 border-l-4 border-red-600 rounded-r-xl space-y-2">
            <span className="text-[10px] font-bold bg-red-600 px-2 py-0.5 rounded text-white uppercase">Code: STEMI</span>
            <h4 className="font-bold text-white">Tn. Budi Santoso (55th)</h4>
            <p className="text-xs text-slate-300">Lokasi: Jl. Slamet Riyadi</p>
          </div>
        </div>

        {/* Kolom Tengah: Analisis AI */}
        <div className="col-span-1 md:col-span-6 space-y-6">
          <div className="bg-[#1e293b] rounded-2xl border border-slate-800 p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4">✨ Gemini 3 Analysis</h3>
            <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-5">
              <p className="text-blue-100 text-sm italic">
                "Deteksi pola 'wet voice' dan elevasi ST pada EKG. Probabilitas 85% Gagal Jantung Akut."
              </p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Tombol Aksi */}
        <div className="col-span-1 md:col-span-3">
           <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-sm">AKTIVASI CATH LAB</button>
        </div>
      </div>
    </main>
  );
}