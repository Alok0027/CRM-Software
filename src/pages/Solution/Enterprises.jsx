import React from 'react';
import enterpriseHero from '../../assets/potentialimg2.jpg';
const pain1 = '/crmp1.jpeg';
const pain2 = '/crmp2.jpeg';
const pain3 = '/crmp3.jpeg';
import { Globe, ShieldCheck, TrendingUp, Bot, GitBranch, Users } from 'lucide-react';

import Painpoints from "../../components/Painpoints";
import KeyBenefits from "../../components/KeyBenefits";
import Testimonials from '../../components/Testimonials';
import MiniFeatureOverview from '../../components/MiniFeatureOverview';
import PricingPrompt from '../../components/PricingPrompt';
import FAQ from '../../components/FAQ';

const enterprisePainPoints = [
  {
    img: pain1,
    title: 'Managing global complexity?',
    text: 'Our platform provides the tools to manage multiple currencies, languages, and regulatory requirements, giving you a unified view of your global operations.',
  },
  {
    img: pain2,
    title: 'Need for uncompromising security?',
    text: 'We offer advanced security features, including single sign-on (SSO), IP restrictions, and dedicated infrastructure to meet the strictest compliance standards.',
  },
  {
    img: pain3,
    title: 'Is your data driving decisions?',
    text: 'Leverage our powerful business intelligence and AI tools to transform vast amounts of data into predictive insights and strategic advantages.',
  },
];

const enterpriseBenefits = [
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: 'Global Scale & Performance',
    description: 'Built on a resilient infrastructure, our CRM delivers high performance and reliability for thousands of users across the globe.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: 'Advanced Security & Compliance',
    description: 'Meet your industry’s compliance needs with a platform that offers granular permissions, full audit trails, and data encryption.',
  },
  {
    icon: <GitBranch className="h-8 w-8 text-white" />,
    title: 'Limitless Extensibility',
    description: 'Integrate with any enterprise system using our robust API and connect to hundreds of business apps to create a single, unified ecosystem.',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Dedicated Partnership',
    description: 'Receive a dedicated success manager, premium support, and strategic guidance to ensure you achieve your business objectives.',
  },
];

const enterpriseFeatures = [
  {
    icon: <Globe size={28} className="text-white" />,
    title: 'Multi-Currency & Language Support',
    description: 'Manage global sales operations with support for multiple currencies, languages, and regional formatting.',
  },
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    title: 'Single Sign-On (SSO)',
    description: 'Simplify user access and enhance security with seamless integration with your corporate SSO provider (e.g., Okta, Azure AD).',
  },
  {
    icon: <Bot size={28} className="text-white" />,
    title: 'Predictive Lead Scoring',
    description: 'Use AI to score leads based on their likelihood to convert, helping your sales team prioritize their efforts on the most valuable opportunities.',
  },
  {
    icon: <TrendingUp size={28} className="text-white" />,
    title: 'Business Intelligence (BI) Tools',
    description: 'Connect your CRM data with powerful BI tools to perform deep analysis and uncover strategic insights.',
  },
  {
    icon: <GitBranch size={28} className="text-white" />,
    title: 'API & Integration Marketplace',
    description: 'Leverage our extensive API and marketplace of integrations to connect your CRM to all your critical business systems.',
  },
];

const enterpriseFaqs = [
  {
    question: 'How does the CRM handle data from our various enterprise systems?',
    answer: 'Our platform is designed for extensibility. With a robust API and a marketplace of pre-built integrations, you can easily connect your CRM to ERPs, marketing automation platforms, and other critical business systems for a unified data view.',
  },
  {
    question: 'What level of security and compliance can we expect?',
    answer: 'We provide enterprise-grade security features, including SSO, advanced data encryption, full audit logs, and role-based access controls. We work with you to meet specific industry compliance standards like GDPR, HIPAA, and SOC 2.',
  },
  {
    question: 'What does the implementation process look like for an enterprise client?',
    answer: 'Enterprise clients receive a dedicated implementation team, including a solutions architect and project manager. We follow a structured methodology to ensure a successful rollout, from discovery and design to data migration, training, and go-live support.',
  },
];

const Enterprise = () => {
  return (
    <div>
      <div className="relative h-[70vh] bg-gray-900">
        <img src={enterpriseHero} alt="Enterprise Solutions" className="absolute h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center items-center">
          <h1 className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl tracking-tight">
            The CRM Platform for Global Enterprise
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            A secure, scalable, and extensible platform to unify your global teams and drive transformative growth across your entire organization.
          </p>
        </div>
      </div>

      <Painpoints painPointsData={enterprisePainPoints} title="Addressing Enterprise-Scale Challenges" />
      
      <KeyBenefits 
        title="Your Strategic Growth Platform"
        subtitle="Unmatched Power, Security, and Flexibility"
        description="Our enterprise solution provides the robust infrastructure, security, and extensibility required to power the most complex global organizations."
        benefits={enterpriseBenefits} 
      />

      <Testimonials />

      <MiniFeatureOverview 
        title="Enterprise-Grade Capabilities"
        subtitle="Features to Power a Global Business"
        description="From advanced security to AI-driven insights, our platform provides the tools you need to operate at a global scale."
        features={enterpriseFeatures}
      />

      <PricingPrompt 
        title="Let's Build Your Solution"
        subtitle="Talk to our sales engineering team to design a custom CRM solution that meets the unique demands of your enterprise."
        buttonText="Contact Sales"
        buttonLink="/contact-sales"
        backgroundStyle={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e9ecef' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/svg%3E"),linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea)`,
        }}
      />

      <FAQ title="Frequently Asked Questions" faqs={enterpriseFaqs} />

    </div>
  );
};

export default Enterprise;
