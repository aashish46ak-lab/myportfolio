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
import heroImage from "@/assets/ashish-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { name: "author", content: site.name },
      { name: "keywords", content: "Ashish Khadka, Ashish Khadka portfolio, Full Stack Developer Nepal, Web Developer Itahari, BSc CSIT student Itahari, AI developer Nepal" },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: site.name },
      { property: "og:url", content: site.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.title },
      { name: "twitter:description", content: site.description },
      { name: "theme-color", content: "#F7F2E9" },
    ],
    links: [{ rel: "canonical", href: site.url }],
  }),
  component: Index,
});

function Index() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: site.url,
    name: site.title,
    mainEntity: {
      "@type": "Person",
      name: "Ashish Khadka",
      description: "Full-Stack Developer & AI Enthusiast based in Itahari, Nepal.",
      jobTitle: "Full-Stack Developer & AI Enthusiast",
      url: site.url,
      image: `${site.url}${heroImage.url}`,
      telephone: site.phone,
      sameAs: [site.facebook],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Itahari",
        addressCountry: "NP",
      },
      homeLocation: {
        "@type": "Place",
        name: "Diktel, Khotang, Nepal",
      },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Sushma Godawari College, Itahari" },
        { "@type": "EducationalOrganization", name: "Itahari Namuna College" },
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "AI API Integration",
      ],
    },
  };

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
