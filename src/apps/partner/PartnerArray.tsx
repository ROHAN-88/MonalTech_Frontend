import { PartnerType } from "@/datatype/partnerType";

const PartnerArray = [
  {
    id: 1,
    name: "Microsoft",
    imgSrc: "/images/patners/microsoft.png",
  },
  {
    id: 2,
    name: "LOGPOINT",
    imgSrc: "/images/patners/logpoint-logo.webp",
    description:
      "LogPoint is committed to creating the best SIEM in the world. They enable organizations to convert data into actionable intelligence: supporting cybersecurity, compliance, IT operations, and business analytics.The company’s culture prioritizes passion, innovation, team spirit, and client satisfaction. Together, these values fuel LogPoint’s success across cybersecurity technologies: from  SIEM,  UEBA, and  SOAR, to SAP security and protection for other business-critical applications.",
  },
  {
    id: 3,
    name: "Palo Alto Networks",
    imgSrc: "/images/patners/pan-logo-dark_wbg.png",
    description:
      "Palo Alto Networks, the global cybersecurity leader, continually delivers innovation to enable secure digital transformation - even as the pace of change is accelerating.With more than 85k satisfied clients and revenue of $4.3B as per fiscal year 2021, palo alto networks operates in more than 150 countries as cybersecurity leaders.",
  },
  {
    id: 4,
    name: "Tenable",
    imgSrc: "/images/patners/partner-tenable.png",
    description:
      "A decade ago, Tenable pioneered the IT Vulnerability Management market as the creator of Nessus®, which is now the world’s most widely deployed IT vulnerability assessment solution.Tenable.io, the world’s first Cyber Exposure platform, arms Security with the visibility to see their entire cyber attack surface at all times (from IT to Cloud to IoT to OT) and arms the CISO, C-suite and Board of Directors with the insight to focus on the issues which matter most and make better strategic decisions.",
  },
  {
    id: 5,
    name: "Swimlane",
    imgSrc: "/images/patners/partner-swimlane (1).png",
    description:
      "Swimlane is a leader in security orchestration, automation and response (SOAR). By automating time-intensive, manual processes and operational workflows and delivering powerful, consolidated analytics, real-time dashboards and reporting from across your security infrastructure, Swimlane maximizes the incident response capabilities of over-burdened and understaffed security operations.Swimlane is headquartered in Denver, Colorado with operations throughout North America, EMEA and APAC",
  },
  {
    id: 6,
    name: "Trend Micro",
    imgSrc: "/images/patners/trend_micro_logo.png",
    description:
      "Trend Micro, a global cybersecurity leader, helps make the world safe for exchanging digital information. Fueled by decades of security expertise, global threat research, and continuous innovation, our cybersecurity platform protects 500,000+ organizations and 250+ million individuals across clouds, networks, devices, and endpoints.As a leader in cloud and enterprise cybersecurity, their platform delivers central visibility for better, faster detection and response and a powerful range of advanced threat defense techniques optimized for environments, like AWS, Microsoft, and Google. ",
  },
  {
    id: 7,
    name: "BeyondTrust",
    imgSrc: "/images/patners/beyond_trust.png",
    description:
      "BeyondTrust is the worldwide leader in Privileged Access Management, offering the most seamless approach to preventing data breaches related to stolen credentials, misused privileges, and compromised remote access.BeyondTrust gives organizations the visibility and control they need to reduce risk, achieve compliance objectives, and boost operational performance. They are trusted by 20,000 customers, including half of the Fortune 100, and a global partner network. ",
  },
  {
    id: 8,
    name: "CyberArk",
    imgSrc: "/images/patners/cyberark-logo-dark_wbg.png",
    description:
      "CyberArk is global leader in Identity Security that provides a comprehensive approach to Identity Security centered on privileged access management to protect against advanced cyber threats.With more than 7000 customers and 450+ broad community of channel partners, advisory firms and global system integrators, CyberArk operates in 110 countries efficiently. CyberArk has impressive 100% efficacy of CyberArk Endpoint Privilege Manager against more than 3 million ransomware strains based on testing by CyberArk Labs.",
  },
] as Array<PartnerType>;
export default PartnerArray;
