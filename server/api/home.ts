// /server/api/home.ts
export default defineEventHandler(() => {
    return {
        id: 1,
        slug: "home",
        label: "Home Page",
        show_metadata: 1,
        content: {
            section1_title:
                "<h1>Free your mind to <strong>focus</strong> on your core business</h1>",
            section1_content:
                "Let us guide you towards your goals and help you soar to new heights of success.",
            section1_btn_link: null,
            section1_btn_text: null,
            section2_title:
                "Business Process Outsourcing Solutions made for your Business",
            section2_items: [
                {
                    title: "Contact Center",
                    content:
                        "Revolutionize your customer service operations with our customized solutions to meet your business and customers\u2019 needs.",
                    image: "cms_images/6k1u7PMptkBNAA82pD4mbjxWPWEVMPtMpiUYBLhT.png",
                    link: "/pages/solutions/contact-center",
                },
                {
                    title: "Managed Services",
                    content:
                        "Easily access specialized professionals you need and avoid the costs of hiring new employees.",
                    image: "cms_images/VvVL8UI35Djg2N8V4aRIA9QcxFKpocE31QaOom3Z.png",
                    link: "/pages/solutions/managed-services",
                },
                {
                    title: "Staff Leasing",
                    content:
                        "Access a pool of external talent and resources. We\u2019ll delegate administrative tasks from hiring, payroll, and benefits.",
                    image: "cms_images/c4ts70Omkqof4VdwALtVFVuPZRSD2CAZqFdMLFJ1.png",
                    link: "/pages/solutions/staff-leasing",
                },
                {
                    title: "Workforce Management",
                    content:
                        "Optimize staffing and workload requirements and the scheduling processes needed to meet your business goals.",
                    image: "cms_images/BhKnC3vm7hce9B2ENHvVoCewo9x0Lkb6YcLK4QBO.png",
                    link: "/pages/solutions/workforce-management",
                },
            ],
            section3_title: "Client-centric Custom Solutions",
            section3_content:
                "Reliasourcing is your strategic partner for business success. Located in the Philippines' bustling business district, we\u2019re ready to help you elevate your business to new heights.",
            section3_items: [
                {
                    image: "cms_images/VjzpJyDlFVeDQHVLoi7iIJNKQWNekDTppSE2GHbj.png",
                    title: "Flexible Solutions",
                    content:
                        "We create custom-built solutions that guarantee the best  resource utilization based on your needs",
                },
                {
                    image: "cms_images/L8sE8pXc5RQpwKEiyz71p8UgO6bcCzcBWmkxpZRI.png",
                    title: "Performance Oriented",
                    content:
                        "Our agents are trained to provide the best quality customer service for your brand",
                },
                {
                    image: "cms_images/7Q1VJFDSWf6XYp0ueH0tQy9cYcyHzozCBaZ1YywB.png",
                    title: "Tech-Driven",
                    content:
                        "We commit ourselves to the highest SLA industry standards",
                },
                {
                    image: "cms_images/3drRLDWHKa2rRN09go5y465z5qL4UJ4uup3GG4cd.png",
                    title: "Responsive Team",
                    content:
                        "We analyze performance and provide improvement suggestions",
                },
            ],
            section4_items: [
                {
                    image: "cms_images/hlIjDTtYwS0xhZ5Sjcpv0J6W8JS3lSLEDs3VHqfs.png",
                    title: "<p><strong>Tailor-Made Outsourcing</strong></p><p>Solutions Crafted for Your Business<strong>&nbsp;</strong>Needs</p>",
                    content:
                        "<blockquote><p>At Reliasourcing, we specialize in creating tailored strategies that align with your unique goals and challenges.&nbsp;</p></blockquote><p>&nbsp;</p><p>Our team of experts collaborates closely with you to understand your objectives and challenges, ensuring that our services align perfectly with your vision. Leverage our expertise in customer service, sales support, and more, delivered by a dedicated team committed to your success. Elevate your efficiency and focus on core competencies while we handle the rest.</p>",
                    btn_link: "/pages/specialization/creative-services",
                    btn_text: "Learn More",
                },
                {
                    image: "cms_images/Eu5UHKa4epYZMSJ254rn2UkcXvNWOSxWS1kdICHy.png",
                    title: "<p>Elevate Your Business with Dedicated <strong>Customer Success Teams</strong></p>",
                    content:
                        "<p>Maximize your business potential with Reliasourcing's customer success teams.</p><p>&nbsp;</p><p>We recognize the pivotal role of exceptional customer experiences in fueling growth, and our committed teams are dedicated to delivering just that. Whether you require 24/7 support, multilingual aid, or industry-specific insights, our customized solutions are crafted to surpass your expectations. Leveraging our extensive expertise in customer relationship management, we optimize operations, enhance retention rates, and cultivate enduring customer loyalty. Take your business to new heights today by partnering with Reliasourcing.</p>",
                    btn_link:
                        "/pages/specialization/sales-and-customer-support/customer-success-services",
                    btn_text: "Learn More",
                },
                {
                    image: "cms_images/U81hsF5N0a2MBtvOvgapTQ75pZFCvnlXz2zYUfZv.png",
                    title: "<p>Drive Results with&nbsp; a High-Performance <strong>Sales Teams</strong></p>",
                    content:
                        "<p>Our collaborative, dynamic, and skilled professionals bring extensive expertise to boost your sales success. We prioritize surpassing targets and nurturing client relationships, as our team ensures a streamlined journey from prospecting to deal closure.&nbsp;</p><p>&nbsp;</p><p>Experience exceptional sales performance through effective collaboration and strategic planning to reach your goals. Elevate your business with a sales team dedicated to delivering outstanding results.&nbsp;</p>",
                    btn_link:
                        "/pages/specialization/sales-and-customer-support/sales-development-services",
                    btn_text: "Learn More",
                },
            ],
            section5_title:
                "<p><strong>Reliable</strong> Solutions.<br><strong>Real</strong> Results.</p>",
            section5_items: [
                {
                    prefix: "$",
                    count: "100",
                    suffix: "M+",
                    content: "Generated Revenue for Clients",
                },
                {
                    prefix: null,
                    count: "1",
                    suffix: "M+",
                    content: "Tickets Resolved Annually",
                },
                {
                    prefix: null,
                    count: "71",
                    suffix: "%",
                    content: "Faster Time-to-Hire (vs. Industry Standard)",
                },
                {
                    prefix: null,
                    count: "500",
                    suffix: "+",
                    content: "Full-time Employees",
                },
            ],
            section5_testimonials: [
                {
                    image: "cms_images/Vt7bGrnOud0PsU6cg5I4AAyyGxUhxwjeVSxYkbsA.png",
                    name: "Edoardo Arnello",
                    position: "CEO, Accesiway",
                    testimonial:
                        "Reliasourcing\u2019s revenue optimization services are exceptional. Their team developed a customized strategy tailored to our goals, resulting in a significant increase in revenue. Regular updates and reports kept us informed and their expertise and commitment to quality make them a valuable partner. Highly recommended!",
                },
                {
                    image: "cms_images/Yp980qDl5xtxLmXj26hMdnpKO6JmtT48dm5YSUuS.webp",
                    name: "Dor Isseroff",
                    position: "COO, Tango",
                    testimonial:
                        "In my role as COO at Tango, I've been thoroughly impressed with Reliasourcing's customer support. Their focus on delivering exceptional service and tailoring strategies to our needs has transformed our support operations. We've seen a dramatic increase in customer satisfaction and a much more efficient system, thanks to their expertise. Reliasourcing keeps us informed every step of the way with clear communication and consistent updates. Their commitment to top-notch quality makes them an essential partner for any business seeking best-in-class customer support solutions.",
                },
                {
                    image: "cms_images/3VqvkI5Na12UMx5S84SBhYA25GFcfpuwvz9tiOsh.webp",
                    name: "Shea Shepard",
                    position:
                        "Senior Director of Global Talent Acquisition, ThriveDX",
                    testimonial:
                        "Partnering with Reliasourcing has been a game-changer for ThriveDX. Their commitment to excellence and deep understanding of our needs have significantly enhanced our talent acquisition process. The team at Reliasourcing is not only professional and reliable but also proactive in finding innovative solutions to complex challenges. Their dedication to delivering top-notch service has consistently exceeded our expectations. We are thrilled with the results and look forward to continuing our successful collaboration with Reliasourcing.",
                },
            ],
            section6_title: "Trusted by Companies Worldwide",
            section6_items: [
                {
                    link: "https://thrivedx.com/",
                    logo: "cms_images/1ATYxxYxnKQeUj3FSXi9FIFz7Ln0A7DwRP0xfNtF.png",
                },
                {
                    link: "https://www.tango.me/",
                    logo: "cms_images/AjOmISeomMb8ivozLUOWcSCYGBKXuF7eG7KdaQLN.png",
                },
                {
                    link: "https://www.accessiway.com/",
                    logo: "cms_images/784UXnvMVAu9n4t9KhR1jjPDsj0yEoRAKyobwDPx.png",
                },
                {
                    link: "https://www.playtech.com/",
                    logo: "cms_images/UcCSTyN4TYUrfLBCByRE1tLGGxo5tRY8CrXii1hT.png",
                },
                {
                    link: "https://connecteam.com/",
                    logo: "cms_images/CGeMg6LZVctUepftOJeGXlxnbuJdIfHqh8YRHpOk.png",
                },
                {
                    link: "https://creditsense.ai/",
                    logo: "cms_images/VdbGIQwmjdMimSrMI9Mc3KYSAmT5sys0TqtsEQzb.png",
                },
            ],
            section7_title: "Collaborate With Us",
            section7_content:
                "Reliasourcing goes above and beyond merely catering to your unique requirements. With our stellar specializations, we will help you move your business forward strategically and efficiently.",
            section7_btn_link: "/#contact-us",
            section7_btn_text: "Outsource with Us",
            section8_title:
                "<p>The Reliasourcing<br>Framework for <strong>Success</strong></p>",
            section8_content:
                "<p>Designed to meet the dynamic needs of our clients and drive sustainable business growth.</p><p><br>Our approach encompasses four key stages, each meticulously crafted to deliver solutions and foster long-term success.</p>",
            section8_btn_link: "/pages/about-us/our-advantages",
            section8_btn_text: "About Us",
            section8_items: [
                {
                    title: "Client Needs Assessment",
                    content:
                        "Before jumpstarting the partnership, we make sure that we have a comprehensive understanding of the unique needs of each client. This involves collaborative discussions, assessment of existing processes, and identification of pain points.",
                },
                {
                    title: "Customized Solutions",
                    content:
                        "Our team provides a detailed proposal outlining the scope of services, technology integration, and a transparent pricing model to ensure alignment with the client\u2019s long-term goals.",
                },
                {
                    title: "Strategic Long-Term Planning",
                    content:
                        "As we consistently improve our project satisfaction and adapt to the evolving industry trends, we engage in collaborative long-term planning with our clients. We provide continuous improvements and make proactive adjustments based on your business needs.",
                },
                {
                    title: "Monitoring & Optimization",
                    content:
                        "We implement regular performance reporting to ensure continuous improvement. Our experts analyze data, measure key performance indicators (KPIs), and deliver transparent reports to clients.",
                },
            ],
        },
        title: "Reliasourcing - Home",
        description:
            "Reliasourcing is your strategic partner for business success. Located in the Philippines' bustling business district, we\u2019re ready to help you elevate your business to new heights.",
        keywords: "Reliasourcing",
        robots_follow: "1",
        robots_index: "1",
        og_image_path:
            "cms_images/D3rFMnHVIhYeXQqq2qOsXfUKts0RHlu3Akcd5p9D.png",
        created_at: "Mar 19, 2024 (00:07:14)",
        updated_at: "Jul 03, 2024 (03:14:52)",
    };
});
