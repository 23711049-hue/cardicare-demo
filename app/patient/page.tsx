// FILE: src/app/patient/page.tsx
import Link from "next/link";

export default function PatientHome() {
  return (
    <main className="min-h-screen p-8 bg-white">
      {/* Header */}
      <div className="mb-8 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-800">Halo, Pasien 👋</h2>
        <p className="text-gray-500">Silakan pilih layanan kesehatan Anda hari ini.</p>
      </div>

      {/* Menu Grid */}
      <div className="grid gap-4 max-w-md mx-auto">
        
        {/* Tombol 1: Selfie Cardio */}
        <Link href="/patient/selfie-cardio" className="block p-6 bg-blue-50 border border-blue-200 rounded-xl hover:shadow-md transition">
          <div className="font-bold text-xl text-blue-800 mb-1">📸 Selfie-Cardio</div>
          <div className="text-sm text-blue-600">Cek detak jantung via kamera</div>
        </Link>

        {/* Tombol 2: Vocal Biomarker */}
        <Link href="/patient/vocal-biomarker" className="block p-6 bg-purple-50 border border-purple-200 rounded-xl hover:shadow-md transition">
          <div className="font-bold text-xl text-purple-800 mb-1">🎤 Cek Suara Paru</div>
          <div className="text-sm text-purple-600">Analisis suara napas dengan AI</div>
        </Link>

        {/* Tombol 3: SOS (Merah) */}
        <Link href="/patient/sos" className="block p-6 bg-red-600 text-white rounded-xl hover:bg-red-700 shadow-lg mt-4 text-center">
          <div className="font-bold text-2xl">🚨 SOS DARURAT</div>
          <div className="text-sm text-red-100">Panggil Ambulans Sekarang</div>
        </Link>

      </div>
      
      <div className="mt-8 text-center">
        <Link href="/" className="text-gray-400 text-sm hover:underline">← Kembali ke Halaman Utama</Link>
      </div>
    </main>
  );
}