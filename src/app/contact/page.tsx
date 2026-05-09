"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import FooterCard from "@/components/sections/footer/FooterCard";

export default function ContactPage() {
    const navItems = [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Work", id: "work" },
        { name: "Contact", id: "/contact" },
    ];

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="pill"
            contentWidth="medium"
            sizing="medium"
            background="aurora"
            cardStyle="layered-gradient"
            primaryButtonStyle="gradient"
            secondaryButtonStyle="glass"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="Studio"
                    button={{ text: "Get in Touch", href: "/contact" }}
                />
                <div id="contact">
                    <ContactCTA
                        tag="Contact Us"
                        title="Let's Build Something Great"
                        description="Reach out to discuss your project and see how we can help your brand grow."
                        buttons={[
                            { text: "Send Message", href: "#" }
                        ]}
                        background={{ variant: "canvas-reveal" }}
                    />
                </div>
                <FooterCard
                    logoText="Studio"
                    copyrightText="© 2025 Studio. All rights reserved."
                    socialLinks={[
                        { icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter" },
                        { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
                        { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "Connect on LinkedIn" },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}