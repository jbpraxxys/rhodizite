// /server/api/home.ts
export default defineEventHandler(() => {
  return {
    slides: [
      {
        title: "Discover the Future of Technology",
        description:
          "Explore cutting-edge innovations and stay ahead of the curve.",
        ctaText: "Learn More",
        ctaLink: "/future-tech",
        image: "/img/home/home-sample-slider.jpg",
        imageAlt: "Futuristic technology concept",
        // backgroundImage: "/img/home/slider-bg-1.jpg",
      },
      {
        title: "Transform Your Digital Experience",
        description: "Unlock new possibilities with our advanced solutions.",
        ctaText: "Get Started",
        ctaLink: "/solutions",
        image:
          "https://images.unsplash.com/photo-1531493731235-b5c309dca387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Digital transformation visualization",
        // backgroundImage: "/img/home/slider-bg-2.jpg",
      },
      // Add more slides as needed
    ],
    videoURL: "/video/home-video.mp4",
    platinumClubLogo: "/img/home/platinum-club-logo.png",
    platinumPartnerLogos: [
      {
        src: "/img/home/platinum-partner-logos/accenture.jpg",
        alt: "Accenture",
      },
      {
        src: "/img/home/platinum-partner-logos/carelon_global_solutions.png",
        alt: "Carelon Global Solutions",
      },
      {
        src: "/img/home/platinum-partner-logos/dxc_technology.png",
        alt: "DXC Technology",
      },
      {
        src: "/img/home/platinum-partner-logos/ernst_young.png",
        alt: "Ernst & Young",
      },
      {
        src: "/img/home/platinum-partner-logos/genpact_services.jpg",
        alt: "Genpact Services",
      },
      {
        src: "/img/home/platinum-partner-logos/globe_telecom.jpg",
        alt: "Globe Telecom",
      },
      {
        src: "/img/home/platinum-partner-logos/ibm_business_services.jpg",
        alt: "IBM Business Services",
      },
      {
        src: "/img/home/platinum-partner-logos/leechiu_property_consultants.jpg",
        alt: "Leechiu Property Consultants",
      },
      {
        src: "/img/home/platinum-partner-logos/mdi_novare.png",
        alt: "MDI Novare",
      },
      {
        src: "/img/home/platinum-partner-logos/ncc_group.png",
        alt: "NCC Group",
      },
      { src: "/img/home/platinum-partner-logos/optum_logo.png", alt: "Optum" },
      { src: "/img/home/platinum-partner-logos/pldt.jpg", alt: "PLDT" },
      { src: "/img/home/platinum-partner-logos/prohance.png", alt: "Prohance" },
      { src: "/img/home/platinum-partner-logos/pwc.png", alt: "PwC" },
      {
        src: "/img/home/platinum-partner-logos/rgs_global_solutions.jpg",
        alt: "RGS Global Solutions",
      },
      {
        src: "/img/home/platinum-partner-logos/superfocus.png",
        alt: "Superfocus",
      },
      {
        src: "/img/home/platinum-partner-logos/teleperformance.png",
        alt: "Teleperformance",
      },
      {
        src: "/img/home/platinum-partner-logos/trends_and_concepts.png",
        alt: "Trends and Concepts",
      },
      { src: "/img/home/platinum-partner-logos/ttec.png", alt: "TTEC" },
    ],
    secondarySlides: [
      {
        title: "PHILIPPINES BEST WORKPLACE IN IT-BPM",
        description:
          "We’re Best Place to Work Certified Again! 100% of IBPAP employees that they take immense pride in working at IBPAP.",
        ctaText: "Member Login",
        ctaLink: "/login",
        image: "/img/home/secondary-sample-image.jpg",
        imageAlt: "Best place to work at!",
        // backgroundImage: "/img/home/secondary-slider-bg-1.jpg",
      },
      {
        title: "Partner for Success",
        description: "Join our network of industry-leading partners.",
        ctaText: "Become a Partner",
        ctaLink: "/partners",
        image: "/img/home/secondary-slider-2.jpg",
        imageAlt: "Business partnership concept",
        // backgroundImage: "/img/home/secondary-slider-bg-2.jpg",
      },
      // Add more slides as needed
    ],
    initiatives: {
      title:
        "Since 2004, IBPAP has led the Philippine IT-BPM Industry's growth through multiple initiatives.",
      description:
        "A comprehensive and definitive portal that assesses cities according to their viability as the next growth centers. The digitalcitiesPH portal features the profiles of cities and municipalities in the Philippines.",
      ctaText: "MORE ABOUT US",
      ctaLink: "/about-us",
      items: [
        {
          title: "Policy Shaping",
          description:
            "The IT and Business Process Association of the Philippines is the primary industry association and advocacy group of the country's agile, dynamic, and resilient IT and Business Process Management (IT-BPM) sector.",
        },
        {
          title: "Talent Development",
          description:
            "Enable the industry to pivot to high-value services by attracting, engaging and retaining skilled and qualified workforce that advocate for lifelong learning.",
        },
        {
          title: "Country Branding",
          description:
            "A comprehensive and definitive portal that assesses cities according to their viability as the next growth centers. The digitalcitiesPH portal features the profiles of cities and municipalities in the Philippines.",
        },
        {
          title: "Innovation",
          description:
            "Be at the forefront of digital transformation leading the industry in adapting to emerging technologies and in developing cutting-edge innovations.",
        },
      ],
    },
    benefits: {
      heading: "Benefits of becoming an IBPAP Member",
      items: [
        {
          title: "Industry Reports",
          description:
            "Gain a competitive edge with in-depth industry insights, comprehensive research, and reliable data. Empower your business strategy with the knowledge you need to succeed.",
          icon: "/img/home/benefits/graph-icon.svg",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        },
        {
          title: "Empower Industry Workforce",
          description:
            "Gain a competitive edge with in-depth industry insights, comprehensive research, and reliable data.  Empower your business strategy with the knowledge you need to succeed.",
          icon: "/img/home/benefits/users-icon.svg",
          image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          title: "Network Connections",
          description:
            "Network and collaborate with diverse professionals within and outside your industry. Build valuable relationships that foster knowledge sharing, open new opportunities, and drive innovation.",
          icon: "/img/home/benefits/network-icon.svg",
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
        },
        {
          title: "Policy Advocacy",
          description:
            "Support the industry by actively shaping laws and policies that create a favorable business environment. Strengthen the industry's relevance in the global IT-BPM space through strategic advocacy and collaboration with policymakers.",
          icon: "/img/home/benefits/building-icon.svg",
          image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
    },
    testimonial: {
      imageSrc: "/img/testimonials/jak-madrid.webp",
      name: "Jak Madrid",
      position: "President and CEO",
      quote:
        "IBPAP's expertise and industry insights have been crucial to our growth in the Philippines. They are a true asset to the IT-BPM sector.",
    },
    statistics: {
      title:
        "The organization has over 300 members from IT-BPM and allied industries who are all committed to contribute to the growth of the Philippine economy and create jobs for millions of Filipinos",
      stats: [
        { label: "MEMBERS", value: "300" },
        { label: "BILLION INDUSTRY", value: "$59" },
        { label: "MILLION JOBS", value: "2.5" },
      ],
      ctaText: "JOIN US NOW!",
      ctaLink: "/join",
    },
  };
});
