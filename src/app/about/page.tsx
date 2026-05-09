"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import AboutMetric from "@/components/sections/about/AboutMetric";
import { Users, Globe, Zap } from "lucide-react";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";

export default function AboutPage() {
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
                        button={{ text: "Get in Touch", href: "/contact" }}
                    />
                </div>
                <div id="about" data-section="about">
                    <AboutMetric
                        title="Our Story"
                        metrics={[
                            { icon: Users, label: "Team Members", value: "40+" },
                            { icon: Globe, label: "Countries", value: "15" },
                            { icon: Zap, label: "Projects", value: "500+" }
                        ]}
                        metricsAnimation="slide-up"
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