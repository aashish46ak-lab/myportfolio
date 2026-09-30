export const site = {
  // Update this once the final domain is connected.
  url: (import.meta.env["VITE_SITE_URL"] as string | undefined) ?? "https://YOUR-DOMAIN.com",
  name: "Ashish Khadka",
  title: "Ashish Khadka | Full-Stack Developer & AI Enthusiast",
  role: "Full-Stack Developer & AI Enthusiast",
  description:
    "Ashish Khadka is a Full-Stack Developer & AI Enthusiast from Itahari, Nepal, building modern web applications and exploring AI-powered solutions.",
  phone: "9701100378",
  whatsapp: "https://wa.me/9779762380931",
  facebook: "https://www.facebook.com/ashish4537",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
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

export const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "REST APIs"] },
  { title: "Database / Cloud", items: ["Supabase", "Vercel"] },
  { title: "AI", items: ["AI API Integration", "AI-powered Web Applications"] },
  { title: "Tools", items: ["Git", "GitHub"] },
];

export const projects = [
  {
    name: "NepaRena",
    url: "https://neparena.xyz",
    description:
      "A tournament hosting and management web application built to make tournament organization and participation easier.",
    tags: ["Web App", "Tournaments", "Full-Stack"],
    initials: "NR",
  },
  {
    name: "ShareTemp",
    url: "https://sharetemp.vercel.app",
    description:
      "A temporary file sharing web application designed for quickly sharing files through temporary links.",
    tags: ["Web App", "File Sharing", "Vercel"],
    initials: "ST",
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
