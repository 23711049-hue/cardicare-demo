import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
      {/* Glow Effect Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-blue-200/30 blur-[120px] rounded-full -z-10" />

      <div className="text-center max-w-2xl">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
          ✨ AI-Powered Emergency System
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Cardi<span className="text-blue-600">Care</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Menjembatani kesenjangan Pre-Hospital dan IGD melalui 
          <span className="font-semibold text-slate-800"> Multimodal Generative AI</span>. 
          Penyelamatan nyawa dimulai dari genggaman Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/patient" className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto">
            Masuk sebagai Pasien
            <span className="block text-xs font-normal opacity-70">Screening & Emergency</span>
          </Link>

          <Link href="/doctor" className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-blue-300 transition-all duration-200 w-full sm:w-auto">
            Panel Dokter IGD
            <span className="block text-xs font-normal text-slate-400">Command Center</span>
          </Link>
        </div>

        <p className="mt-12 text-sm text-slate-400 font-medium">
          Ditenagai oleh Google Gemini 1.5 Pro • Mawapres 2026
        </p>
      </div>
    </main>
  );
}