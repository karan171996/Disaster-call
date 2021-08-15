import ndma from "../asset/ndma.png";
import nidm from "../asset/nidm.jpeg";
import ndrf from "../asset/ndrf.png";
import armedForces from "../asset/armed-forces.png";
import civilDefence from "../asset/civil-defence.jpeg";
import fire from "../asset/fire.png";
import homeGuard from "../asset/home-guard.jpeg";

export const departmentNames = [
  {
    label: "National Disaster Management Authority (NDMA)",
    value: "ndma",
    shortName: "NDMA",
    icon: <img className="departmaent-icon" src={ndma} />,
  },
  {
    label: "National Institute of Disaster Management (NIDM)",
    value: "nidm",
    shortName: "NIDM",
    icon: <img className="departmaent-icon" src={nidm} />,
  },
  {
    label: "National Disaster Response Force (NDRF)",
    value: "ndrf",
    shortName: "NDRF",
    icon: <img className="departmaent-icon" src={ndrf} />,
  },
  {
    label: "Directorate General of Fire Services",
    value: "fire-service",
    shortName: "Fire Department",
    icon: <img className="departmaent-icon" src={fire} />,
  },
  {
    label: "Home Guards",
    value: "home-guards",
    shortName: "Home Guards",
    icon: <img className="departmaent-icon" src={homeGuard} />,
  },
  {
    label: "Civil Defence",
    value: "civil-defence",
    shortName: "Civil Defence",
    icon: <img className="departmaent-icon" src={civilDefence} />,
  },
  {
    label: "Armed Forces",
    value: "armed-forces",
    shortName: "Armed Forces",
    icon: <img className="departmaent-icon" src={armedForces} />,
  },
];
