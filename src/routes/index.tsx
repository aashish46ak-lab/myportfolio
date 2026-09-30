import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { site } from "@/data/portfolio";

const ogImage = `${site.url}/ashish-hero.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { name: "author", content: site.name },
      { name: "keywords", content: site.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "bingbot", content: "index, follow" },
      { name: "application-name", content: site.name },
      { name: "apple-mobile-web-app-title", content: site.name },
      { name: "theme-color", content: "#F7F2E9" },
      { name: "msapplication-TileColor", content: "#F7F2E9" },
      { name: "geo.region", content: "NP-1" },
      { name: "geo.placename", content: "Itahari, Nepal" },
      { name: "ICBM", content: "26.6667, 87.2833" },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: site.name },
      { property: "og:url", content: site.url },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: "Ashish Khadka - Full-Stack Developer available for hire in Nepal" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "1600" },
      { property: "profile:first_name", content: site.givenName },
      { property: "profile:last_name", content: site.familyName },
      { property: "profile:username", content: "aashish46ak" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.title },
      { name: "twitter:description", content: site.description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "Ashish Khadka - Full-Stack Developer from Nepal" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "referrer", content: "origin-when-cross-origin" },
    ],
    links: [
      { rel: "canonical", href: site.url },
      { rel: "alternate", hrefLang: "en", href: site.url },
      { rel: "author", href: site.url },
    ],
  }),
  component: Index,
});

function Index() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    givenName: site.givenName,
    familyName: site.familyName,
    alternateName: site.alternateNames,
    description: site.description,
    jobTitle: site.role,
    url: site.url,
    image: {
      "@type": "ImageObject",
      url: ogImage,
      caption: "Ashish Khadka - Full-Stack Developer & AI Enthusiast",
    },
    email: site.email,
    telephone: site.phone,
    sameAs: [site.facebook, site.github, site.whatsapp].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Itahari",
      addressRegion: "Koshi",
      addressCountry: "NP",
    },
    homeLocation: {
      "@type": "Place",
      name: "Diktel, Khotang, Nepal",
    },
    nationality: {
      "@type": "Country",
      name: "Nepal",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Sushma Godawari College, Itahari",
        address: { "@type": "PostalAddress", addressLocality: "Itahari", addressCountry: "NP" },
      },
      {
        "@type": "EducationalOrganization",
        name: "Itahari Namuna College",
        address: { "@type": "PostalAddress", addressLocality: "Itahari", addressCountry: "NP" },
      },
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "AI API Integration",
      "JavaScript",
      "TypeScript",
      "Web Design",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Full-Stack Web Development & AI Solutions",
        description:
          "Hire Ashish Khadka for custom web applications, AI-powered features, React/Next.js frontends and full-stack development. Available for freelance and full-time work in Nepal and remote.",
      },
      availability: "https://schema.org/InStock",
      areaServed: ["Nepal", "Remote"],
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/#profilepage`,
    url: site.url,
    name: site.title,
    description: site.shortDescription,
    mainEntity: { "@id": `${site.url}/#person` },
    about: { "@id": `${site.url}/#person` },
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.shortDescription,
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: "Ashish Khadka Portfolio",
    alternateName: ["Ashish Portfolio", "Ashish Khadka Official Website"],
    description: site.shortDescription,
    publisher: { "@id": `${site.url}/#person` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const structuredData = [personSchema, profilePageSchema, websiteSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
