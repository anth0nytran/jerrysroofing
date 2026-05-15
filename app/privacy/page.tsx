import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../config';

export const metadata: Metadata = {
  title: "Privacy Policy | Jerry's Roofing",
  description:
    "Privacy policy for Jerry's Roofing. How we collect, use, and protect the information you share when you request a roof inspection or estimate.",
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

const shell = 'mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-10';

export default function PrivacyPage() {
  const lastUpdated = 'May 14, 2026';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${siteConfig.domain}/privacy` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-[var(--jerry-navy-deep)] py-12">
        <div className={shell}>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-[var(--jerry-lime)]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white/70">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/60">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className={shell}>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              Jerry&apos;s Roofing (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates roofingbyjerry.com. This
              page explains what information we collect, why we collect it, and how we use and protect it.
            </p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">What we collect</h2>
            <p>When you request an inspection or estimate through our website, we collect the information
              you submit on the form: your name, phone number, address, zip code, service needed, and any
              message you include. We also log basic technical information about your visit, such as your
              IP address, browser type, and the pages you viewed, through standard analytics tools.
            </p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">How we use it</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inspection or estimate request.</li>
              <li>To schedule, perform, and follow up on roofing work.</li>
              <li>To send you a written estimate, inspection report, or invoice.</li>
              <li>To improve the website and understand which pages are useful.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Who we share it with</h2>
            <p>We do not sell your information. We share it only with the vendors that help us run the
              business, such as our email delivery provider (Resend) and analytics tools (Google Analytics).
              If you file an insurance claim, we may share project details with your insurance carrier at
              your request. We comply with valid legal requests when required.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Cookies and analytics</h2>
            <p>We use cookies and similar technologies to understand site usage. You can disable cookies in
              your browser settings; the site will still work, but some features may behave differently.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">How long we keep it</h2>
            <p>We keep inspection and estimate records for as long as we are actively working with you, and
              for a reasonable period after the job is complete in case of warranty questions or insurance
              follow-up. You can ask us to delete your information at any time by calling {siteConfig.phone}.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Your choices</h2>
            <p>You can opt out of marketing communication at any time by replying STOP to a text, unsubscribing
              from an email, or calling us. You can also request a copy of the information we have about you.</p>

            <h2 id="sms" className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">SMS / Text Messaging</h2>

            <p><strong>Message Types:</strong> All SMS messages sent by Jerry&apos;s Roofing are
              service-related and informational only. Messages may include lead submission confirmations,
              missed call text-backs, appointment follow-ups, project status updates, after-hours auto-replies,
              and one-time review requests after a completed service. We do not send promotional or marketing
              SMS messages.</p>

            <p className="mt-4"><strong>How You Opt In:</strong> Our website includes a contact/quote form
              with an optional phone number field and an unchecked SMS consent checkbox (not pre-checked).
              You must actively check the box to opt in. The checkbox reads:</p>

            <p className="mt-2 italic text-slate-600 border-l-4 border-[var(--jerry-lime)] pl-4 py-1">
              &ldquo;I consent to receive SMS notifications, alerts &amp; occasional service messages from
              Jerry&apos;s Roofing. Message frequency may vary (approximately 2-6 messages per month).
              Message &amp; data rates may apply. Text HELP for help. Reply STOP to unsubscribe. Privacy
              Policy &amp; Terms. Consent is not required to receive service.&rdquo;
            </p>

            <p className="mt-4">Consent is voluntary and is not required to submit the form or receive
              service. We capture and store proof of opt-in including timestamp, source page URL, phone
              number, and checkbox state.</p>

            <p className="mt-4"><strong>Message Frequency:</strong> Message frequency varies based on
              activity. Typically 2&ndash;6 messages per month per customer interaction.</p>

            <p className="mt-4"><strong>Message and Data Rates:</strong> Standard message and data rates from
              your mobile carrier may apply. We are not responsible for carrier charges. Major US carriers
              are supported including AT&amp;T, T-Mobile, Verizon, and Sprint.</p>

            <p className="mt-4"><strong>Opt-Out:</strong> Reply <strong>STOP</strong> to any message to
              immediately unsubscribe. You will receive a one-time confirmation and no further messages will
              be sent. To re-subscribe, reply <strong>START</strong>.</p>

            <p className="mt-4"><strong>Help:</strong> Reply <strong>HELP</strong> to any message for
              assistance, or email{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--jerry-navy)] underline">
                {siteConfig.email}
              </a>.</p>

            <p className="mt-4"><strong>SMS Data and Privacy:</strong> We do not sell, rent, or share your
              mobile phone number or SMS consent data with any third parties for their marketing or
              promotional purposes. SMS consent and opt-in data is used solely for sending the service
              messages described in this section. Opt-in records (timestamp, source URL, phone number,
              consent state) are retained for compliance purposes.</p>

            <p className="mt-4"><strong>Third-Party Data Sharing Exclusion:</strong> No mobile information
              will be shared with third parties or affiliates for marketing or promotional purposes.
              Information sharing to subcontractors in support services, such as customer service, is
              permitted. All the above categories exclude text messaging originator opt-in data and consent;
              this information will not be shared with any third parties, excluding aggregators and providers
              of the Text Message services.</p>

            <p className="mt-4"><strong>Carriers:</strong> Carriers are not liable for delayed or undelivered
              messages.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Security</h2>
            <p>We take reasonable steps to protect the information you share, including HTTPS encryption and
              secure third-party services. No online transmission is completely secure, but we work to keep
              your information safe.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Contact</h2>
            <p>Questions about this policy? Call Jerry directly at {siteConfig.phone} or email{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--jerry-navy)] underline">
                {siteConfig.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
