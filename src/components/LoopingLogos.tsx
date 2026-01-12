import type { CSSProperties } from "react";

interface Logo {
  name: string;
  image: string;
  link: string;
}

interface LogoLoopProps {
  logos?: Logo[];
}

export default function LoopingLogos({ logos }: LogoLoopProps) {
  // Default logos if none provided
  const defaultLogos: Logo[] = [
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      link: "https://react.dev",
    },
    {
      name: "Vue",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      link: "https://vuejs.org",
    },
    {
      name: "Angular",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      link: "https://angular.io",
    },
    {
      name: "Svelte",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      link: "https://svelte.dev",
    },
    {
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      link: "https://nextjs.org",
    },
    {
      name: "Nuxt",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      link: "https://nuxt.com",
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      link: "https://www.typescriptlang.org",
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      link: "https://nodejs.org",
    },
  ];

  const logoList = logos || defaultLogos;

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.track} className="logo-track">
          {/* First set of logos */}
          {logoList.map((logo, i) => (
            <div key={`first-${i}`} style={styles.logoItem}>
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
                className="logo-link"
              >
                <img src={logo.image} alt={logo.name} style={styles.logo} />
              </a>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logoList.map((logo, i) => (
            <div key={`second-${i}`} style={styles.logoItem}>
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
                className="logo-link"
              >
                <img src={logo.image} alt={logo.name} style={styles.logo} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-track {
          animation: scroll 20s linear infinite;
          transition-duration: 0.3s;
        }
        
        .logo-track:hover {
          animation-play-state: paused;
        }

        .logo-link {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .logo-link:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    width: "100%",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },
  wrapper: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },
  track: {
    display: "flex",
    width: "fit-content",
    justifyContent: "space-evenly",
  },
  logoItem: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10vw",
  },
  link: {
    display: "block",
    textDecoration: "none",
  },
  logo: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
  },
};
