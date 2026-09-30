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
    "Ashish Khadka (Ashish) is a Full-Stack Developer & AI Enthusiast from Itahari, Nepal. BSc CSIT student building modern web apps, AI-powered solutions, NepARENA tournament platform and more. Hire Ashish Khadka for web development.",
  shortDescription:
    "Official portfolio of Ashish Khadka — Full-Stack Developer & AI Enthusiast based in Itahari, Nepal.",
  phone: "9701100378",
  email: "aashish46ak@gmail.com",
  whatsapp: "https://wa.me/9779762380931",
  facebook: "https://www.facebook.com/ashish4537",
  github: "https://github.com/aashish46ak-lab",
  keywords:
    "Ashish Khadka, Ashish, Ashish Khadka portfolio, Ashish Khadka developer, Ashish Khadka Nepal, Ashish Khadka Itahari, aashish46ak, Full Stack Developer Nepal, Web Developer Itahari, BSc CSIT student, AI developer Nepal, NepARENA, ShareTemp, React developer Nepal, Next.js developer",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutFacts = [
  { label: "Role", value: "Full-Stack Developer & AI Enthusiast" },
  { label: "Education", value: "BSc. CSIT" },
  { label: "Based In", value: "Itahari, Nepal" },
  { label: "Hometown", value: "Diktel, Khotang" },
];

export const projects = [
  {
    name: "NepARENA",
    url: "https://neparena.xyz",
    description:
      "A tournament hosting and management platform built by Ashish Khadka to make tournament organization and participation easier.",
    image: "neparena",
  },
  {
    name: "ShareTemp",
    url: "https://sharetemp.vercel.app",
    description:
      "A temporary file sharing platform designed by Ashish for quickly sharing files through temporary links.",
    image: null,
  },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building responsive and functional web applications across frontend and backend.",
  },
  {
    title: "AI-Powered Applications",
    description: "Exploring practical ways to integrate AI capabilities into modern web applications.",
  },
  {
    title: "Modern UI Development",
    description: "Creating clean, responsive and user-friendly interfaces.",
  },
  {
    title: "Deployment & Integration",
    description: "Deploying modern web applications and connecting them with APIs and cloud services.",
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
