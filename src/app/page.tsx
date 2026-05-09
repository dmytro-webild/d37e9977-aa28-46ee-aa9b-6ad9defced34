"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import { Sparkles, Users, Globe, Zap, Star, Layers, Twitter, Instagram, Linkedin } from "lucide-react";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import { Check, Code, Palette, TrendingUp } from "lucide-react";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";

export default function WebAgencyThemePage() {
    const navItems = [
        { name: "Home", id: "home" },
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
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="Studio"
                    button={{ text: "Get in Touch", href: "/contact" }}
                />
                <HeroSplitKpi
                    background={{ variant: "radial-gradient" }}
                    tag="Award-Winning Agency"
                    tagIcon={Sparkles}
                    title="We Build Digital Experiences"
                    description="Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers."
                    enableKpiAnimation={true}
                    kpis={[
                        { value: "150+", label: "Projects Delivered" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "12+", label: "Years Experience" },
                    ]}
                    buttons={[
                        {
                            text: "Start Project",                            href: "/contact"},
                        {
                            text: "View Work",                            href: "#work"},
                    ]}
                    avatars={[
                        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero2.webp", alt: "Team member 1" },
                        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero3.webp", alt: "Team member 2" },
                        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero4.webp", alt: "Team member 3" }
                    ]}
                    avatarText="Trusted by startups and Fortune 500 companies"
                    imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero1.webp"
                    imageAlt="Web design showcase"
                    mediaAnimation="slide-up"
                    showMarqueeCard={false}
                    marqueeItems={[
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg", alt: "Logo" },
                    ]}
                    marqueeClassName="md:mb-5"
                />
                <div id="services"><TextAbout
                    title="We craft digital experiences that captivate audiences and drive meaningful results for ambitious brands worldwide."
                    buttons={[
                        { text: "Our Process", href: "#process" },
                        { text: "Meet the Team", href: "#team" },
                    ]}
                    useInvertedBackground={false}
                /></div>
                <FeatureCardNineteen
                    title="Our Services"
                    description="A proven methodology that delivers results consistently across every project."
                    tag="What We Do"
                    tagIcon={Layers}
                    features={[
                        {
                            tag: "Service 01",                            title: "01",                            subtitle: "Web Development",                            description: "Your website should be more than functional—it should resonate. We craft bespoke digital experiences that merge innovation with creativity, delivering intuitive, visually stunning platforms that captivate audiences, reflect your brand's essence, and adapt to future opportunities.",                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process1.webp",                            imageAlt: "Web development"},
                        {
                            tag: "Service 02",                            title: "02",                            subtitle: "Marketing",                            description: "Impactful marketing goes beyond visibility—it creates connections. We fuse creativity with analytics to craft adaptive strategies that engage your audience authentically, keeping your brand relevant and resonant while delivering measurable results in an ever-evolving digital world.",                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process2.webp",                            imageAlt: "Marketing"},
                        {
                            tag: "Service 03",                            title: "03",                            subtitle: "Design",                            description: "Design is your brand's voice. We craft visuals and layouts that communicate purpose, inspire trust, and connect emotionally. By harmonizing artistry with intent, our designs transform user interactions into meaningful, memorable experiences that align with your identity.",                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process3.webp",                            imageAlt: "Design"},
                        {
                            tag: "Service 04",                            title: "04",                            subtitle: "Software Development",                            description: "We build custom software that evolves with your business. By addressing unique challenges, our tailored solutions streamline workflows, eliminate inefficiencies, and foster innovation—empowering you to scale, adapt, and maintain a competitive edge in an ever-changing landscape.",                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process4.webp",                            imageAlt: "Software development"},
                    ]}
                    textboxLayout="default"
                    useInvertedBackground={false}
                />
                <MetricCardOne
                    title="Results That Speak"
                    description="Our track record of delivering exceptional digital solutions for clients across industries."
                    tag="Our Impact"
                    tagIcon={Sparkles}
                    metrics={[
                        { id: "clients", value: "200+", title: "Happy Clients", description: "Businesses transformed through our digital solutions", icon: Users },
                        { id: "projects", value: "500+", title: "Projects", description: "Websites and apps launched worldwide", icon: Globe },
                        { id: "performance", value: "99%", title: "Uptime", description: "Reliable performance for all our projects", icon: Zap },
                    ]}
                    gridVariant="uniform-all-items-equal"
                    animationType="depth-3d"
                    textboxLayout="default"
                    useInvertedBackground={false}
                />
                <TestimonialCardFive
                    title="What Our Clients Say"
                    description="Hear from the brands we've helped transform through innovative digital solutions."
                    tag="Testimonials"
                    tagIcon={Star}
                    testimonials={[
                        {
                            id: "1",                            name: "Sarah Johnson",                            date: "CEO, TechStart",                            title: "Transformed Our Digital Presence",                            quote: "Working with Studio was a game-changer for our startup. They delivered a website that not only looks stunning but converts visitors into customers at twice our previous rate.",                            tag: "Web Development",                            avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero2.webp",                            avatarAlt: "Sarah Johnson",                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero2.webp",                            imageAlt: "TechStart project showcase"},
                        {
                            id: "2",                            name: "Michael Chen",                            date: "Founder, GrowthLab",                            title: "Exceeded All Expectations",                            quote: "The team's attention to detail and creative vision brought our brand to life in ways we never imagined. Our new platform has received incredible feedback from users.",                            tag: "Brand Design",                            avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero3.webp",                            avatarAlt: "Michael Chen",                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero3.webp",                            imageAlt: "GrowthLab project showcase"},
                        {
                            id: "3",                            name: "Emily Rodriguez",                            date: "Marketing Director, Elevate",                            title: "A True Partnership",                            quote: "From strategy to execution, Studio understood our vision and delivered beyond what we hoped for. The new website has become our most powerful marketing asset.",                            tag: "E-commerce",                            avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero4.webp",                            avatarAlt: "Emil Svenson",                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero4.webp",                            imageAlt: "Elevate project showcase"},
                        {
                            id: "4",                            name: "David Park",                            date: "CTO, InnovateCo",                            title: "Technical Excellence",                            quote: "The development team delivered a high-performance application that handles our complex requirements with ease. Their technical expertise is unmatched in the industry.",                            tag: "Web Application",                            avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero5.webp",                            avatarAlt: "David Park",                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero5.webp",                            imageAlt: "InnovateCo project showcase"},
                    ]}
                    textboxLayout="default"
                    useInvertedBackground={false}
                />
                <FeatureCardTen
                    tag="How We Work"
                    tagIcon={Layers}
                    title="Our Process"
                    description="A structured approach that turns your vision into results, every step of the way."
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    features={[
                        {
                            title: "Discovery & Strategy",                            description: "We start by understanding your goals, audience, and market to build a roadmap tailored to your business.",                            media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/services/how1.webp", imageAlt: "Discovery and strategy" },
                            reverse: false,
                            items: [
                                { icon: Code, text: "In-depth research and audits" },
                                { icon: Zap, text: "Clear goals and KPIs defined" },
                                { icon: Check, text: "Custom project roadmap" },
                            ],
                        },
                        {
                            title: "Design & Prototyping",                            description: "We translate strategy into visual concepts, iterating with you until every detail feels right.",                            media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/services/how2.webp", imageAlt: "Design and prototyping" },
                            reverse: true,
                            items: [
                                { icon: Palette, text: "Wireframes and mockups" },
                                { icon: Layers, text: "Interactive prototypes" },
                                { icon: Check, text: "Client feedback loops" },
                            ],
                        },
                        {
                            title: "Build & Launch",                            description: "We develop, test, and deploy your project with precision, ensuring a smooth launch and measurable impact.",                            media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/services/how3.webp", imageAlt: "Build and launch" },
                            reverse: false,
                            items: [
                                { icon: TrendingUp, text: "Agile development sprints" },
                                { icon: Globe, text: "QA testing and optimization" },
                                { icon: Check, text: "Launch support and analytics" },
                            ],
                        },
                    ]}
                />
                <ContactText
                    text="Ready to transform your digital presence? Let's create something extraordinary together."
                    buttons={[
                        { text: "Start Your Transformation", href: "/contact" },
                    ]}
                    background={{ variant: "canvas-reveal" }}
                    useInvertedBackground={false}
                />
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