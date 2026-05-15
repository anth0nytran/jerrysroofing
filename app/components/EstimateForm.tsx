'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, User, MapPin, ClipboardList, Lock, Mail, Calendar } from 'lucide-react';
import { siteConfig } from '../config';
import { trackMarketingEvent } from '../lib/analytics';
import { Stars } from './Stars';
import { FormSuccessOverlay } from './FormSuccessOverlay';

export function EstimateForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
 const [formError, setFormError] = useState('');
 const [formTimestamp] = useState(() => Date.now().toString());
 const [phoneValue, setPhoneValue] = useState('');
 const [smsConsent, setSmsConsent] = useState(false);
 const [ageConfirm, setAgeConfirm] = useState(false);

 const formatPhone = (v: string) => {
 const d = v.replace(/\D/g, '').slice(0, 10);
 if (!d.length) return '';
 if (d.length <= 3) return `(${d}`;
 if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
 return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
 };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setFormError('');
 if (!ageConfirm) {
 setFormStatus('error');
 setFormError('Please confirm you are at least 18 years old.');
 return;
 }
 setFormStatus('sending');
 const form = e.currentTarget;
 const fd = new FormData(form);
 fd.set('page', window.location.href);
 fd.set('sms_consent', smsConsent ? 'yes' : 'no');
 fd.set('sms_consent_text', smsConsent
   ? `I consent to receive SMS notifications, alerts & occasional service messages from ${siteConfig.businessName}. Message frequency may vary (approximately 2-6 messages per month). Message & data rates may apply. Text HELP for help. Reply STOP to unsubscribe.`
   : '');
 fd.set('age_confirmed', 'yes');
 fd.set('consent_timestamp', new Date().toISOString());
 if (String(fd.get('website') || '').trim()) { form.reset(); setPhoneValue(''); setSmsConsent(false); setAgeConfirm(false); setFormStatus('success'); return; }
 try {
 const res = await fetch('/api/lead', { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
 const data = await res.json().catch(() => null);
 if (!res.ok || !data?.ok) { setFormStatus('error'); setFormError(data?.error || 'Something went wrong.'); return; }
 trackMarketingEvent('Lead Form Success', {
 form_id: 'estimate_form',
 service: String(fd.get('service') || ''),
 zip_code: String(fd.get('zipCode') || ''),
 });
 form.reset(); setPhoneValue(''); setSmsConsent(false); setAgeConfirm(false); setFormStatus('success');
 } catch { setFormStatus('error'); setFormError('Something went wrong. Please try again.'); }
 };

 const isDark = variant === 'dark';

 return (
 <div className="relative">
 {formStatus === 'success' && <FormSuccessOverlay />}
 <form id="estimate-form" className="grid gap-4 sm:gap-4.5" action="/api/lead" method="POST" onSubmit={handleSubmit}>
 <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
 <input type="hidden" name="_ts" value={formTimestamp} />
 <input type="hidden" name="page" value="" />

 <div className="grid gap-4 sm:gap-4.5 sm:grid-cols-2">
 <div>
 <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-slate-700'}`}>Full Name <span className="text-red-500">*</span></label>
 <div className="relative">
 <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
 <input required name="name" type="text" placeholder="John Doe" autoComplete="name" pattern="[A-Za-z\s\-']{2,50}" className="w-full border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 shadow-sm" />
 </div>
 </div>
 <div>
 <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-slate-700'}`}>Phone Number <span className={`font-normal normal-case tracking-normal ${isDark ? 'text-white/30' : 'text-slate-400'}`}>(Optional)</span></label>
 <div className="relative">
 <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
 <input name="phone" type="tel" placeholder="(713) 555-0123" autoComplete="tel" value={phoneValue} onChange={(e) => setPhoneValue(formatPhone(e.target.value))} pattern="\(\d{3}\) \d{3}-\d{4}" className="w-full border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 shadow-sm" />
 </div>
 </div>
 </div>

 <div>
 <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-slate-700'}`}>Email <span className="text-red-500">*</span></label>
 <div className="relative">
 <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
 <input required name="email" type="email" placeholder="you@example.com" autoComplete="email" className="w-full border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 shadow-sm" />
 </div>
 </div>

 <div className="grid gap-4 sm:gap-4.5 sm:grid-cols-2">
 <div>
 <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-slate-700'}`}>Property Address <span className="text-red-500">*</span></label>
 <div className="relative">
 <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
 <input required name="address" type="text" placeholder="123 Main St" autoComplete="street-address" className="w-full border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 shadow-sm" />
 </div>
 </div>
 <div>
 <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-slate-700'}`}>ZIP Code <span className="text-red-500">*</span></label>
 <input required name="zipCode" type="text" inputMode="numeric" placeholder="77002" autoComplete="postal-code" pattern="\d{5}" className="w-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 shadow-sm" />
 </div>
 </div>

 <div className="grid gap-4 sm:gap-4.5 sm:grid-cols-2">
 <div>
 <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-slate-700'}`}>Service Needed <span className="text-red-500">*</span></label>
 <div className="relative">
 <ClipboardList className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
 <select required name="service" defaultValue="" className="w-full border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 shadow-sm appearance-none">
 <option value="" disabled>Select a service...</option>
 {[siteConfig.primaryService, ...siteConfig.services].map((s) => <option key={s} value={s}>{s}</option>)}
 </select>
 </div>
 </div>
 <div>
 <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-slate-700'}`}>Timeline <span className="text-red-500">*</span></label>
 <div className="relative">
 <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
 <select required name="timeline" defaultValue="" className="w-full border border-slate-300 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none transition-all focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 shadow-sm appearance-none">
 <option value="" disabled>When do you need this?</option>
 <option value="ASAP (active leak / emergency)">ASAP &mdash; active leak / emergency</option>
 <option value="Within 2 weeks">Within 2 weeks</option>
 <option value="Within 1-3 months">Within 1-3 months</option>
 <option value="Just exploring / no rush">Just exploring &mdash; no rush</option>
 </select>
 </div>
 </div>
 </div>

 <div>
 <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-slate-700'}`}>Project Details <span className={`font-normal normal-case tracking-normal ${isDark ? 'text-white/30' : 'text-slate-400'}`}>(Optional)</span></label>
 <textarea name="message" rows={3} maxLength={5000} placeholder="Describe the project or any concerns..." className="w-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[var(--jerry-navy)] focus:ring-2 focus:ring-[var(--jerry-navy)]/20 shadow-sm min-h-[80px] resize-y" />
 </div>

 {/* A2P Consent Checkboxes */}
 <div className="space-y-3 pt-1">
 <label className="flex items-start gap-3 cursor-pointer group">
 <input
 type="checkbox"
 name="sms_consent_checkbox"
 checked={smsConsent}
 onChange={(e) => setSmsConsent(e.target.checked)}
 className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[var(--jerry-navy)] rounded border-slate-300"
 />
 <span className={`text-[0.72rem] leading-snug ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
 I consent to receive SMS notifications, alerts &amp; occasional service messages from {siteConfig.businessName}. Message frequency may vary (approximately 2-6 messages per month). Message &amp; data rates may apply. Text HELP for help. Reply STOP to unsubscribe. <Link href="/privacy" className="underline font-semibold hover:text-[var(--jerry-navy)]">Privacy Policy</Link> &amp; <Link href="/terms" className="underline font-semibold hover:text-[var(--jerry-navy)]">Terms</Link>. Consent is not required to receive service.
 </span>
 </label>
 <label className="flex items-start gap-3 cursor-pointer group">
 <input
 type="checkbox"
 name="age_confirmed_checkbox"
 required
 checked={ageConfirm}
 onChange={(e) => setAgeConfirm(e.target.checked)}
 className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[var(--jerry-navy)] rounded border-slate-300"
 />
 <span className={`text-[0.72rem] leading-snug ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
 I confirm I am at least 18 years old. <span className="text-red-500">*</span>
 </span>
 </label>
 </div>

 <div className="pt-2">
 <button type="submit" disabled={formStatus === 'sending'} className="relative w-full overflow-hidden bg-[var(--jerry-navy)] py-4 text-[0.85rem] font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:bg-[var(--jerry-navy-light)] active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100 group">
 <span className="relative z-10 flex items-center justify-center gap-2">
 {formStatus === 'sending' ? 'Processing...' : 'Request a Quote'}
 {formStatus !== 'sending' && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
 </span>
 </button>

 <p className={`mt-3 text-center text-[0.65rem] leading-relaxed font-medium px-2 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
 No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. See our <Link href="/privacy" className="underline">Privacy Policy</Link> for details.
 </p>

 <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-emerald-700/80">
 <Lock className="h-3 w-3" />
 <span>100% Secure &amp; Confidential</span>
 </div>
 </div>

 {formStatus === 'error' && <div className=" border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 font-medium">{formError}</div>}
 </form>

 <div className="mt-5 flex items-center justify-center gap-3 text-xs text-slate-400">
 <Stars count={5} size="h-3 w-3" />
 <span className="font-bold text-slate-600">{siteConfig.rating.toFixed(1)}</span>
 <span>|</span>
 <span>5-Star Rated</span>
 </div>
 </div>
 );
}
