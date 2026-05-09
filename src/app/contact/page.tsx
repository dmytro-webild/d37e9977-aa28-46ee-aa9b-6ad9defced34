"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";

export default function ContactPage() {
    const navItems = [
        { name: "Home", id: "/" },
        { name: "Services", id: "services" },
        { name: "Work", id: "work" },
        { name: "About", id: "/about" },
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
                <div id="nav" data-section="nav">
                    <NavbarLayoutFloatingInline
                        navItems={navItems}
                        brandName="Studio"
                        button={{ text: "Get Started", href: "/contact" }}
                    />
                </div>
                <div id="contact" data-section="contact">
                    <ContactCTA
                        tag="Contact Us"
                        title="Let's Build Something Great"
                        description="Reach out to discuss your project and see how we can help your brand grow."
                        buttons={[
                            { text: "Send Message", href: "#" }
                        ]}
                        background={{ variant: "canvas-reveal" }}
                        useInvertedBackground={false}
                    />
                </div>
                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Studio"
                        leftLink={{ text: "Privacy", href: "/privacy" }}
                        rightLink={{ text: "Terms", href: "/terms" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}