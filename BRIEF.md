/*
    Cardicare Web Platform - Technical Brief (for Developer)
    --------------------------------------------------------
    Project: Cardicare (PWA - Progressive Web App)
    Goal: Dual-interface system for cardiac emergency screening (patient) and IGD command center (doctor).
    Stack: Next.js (React), Tailwind CSS, Firebase, Google Vertex AI, MediaPipe, Google Maps API.
*/

/* 1. Tech Stack & Architecture */
- Frontend: Next.js (React) + Tailwind CSS (PWA enabled)
    - Reason: Fast, responsive, installable on mobile, SEO-friendly for health info.
- Backend: Google Firebase (Auth, Firestore Realtime DB, Cloud Functions, Storage)
    - Reason: Real-time updates for IGD dashboard, secure auth, scalable.
- AI Integration: Google Vertex AI (Gemini 1.5 Flash & Pro)
    - Reason: Flash for fast/cheap triage chat, Pro for EKG & audio analysis.
- Vision: Google MediaPipe (Face Mesh) runs client-side for rPPG.
- Maps: Google Maps Platform (Directions, Distance Matrix API).

/* 2. Patient Interface (Mobile-first) */
A. Selfie-Cardio (rPPG)
    - Use @mediapipe/face_mesh to detect face & ROI (forehead/cheek).
    - Extract green channel intensity per frame (30fps, 30s).
    - Apply FFT (Fast Fourier Transform) to get heart rate (BPM).
    - All processing on-device (privacy, zero server cost).
    - UI: Auto-max screen brightness during scan for lighting.
    - Only send result (BPM, HRV) to backend, never raw video.

B. Vocal Biomarker (Voice Fluid Detection)
    - Record 5s audio (MediaRecorder API, .wav/.webm).
    - Upload to Firebase Storage.
    - Trigger Cloud Function: send to Vertex AI (Gemini 1.5 Pro).
    - Prompt: "Analyze for laryngeal edema (jitter/shimmer). Output JSON: {risk_score: 1-10, reason: ...}"
    - Show result to user (risk score, recommendation).

C. SOS Button & SMS Fallback
    - On tap: get GPS, try send to Firebase API.
    - If fail (timeout >5s): auto-generate SMS with Google Maps link & triage code.
    - User can send SMS manually (works on 2G).

/* 3. Doctor Interface (Tablet/Desktop) */
A. IGD Command Center Dashboard
    - Real-time triage queue (listen to Firestore emergency_requests).
    - Alert: Play sound & show modal if new high-risk entry.
    - Patient detail: show vitals, AI analysis, vocal biomarker, EKG result.
    - EKG Interpreter: upload image/PDF, send to Gemini 1.5 Pro Vision.
        - Prompt: "Identify ST-elevation, return bounding box for anomaly."
        - Overlay result on EKG image in UI.

B. Triage Reasoning
    - Combine EKG + symptoms + risk factors.
    - Use Gemini 3 (if available) for chain-of-thought triage suggestion.
    - Output: Triage level (P1/P2/P3) + short clinical reasoning.

C. Data Minimization & Security
    - No raw video/audio stored long-term.
    - Auto-delete sensitive files after 24h (Cloud Function scheduled trigger).
    - Use Google Sign-In for patients, SIP verification for doctors.

D. Cost Control
    - Use Gemini Flash for text/chatbot.
    - Use Gemini Pro only for EKG/audio.
    - Debounce Maps API calls for ambulance tracking.

E. Disclaimer & Safety
    - All AI results labeled as "screening/second opinion", not diagnosis.
    - UI must always recommend seeing a doctor if symptoms persist.

--- End of Technical Brief ---