"use client";
import { useState } from "react";

const SketchyBox = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-white dark:bg-gray-900 transform rotate-1 border-2 border-gray-800 dark:border-gray-200 rounded-none" />
    <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-800 dark:border-gray-200 p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
      {children}
    </div>
  </div>
);

const SketchyButton = ({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  const ButtonContent = () => (
    <div className={`relative group cursor-pointer ${className}`}>
      <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 transform rotate-2 rounded-none transition-transform group-hover:rotate-3" />
      <div className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-2 border-gray-800 dark:border-gray-200 px-6 py-3 transform -rotate-1 group-hover:rotate-0 transition-all duration-300 font-medium">
        {children}
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <ButtonContent />
    </a>
  ) : (
    <ButtonContent />
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const skills = [
    {
      category: "Web Development",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "PostgreSQL",
      ],
    },
    {
      category: "Web3 & Blockchain",
      items: [
        "Solidity",
        "Ethereum",
        "Web3.js",
        "Ethers.js",
        "Smart Contracts",
        "DeFi",
      ],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Tailwind CSS", "GraphQL", "IPFS"],
    },
  ];

  const projects = [
    {
      title: "DeFi Trading Platform",
      description:
        "Built a decentralized trading platform with smart contracts and React frontend",
      tech: ["Solidity", "React", "Web3.js", "Node.js"],
      link: "#",
    },
    {
      title: "NFT Marketplace",
      description:
        "Full-stack NFT marketplace with minting, trading, and auction features",
      tech: ["Next.js", "Ethereum", "IPFS", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Portfolio Tracker",
      description:
        "Real-time crypto portfolio tracker with DeFi protocol integration",
      tech: ["TypeScript", "Python", "APIs", "Charts.js"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-mono">
      {/* Hand-drawn style background lines */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 1200 800">
          <path
            d="M0,100 Q300,120 600,100 T1200,110"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-600"
          />
          <path
            d="M0,300 Q400,280 800,300 T1200,290"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-600"
          />
          <path
            d="M0,500 Q500,520 1000,500 T1200,510"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-600"
          />
          <path
            d="M0,700 Q600,680 1200,700"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-600"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <header className="mb-16">
          <SketchyBox className="mb-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4 transform -rotate-1">
                Hey, I'm Runsha!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 transform rotate-1">
                Web Developer & Web3 Enthusiast
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <SketchyButton href="mailto:hello@example.com">
                  📧 Get in Touch
                </SketchyButton>
                <SketchyButton href="https://github.com">
                  🐙 GitHub
                </SketchyButton>
              </div>
            </div>
          </SketchyBox>
        </header>

        {/* Navigation */}
        <nav className="mb-12">
          <div className="flex justify-center space-x-4 flex-wrap">
            {["about", "skills", "projects"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`relative group ${
                  activeSection === section ? "z-10" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 transform rotate-1 ${
                    activeSection === section
                      ? "bg-gray-800 dark:bg-gray-200"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                />
                <div
                  className={`relative px-6 py-3 border-2 border-gray-800 dark:border-gray-200 transform -rotate-1 group-hover:rotate-0 transition-all duration-300 ${
                    activeSection === section
                      ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900"
                      : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        {activeSection === "about" && (
          <section className="grid md:grid-cols-2 gap-8">
            <SketchyBox>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a passionate developer who bridges the gap between
                traditional web development and the decentralized future. With
                5+ years in web development and 3+ years diving deep into Web3.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I love building user-friendly applications that make complex
                blockchain technology accessible to everyone. When I'm not
                coding, you'll find me exploring new DeFi protocols or sketching
                UI concepts.
              </p>
            </SketchyBox>

            <SketchyBox className="transform rotate-1">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                What I Do
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌐</span>
                  <span>Build responsive, modern web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">⛓️</span>
                  <span>Develop smart contracts and DApps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🎨</span>
                  <span>Create intuitive user experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>Optimize performance and scalability</span>
                </li>
              </ul>
            </SketchyBox>
          </section>
        )}

        {activeSection === "skills" && (
          <section className="space-y-8">
            {skills.map((skillGroup, index) => (
              <SketchyBox
                key={skillGroup.category}
                className={index % 2 === 0 ? "" : "transform rotate-1"}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="relative group cursor-default">
                      <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 transform rotate-1 group-hover:rotate-2 transition-transform" />
                      <div className="relative bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-200 px-3 py-1 text-sm transform -rotate-1 group-hover:rotate-0 transition-transform">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </SketchyBox>
            ))}
          </section>
        )}

        {activeSection === "projects" && (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <SketchyBox
                key={project.title}
                className={index % 3 === 1 ? "transform rotate-1" : ""}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <SketchyButton href={project.link} className="w-full">
                  View Project →
                </SketchyButton>
              </SketchyBox>
            ))}
          </section>
        )}

        {/* Footer */}
        <footer className="mt-16">
          <SketchyBox className="text-center transform rotate-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Whether it's a traditional web app or the next big DeFi protocol,
              I'm here to help.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <SketchyButton href="mailto:hello@example.com">
                📧 Email Me
              </SketchyButton>
              <SketchyButton href="https://linkedin.com">
                💼 LinkedIn
              </SketchyButton>
              <SketchyButton href="https://twitter.com">
                🐦 Twitter
              </SketchyButton>
            </div>
          </SketchyBox>
        </footer>
      </div>
    </div>
  );
}
