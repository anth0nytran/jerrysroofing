import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../config';

export const metadata: Metadata = {
  title: "Terms of Service | Jerry's Roofing",
  description:
    "Terms of service for Jerry's Roofing website and estimate process. The ground rules for using roofingbyjerry.com and requesting our services.",
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

const shell = 'mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-10';

export default function TermsPage() {
  const lastUpdated = 'May 14, 2026';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: `${siteConfig.domain}/terms` },
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
              <li className="font-semibold text-white/70">Terms of Service</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em]">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-white/60">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className={shell}>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>These terms cover your use of roofingbyjerry.com and the inspection and estimate
              process. Signed contracts for actual roofing work are governed by a separate written
              agreement provided before work begins.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Using the website</h2>
            <p>You may use this site to learn about our services, read blog posts, and request an
              inspection or estimate. Do not use the site to distribute spam, scrape content at scale,
              or interfere with its operation.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Estimates and inspections</h2>
            <p>Inspections are free with no obligation. Written estimates provided after an inspection are
              valid for 30 days from the date issued unless specified otherwise. Pricing reflects market
              conditions at the time of the estimate and may change if you wait past the validity window.
              All roofing work begins only after a signed written agreement.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Insurance claim work</h2>
            <p>We assist homeowners with insurance claims for hail, wind, and storm damage. We are not a
              public adjuster and do not charge a fee for meeting with your adjuster. Final claim decisions
              rest with your insurance carrier. We document damage honestly and will not push a claim we
              do not believe is supported.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Website content</h2>
            <p>Text, photos, blog posts, and other content on this site are owned by Jerry&apos;s Roofing
              or used with permission. You may not reproduce substantial portions without written consent.
              Quoting a sentence or two with attribution and a link back is fine.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Reviews and testimonials</h2>
            <p>Reviews displayed on this site come from real customers. Results described by any individual
              customer are their own and do not guarantee a specific outcome for you. Your roof, your
              insurance carrier, and your local weather history are different from theirs.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Warranties</h2>
            <p>Warranty terms for roofing work are specified in the written agreement for each job and
              reflect the manufacturer&apos;s warranty on materials plus our workmanship warranty. Nothing
              on this website creates an additional warranty beyond what is in that signed agreement.</p>

            <h2 id="sms" className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">SMS / Text Messaging Terms</h2>

            <p><strong>Program Name:</strong> Jerry&apos;s Roofing SMS Program.</p>

            <p className="mt-4"><strong>Program Description:</strong> When you submit a contact or quote
              request form on our website and opt in to SMS by checking the consent checkbox, you may receive
              the following types of service-related text messages:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Lead submission and quote request confirmations</li>
              <li>Appointment coordination and follow-ups</li>
              <li>Missed call text-back notifications</li>
              <li>Project status and schedule updates</li>
              <li>After-hours auto-reply messages</li>
              <li>One-time review requests after a completed service</li>
            </ul>

            <p className="mt-4">You can cancel the SMS service at any time. Simply text
              <strong> &ldquo;STOP&rdquo;</strong> to the number you received messages from. Upon sending
              &ldquo;STOP,&rdquo; we will confirm your unsubscribe status via SMS. Following this
              confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did
              initially, and we will resume sending SMS messages to you.</p>

            <p className="mt-4">If you experience issues with the messaging program, reply with the keyword
              <strong> HELP </strong> for more assistance, or reach out directly to{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--jerry-navy)] underline">
                {siteConfig.email}
              </a>.</p>

            <p className="mt-4"><strong>Message Frequency:</strong> Message frequency varies. Approximately
              2&ndash;6 messages per month depending on customer activity.</p>

            <p className="mt-4">As always, message and data rates may apply for messages sent to you from us
              and to us from you. For questions about your text plan or data plan, contact your wireless
              provider.</p>

            <p className="mt-4"><strong>Carrier Disclaimer:</strong> Carriers are not liable for delayed or
              undelivered messages.</p>

            <p className="mt-4"><strong>Consent:</strong> Consent to receive SMS messages is voluntary and is
              not a condition of any purchase or service. By checking the SMS consent box on our website
              form, you confirm that you are the subscriber or authorized user of the phone number provided
              and consent to receive SMS messages from Jerry&apos;s Roofing.</p>

            <p className="mt-4"><strong>Age Restriction:</strong> You must be at least 18 years of age to
              submit a form, opt in to SMS messages, or otherwise use the services offered through this
              website. By submitting the estimate form and/or opting in to SMS, you affirmatively represent
              that you are 18 years of age or older. We do not knowingly collect information from or send
              messages to individuals under 18. If we learn that we have collected information from a person
              under 18, we will delete that information and unsubscribe the associated phone number.</p>

            <p className="mt-4">For privacy-related inquiries, please refer to our{' '}
              <Link href="/privacy" className="text-[var(--jerry-navy)] underline">Privacy Policy</Link>.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Limitation of liability</h2>
            <p>We do our best to keep the information on this site accurate, but we do not guarantee that
              it is always current or error-free. Pricing examples are illustrative. Real estimates come
              from on-site inspections.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Changes to these terms</h2>
            <p>We may update these terms from time to time. The &quot;last updated&quot; date at the top
              tells you when they were last changed. Continued use of the site after an update means you
              accept the updated terms.</p>

            <h2 className="text-2xl font-extrabold text-[var(--jerry-navy)] mt-8">Contact</h2>
            <p>Questions? Call Jerry at {siteConfig.phone} or email{' '}
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
