import { CheckCircle2, PhoneCall } from 'lucide-react';

export function FormSuccessOverlay() {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-white border-4 border-[var(--jerry-navy)] shadow-2xl p-6 sm:p-8">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--jerry-lime)]" />
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4">
          <div className="bg-[var(--jerry-lime)] rounded-full p-3 ring-4 ring-[var(--jerry-navy)]">
            <CheckCircle2 className="h-10 w-10 text-[var(--jerry-navy)]" strokeWidth={2.5} />
          </div>
        </div>
        <div className="inline-block bg-red-600 text-white font-black uppercase tracking-wider text-xs px-3 py-1.5 rounded mb-3">
          Request Completed
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[var(--jerry-navy)] leading-tight mb-4 uppercase">
          Jerry will reach out within 5 minutes
        </h3>
        <a
          href="tel:+14093511529"
          className="inline-flex items-center gap-3 bg-[var(--jerry-navy)] hover:bg-[var(--jerry-navy-light)] text-[var(--jerry-lime)] font-black text-2xl sm:text-3xl px-6 py-4 rounded-lg tracking-wide shadow-lg transition-colors border-2 border-[var(--jerry-lime)]"
        >
          <PhoneCall className="h-6 w-6" strokeWidth={2.5} />
          (409) 351-1529
        </a>
      </div>
    </div>
  );
}
