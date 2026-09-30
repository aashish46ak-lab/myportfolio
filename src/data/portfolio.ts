export const site = {
  // Set VITE_SITE_URL in your hosting env (Lovable / Vercel) to your real domain for perfect SEO.
  url: (import.meta.env["VITE_SITE_URL"] as string | undefined) ?? "https://YOUR-DOMAIN.com",
  name: "Ashish Khadka",
  givenName: "Ashish",
  familyName: "Khadka",
  alternateNames: ["Ashish", "aashish46ak", "Ashish Khadka Nepal"],
  title: "Ashish Khadka | Full-Stack Developer & AI Enthusiast from Nepal",
  role: "Full-Stack Developer & AI Enthusiast",
  description:
    "Ashish Khadka is a Full-Stack Developer & AI Enthusiast from Itahari, Nepal. BSc CSIT student building modern web applications, React/Next.js projects and AI-powered solutions including NepARENA.",
  shortDescription:
    "Official portfolio of Ashish Khadka — Full-Stack Developer & AI Enthusiast based in Itahari, Nepal.",
  phone: "9701100378",
  email: "aashish46ak@gmail.com",
  whatsapp: "https://wa.me/9779762380931",
  facebook: "https://www.facebook.com/ashish4537",
  github: "https://github.com/aashish46ak-lab",
  // Opens Gmail (or default mail app) with a pre-filled message
  hireEmail:
    "mailto:aashish46ak@gmail.com?subject=Hello%20Ashish%20%E2%80%94%20Project%20/%20Opportunity%20Inquiry&body=Hi%20Ashish%2C%0A%0AIt%27s%20%5BYour%20Name%5D%20here.%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20opportunity%20with%20you.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D",
  keywords:
    "Ashish Khadka, Ashish, Ashish Khadka portfolio, Ashish Khadka developer, Ashish Khadka Nepal, Ashish Khadka Itahari, aashish46ak, Full Stack Developer Nepal, Web Developer Itahari, BSc CSIT student Itahari, AI developer Nepal, React developer Nepal, NepARENA, ShareTemp, Ashish Khadka full stack",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    name: "NepARENA",
    url: "https://neparena.xyz",
    description:
      "Tournament hosting & management platform that makes organizing and joining online tournaments simple. Built end-to-end for real users in Nepal.",
    image: "neparena",
  },
  {
    name: "ShareTemp",
    url: "https://sharetemp.vercel.app",
    description:
      "Lightweight temporary file-sharing tool — upload once, share a short-lived link. Fast, clean, and practical for everyday use.",
    image: "sharetemp",
  },
];

export const services = [
  {
    title: "Full-Stack Web Apps",
    description:
      "From idea to deployed product — modern, responsive websites and web apps with clean code and solid UX.",
  },
  {
    title: "AI-Powered Features",
    description:
      "Practical AI integrations (APIs, chat, automation) that solve real problems without unnecessary complexity.",
  },
  {
    title: "UI / Frontend Development",
    description:
      "Polished, mobile-friendly interfaces using React, Tailwind and modern design systems.",
  },
  {
    title: "Launch & Support",
    description:
      "Deployment, basic SEO, performance and ongoing improvements so your product stays fast and reliable.",
  },
];

export const education = [
  {
    degree: "BSc. CSIT",
    school: "Sushma Godawari College, Itahari",
    status: "Currently Studying",
  },
  {
    degree: "+2 / Higher Secondary Education",
    school: "Itahari Namuna College",
    status: "Completed",
  },
];
