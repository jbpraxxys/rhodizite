// server/api/about.ts
export default defineEventHandler(() => {
  return {
    heroSlider: [
      {
        label: "About Us",
        title: "Empowering the IT-BPM Industry in the Philippines",
        ctaText: "Learn More",
        ctaLink: "/about/mission",
        backgroundImage:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        label: "Our Vision",
        title: "Shaping the Future of IT-BPM",
        ctaText: "Discover Our Vision",
        ctaLink: "/about/vision",
        backgroundImage:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        label: "Our Impact",
        title: "Driving Growth and Innovation",
        ctaText: "See Our Impact",
        ctaLink: "/about/impact",
        backgroundImage:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      },
    ],
    whoWeAre: {
      title: "Who We Are",
      content: `
        <p>The IT and Business Process Association of the Philippines is the primary industry association and advocacy group of the country's agile, dynamic, and resilient IT and Business Process Management (IT-BPM) sector.</p>
        <p>With over 400 members and six partner associations—the Animation Council of the Philippines, Inc. (ACPI), Global In-House Center Council (GICC) Philippines, Contact Center Association of the Philippines (CCAP), Game Developers Association of the Philippines (GDAP), Healthcare Information Management Association of the Philippines (HIMAP), and the Philippine Software Industry Association (PSIA)—IBPAP plays a pivotal role in sustaining the growth of the IT-BPM industry by working with stakeholders in the government and academe to ensure an enduring supply of high-quality labor, support service innovation, and provide country visibility.</p>
        <p>IBPAP also assists investors in setting up operations easily and quickly in the Philippines through relevant research, introductions to key officials, and a series of briefings at each step of the investment process. Initiatives for human resources, business development, knowledge sharing, and networking opportunities are also made available to members as a means of continued support.</p>
        <p>Ongoing support is then provided through a wide variety of initiatives, including programs for HR development, business development, knowledge sharing, and networking opportunities. IBPAP works closely with the government, academe, and other key stakeholders to make this possible and to reinforce the Philippine IT-BPM industry's global competitiveness and relevance.</p>
      `,
      image: {
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
        alt: "Team of diverse business professionals collaborating in an office",
        width: 600,
        height: 400,
      },
    },
    mission: {
      title: "Mission",
      body: "Lorem ipsum dolor sit amet consectetur. Eget at feugiat nec consectetur quam diam molestie maecenas ultricies. Gravida urna quisque tortor amet bibendum lectus diam facilisis aliquam.",
      // linkUrl: "/mission",
      linkText: "Learn More",
      bgImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Team working on mission-driven projects",
    },
    vision: {
      title: "Vision",
      body: "Lorem ipsum dolor sit amet consectetur. Eget at feugiat nec consectetur quam diam molestie maecenas ultricies. Gravida urna quisque tortor amet bibendum lectus diam facilisis aliquam.",
      // linkUrl: "/vision",
      linkText: "Learn More",
      bgImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Team collaborating on future-oriented goals",
    },
    timeline: {
      title:
        "Since 2004, IBPAP has led the Philippine IT-BPM Industry's growth through multiple initiatives",
      timelineItems: [
        {
          dateRange: "2004 - 2006",
          image: {
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            alt: "Team members collaborating in an office setting",
            width: 300,
            height: 200,
          },
          body: "<ul><li>Item 1</li><li>Item 2</li></ul>",
        },
        {
          dateRange: "2007 - 2009",
          image: {
            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            alt: "Team members in a meeting room",
            width: 300,
            height: 200,
          },
          body: "<ul><li>Item 1</li><li>Item 2</li></ul>",
        },
        {
          dateRange: "2010 - 2014",
          image: {
            src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            alt: "Team members working together in an office",
            width: 300,
            height: 200,
          },
          body: "<ul><li>The 2016-2022 Philippine IT-BPM Roadmap was launched</li><li>SMP was recognized as 2017 People Program of the Year by the Philippine Management Association of the Philippines (PMAP)</li><li>The Next Wave Cities program was re-branded digitalcities PH, coinciding with the launch of its portal and playbook were launched</li><li>Career portal itstartshere.ph and the Industry Academy playbook were launched</li></ul>",
        },
        // Add more timeline items as needed
      ],
    },
  };
});
