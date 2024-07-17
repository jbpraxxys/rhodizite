export default defineEventHandler((event) => {
  return {
    address:
      "5th Floor, C2 Building, Bonifacio High Street Central, 30th Street corner 7th Avenue, Bonifacio Global City, Taguig 1634",
    footerColumns: [
      {
        title: "Quick Links",
        links: [
          { text: "About Us", url: "/about" },
          { text: "Investors", url: "/investors" },
          { text: "Members", url: "/members" },
          { text: "Knowledge Hub", url: "/knowledge-hub" },
          { text: "Media Hub", url: "/media-hub" },
        ],
      },
      {
        title: "Members",
        links: [
          { text: "Login", url: "/login" },
          { text: "Become a Member", url: "/become-member" },
          { text: "Contact Us", url: "/contact" },
        ],
      },
      {
        title: "Security & Privacy",
        links: [
          { text: "Data Privacy Statement", url: "/privacy-statement" },
          { text: "Security Policy", url: "/security-policy" },
          { text: "Security Tips Link", url: "/security-tips" },
          { text: "Terms & Conditions", url: "/terms" },
        ],
      },
    ],
    partnersTitle: "In Partnership",
    partners: [
      { name: "ACPI", logo: "/path/to/acpi-logo.png" },
      { name: "CCAP", logo: "/path/to/ccap-logo.png" },
      { name: "GDAP", logo: "/path/to/gdap-logo.png" },
      { name: "GICC", logo: "/path/to/gicc-logo.png" },
      { name: "HIMAP", logo: "/path/to/himap-logo.png" },
      { name: "PSIA", logo: "/path/to/psia-logo.png" },
    ],
    copyright:
      "© 2024 IBPAP - IT & Business Process Association Philippines. All Rights Reserved.",
    socialLinks: [
      {
        name: "Facebook",
        icon: "heroicons:facebook",
        url: "https://facebook.com/ibpap",
      },
      {
        name: "Instagram",
        icon: "heroicons:instagram",
        url: "https://instagram.com/ibpap",
      },
      {
        name: "TikTok",
        icon: "heroicons:tiktok",
        url: "https://tiktok.com/@ibpap",
      },
      {
        name: "Twitter",
        icon: "heroicons:twitter",
        url: "https://twitter.com/ibpap",
      },
    ],
  };
});
