import type { CSSProperties } from "react";

import bola from "@assets/images/clientlogos/bola.png";
import bolanotext from "@assets/images/clientlogos/bolanotext.png";
import bolatext from "@assets/images/clientlogos/bolatext.png";
import canarychecker from "@assets/images/clientlogos/canarychecker.svg";
import hiredly from "@assets/images/clientlogos/hiredly.svg";
import missioncontrol from "@assets/images/clientlogos/missioncontrol.svg";
import mopress from "@assets/images/clientlogos/mopress.png";
import pce from "@assets/images/clientlogos/pce.svg";
import sunfresh from "@assets/images/clientlogos/sunfresh.png";
import ttn from "@assets/images/clientlogos/ttn.svg";
import watsons from "@assets/images/clientlogos/watsons.svg";
import ijm from "@assets/images/clientlogos/ijm2.png";
import payd from "@assets/images/clientlogos/paydibs.webp";
import accendo from "@assets/images/clientlogos/accendo.webp";

interface Logo {
  name: string;
  image: string;
  link?: string;
}

interface LogoLoopProps {
  logos?: Logo[];
}

export default function LoopingLogos({ logos }: LogoLoopProps) {
  // Default logos if none provided
  const defaultLogos: Logo[] = [
    {
      name: "Bola.TV",
      image: bolatext.src,
    },
    {
      name: "Hiredly",
      image: hiredly.src,
      link: "https://hiredly.com/",
    },
    {
      name: "Flanksource",
      image: missioncontrol.src,
      link: "https://flanksource.com/",
    },
    {
      name: "Mopress",
      image: mopress.src,
      link: "https://mopress.io/",
    },
    {
      name: "Progress Centre Engineering",
      image: pce.src,
    },
    {
      name: "Sunfresh",
      image: sunfresh.src,
    },
    {
      name: "TanTanNews",
      image: ttn.src,
      link: "https://tantannews.com/",
    },
    {
      name: "Watsons",
      image: watsons.src,
      link: "https://www.watsons.com.my/",
    },
    {
      name: "IJM Corporation Berhad",
      image: ijm.src,
      link: "https://www.ijm.com/",
    },
    {
      name: "Paydibs",
      image: payd.src,
      link: "https://paydibs.com/",
    },
    {
      name: "Accendo Technologies",
      image: accendo.src,
      link: "https://accendotechnologies.com/",
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
                style={{
                  ...styles.link,
                  cursor: logo.link ? "pointer" : "auto",
                }}
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
                style={{
                  ...styles.link,
                  cursor: logo.link ? "pointer" : "auto",
                }}
                className="logo-link"
              >
                <img src={logo.image} alt={logo.name} style={styles.logo} />
              </a>
            </div>
          ))}
          {/* another set set for seamless loop */}
          {logoList.map((logo, i) => (
            <div key={`third-${i}`} style={styles.logoItem}>
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.link,
                  cursor: logo.link ? "pointer" : "auto",
                }}
                className="logo-link"
              >
                <img src={logo.image} alt={logo.name} style={styles.logo} />
              </a>
            </div>
          ))}
          {/* another set set for seamless loop */}
          {logoList.map((logo, i) => (
            <div key={`fourth-${i}`} style={styles.logoItem}>
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.link,
                  cursor: logo.link ? "pointer" : "auto",
                }}
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
            transform: translateX(-25%);
          }
        }
        
        .logo-track {
          animation: scroll 25s linear infinite;
          transition-duration: 0.3s;
        }
        
        .logo-track:hover {
          // animation-play-state: paused;
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
    marginRight: "8vw",
  },
  link: {
    display: "block",
    textDecoration: "none",
  },
  logo: {
    height: "clamp(0px, 10vw, 100px)",
    width: "clamp(0px, 20vw, 200px)",
    objectFit: "scale-down",
    // filter: "saturate(0)",
  },
};
