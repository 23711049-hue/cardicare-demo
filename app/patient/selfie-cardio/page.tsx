"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Camera, Heart, RefreshCw, ArrowLeft, Activity, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SelfieCardioPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'result'>('idle');
  const [progress, setProgress] = useState(0);
  const [bpm, setBpm] = useState(0);

  // 1. Setup Kamera saat halaman dibuka
  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: "user" } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Gagal akses kamera:", err);
        alert("Mohon izinkan akses kamera untuk fitur ini.");
      }
    }
    setupCamera();
  }, []);

  // 2. Logika Scanning (Simulasi)
  const startScan = () => {
    setStatus('scanning');
    setProgress(0);
    
    // Simulasi loading 10 detik biar kerasa "berat" prosesnya
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          // Generate angka random normal (72-88 BPM) biar realistis
          setBpm(Math.floor(Math.random() * (88 - 72 + 1)) + 72); 
          setStatus('result');
          return 100;
        }
        return old + 1; // Kecepatan loading
      });
    }, 50); 
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-6 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-900/20 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="w-full max-w-md flex justify-between items-center mb-8 z-10">
        <Link href="/patient" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-md">
          <ArrowLeft size={20}/>
        </Link>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Optical Sensor</span>
          <h1 className="text-lg font-bold">rPPG Scanner</h1>
        </div>
        <div className="w-10" /> {/* Spacer biar tengah */}
      </div>

      {/* Main Camera Frame */}
      <div className="relative w-full aspect-[3/4] max-w-md rounded-[40px] overflow-hidden border-4 border-slate-800 shadow-2xl bg-black z-10">
        {/* Video Element */}
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted
          className="w-full h-full object-cover transform scale-x-[-1]" 
        />
        
        {/* Overlay Guide (Oval Wajah) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-64 h-80 border-2 rounded-[50%] transition-all duration-700 ease-in-out
            ${status === 'scanning' 
              ? 'border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.6)] scale-110' 
              : 'border-white/30 border-dashed'
            }`} 
          />
        </div>

        {/* Scanning Animation UI */}
        {status === 'scanning' && (
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 backdrop-blur-[2px]">
            <div className="bg-slate-900/80 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-blue-400 animate-pulse" />
                  <span className="text-xs font-bold text-blue-100">ANALYZING HEMOGLOBIN...</span>
                </div>
                <span className="text-xs font-mono font-bold text-blue-400">{progress}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100 ease-linear" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-3 text-center">
                Mendeteksi perubahan mikrosirkulasi darah wajah...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons Area */}
      <div className="w-full max-w-md mt-8 z-10">
        
        {/* Tombol Start */}
        {status === 'idle' && (
          <button 
            onClick={startScan}
            className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-[28px] font-bold text-lg text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Camera size={24} />
            MULAI PINDAI WAJAH
          </button>
        )}

        {/* Hasil Result */}
        {status === 'result' && (
          <div className="bg-white text-slate-900 p-8 rounded-[32px] text-center animate-in slide-in-from-bottom-10 fade-in duration-500 shadow-2xl">
            <div className="relative inline-block">
              <Heart size={64} className="mx-auto text-red-500 fill-red-500 animate-[ping_1s_ease-in-out_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap size={24} className="text-white fill-white" />
              </div>
            </div>
            
            <div className="mt-6 mb-2">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Heart Rate</span>
              <h2 className="text-7xl font-black text-slate-900 leading-tight">
                {bpm} <span className="text-xl font-medium text-slate-400">BPM</span>
              </h2>
            </div>

            <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
              ✅ Normal Sinus Rhythm
            </div>

            <button 
              onClick={() => setStatus('idle')}
              className="w-full py-4 bg-slate-100 hover:bg-slate-200 rounded-2xl text-slate-600 font-bold flex items-center justify-center gap-2 transition"
            >
              <RefreshCw size={18} />
              Pindai Ulang
            </button>
          </div>
        )}

        {/* Tips Text */}
        {status === 'idle' && (
          <p className="text-center text-xs text-slate-400 mt-6 leading-relaxed px-4">
            Pastikan wajah berada di area terang. <br/>Teknologi rPPG menggunakan kamera untuk membaca aliran darah.
          </p>
        )}
      </div>
    </main>
  );
}
