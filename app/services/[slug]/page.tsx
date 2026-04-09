import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig, serviceData } from '../../config';
import ServicePageClient from './ServicePageClient';

export function generateStaticParams() {
  return serviceData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} in Katy, TX | Jerry's Roofing`,
    description: `${service.longDescription.slice(0, 155)}...`,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Jerry's Roofing — Katy TX`,
      description: service.summary,
      url: `https://roofingbyjerry.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) notFound();

  const otherServices = serviceData.filter((s) => s.slug !== slug);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.domain}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${siteConfig.domain}/services/${service.slug}` },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    provider: {
      '@type': 'RoofingContractor',
      name: "Jerry's Roofing",
      telephone: siteConfig.cleanPhone,
      areaServed: siteConfig.allServiceAreas.map((a) => ({
        '@type': 'City',
        name: a.replace(', TX', ''),
      })),
    },
    areaServed: {
      '@type': 'City',
      name: 'Katy',
      containedInPlace: { '@type': 'State', name: 'Texas' },
    },
  };

  const faqJsonLd = service.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <ServicePageClient service={service} otherServices={otherServices} />
    </>
  );
}
