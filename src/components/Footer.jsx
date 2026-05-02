export default function Footer() {
  return (
    <footer className="mt-8 w-full max-w-2xl mx-auto px-4 pb-10">
      {/* באנר רחב, נמוך עם גרדיאנט */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl p-4 shadow-lg border border-blue-500/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-2">
          {/* כותרת קטנה ובולטת */}
          <div className="flex-shrink-0">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">
              Tailor-Made
            </h4>
          </div>

          {/* קו מפריד דק (מופיע רק בדסקטופ) */}
          <div className="hidden md:block w-px h-6 bg-blue-400/50" />

          {/* טקסט ממוקד וקצר */}
          <p className="text-blue-50 text-xs md:text-sm text-center md:text-left leading-tight font-medium max-w-md">
            This is a technical demo. Every flow, logic, and design element can
            be fully customized to fit your business needs.
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em] opacity-50">
        © AmirTech 2026
      </p>
    </footer>
  );
}
