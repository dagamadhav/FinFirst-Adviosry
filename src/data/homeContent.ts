import {
  TrendingUp,
  Landmark,
  Layers,
  PiggyBank,
  GitMerge,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

import dagroup from "../assets/Network/dagroup.png";
import acme from "../assets/Network/acme1.png";
import deora from "../assets/Network/deora.png";
import desai from "../assets/Network/desai.avif";
import hof from "../assets/Network/hof.png";
import jadeblue from "../assets/Network/jadeblue.jpg";
import kifs from "../assets/Network/kifs.png";
import sunbuild from "../assets/Network/sunbuild.webp";
import tipson from "../assets/Network/tipson.png";
import prudent from "../assets/Network/prudent.svg";
import stellar from "../assets/Network/sg-logo-c-stack.png";
import shankus from "../assets/Network/shankus.jpg";
import bleachchem from "../assets/Network/bleach.png";
import kdgroup from "../assets/Network/kdgroup.png";
import simba from "../assets/Network/simba.png";
import claris from "../assets/Network/claris.png";

export type InvestmentArea = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
};

export type NetworkPartner = {
  name: string;
  logo: string;
  logoClassName?: string;
  cellClassName?: string;
};

export const investmentAreas: InvestmentArea[] = [
  {
    id: "equity-capital",
    title: "Equity Capital",
    description:
      "Access to institutional investors, venture funds, family offices, and strategic partners to support long-term growth.",
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "debt-financing",
    title: "Debt Financing",
    description:
      "Structured access to venture debt funds, NBFCs, and private credit providers to optimise capital structure.",
    icon: Landmark,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    id: "structured-hybrid",
    title: "Structured & Hybrid Instruments",
    description:
      "Flexible capital solutions such as bridge financing, convertible instruments, and structured growth capital.",
    icon: Layers,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    id: "fundraise",
    title: "Fundraise",
    description:
      "End-to-end support in taking deals to market with close access to VC and PE firms, from preparation through successful closure.",
    icon: PiggyBank,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "mergers-acquisitions",
    title: "Mergers & Acquisitions",
    description:
      "Thorough research and outreach to identify strategic buyers or acquisition targets, supporting both buy-side and sell-side mandates.",
    icon: GitMerge,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    id: "management-advisory",
    title: "Management Advisory",
    description:
      "Strategic review of business models and growth plans, providing expertise on capital allocation, governance, and operational scale-up.",
    icon: Briefcase,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export const networkPartners: NetworkPartner[] = [
  { name: "DA Group", logo: dagroup },
  { name: "KIFS", logo: kifs },
  { name: "Acmepharma", logo: acme },
  { name: "HOF", logo: hof },
  { name: "Deora Group", logo: deora },
  { name: "Desai Ventures", logo: desai },
  { name: "Jadeblue", logo: jadeblue },
  { name: "Sun Builcon", logo: sunbuild },
  { name: "Tipson Group", logo: tipson },
  { name: "Prudent Advisors", logo: prudent },
  {
    name: "Stellar Group",
    logo: stellar,
    logoClassName: "brightness-[0.2] contrast-125 opacity-100",
    cellClassName: "bg-gray-100",
  },
  { name: "Shankus Realties", logo: shankus },
  { name: "Bleachchem Group", logo: bleachchem },
  { name: "KD Group", logo: kdgroup },
  { name: "Simba Group", logo: simba },
  { name: "Claris Capital", logo: claris },
];

export const SERVICE_SCROLL_EVENT = "finfirst:scroll-to-service";

export function scrollToService(
  index: number,
  onNavigate?: (page: string) => void,
) {
  onNavigate?.("home");

  window.setTimeout(() => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(
      new CustomEvent(SERVICE_SCROLL_EVENT, { detail: { index } }),
    );
  }, 150);
}
