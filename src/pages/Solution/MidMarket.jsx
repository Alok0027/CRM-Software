import React from 'react';
import midmarketHero from '../../assets/potentialimg.jpg';
const pain1 = '/crmp1.jpeg';
const pain2 = '/crmp2.jpeg';
const pain3 = '/crmp3.jpeg';
import { Users, GitBranch, ShieldCheck, TrendingUp, Bot } from 'lucide-react';

import Painpoints from "../../components/Painpoints";
import KeyBenefits from "../../components/KeyBenefits";
import Testimonials from '../../components/Testimonials';
import MiniFeatureOverview from '../../components/MiniFeatureOverview';
import PricingPrompt from '../../components/PricingPrompt';
import FAQ from '../../components/FAQ';

const midMarketPainPoints = [
  {
    img: pain1,
    title: 'Struggling with siloed departments?',
    text: 'Our unified platform breaks down silos, giving sales, marketing, and support a single source of truth for a seamless customer experience.',
  },
  {
    img: pain2,
    title: 'Is your sales process too complex?',
    text: 'Standardize your sales process with custom pipelines, automated workflows, and advanced deal tracking to manage multi-stage deals with ease.',
  },
  {
    img: pain3,
    title: 'Lacking actionable insights?',
    text: 'Get real-time analytics and customizable dashboards to make data-driven decisions with confidence. Turn your data into revenue.',
  },
];

const midMarketBenefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: 'Advanced Automation',
    description: 'Automate complex workflows across departments to improve efficiency, reduce manual work, and ensure no lead is left behind.',
  },
  {
    icon: <GitBranch className="h-8 w-8 text-white" />,
    title: 'Deep Customization',
    description: 'Tailor the CRM to your unique business processes with custom fields, objects, and layouts. Make the CRM work for you.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: 'Enterprise-Grade Security',
    description: 'Protect your data with robust security features, including role-based access control, data encryption, and regular audits.',
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: 'AI-Powered Insights',
    description: 'Leverage AI to forecast sales, identify at-risk deals, and get recommendations for the next best action.',
  },
];

const midMarketFeatures = [
  {
    icon: <GitBranch size={28} className="text-white" />,
    title: 'Custom Sales Pipelines',
    description: 'Design multiple sales pipelines that match your unique sales processes for different products or teams.',
  },
  {
    icon: <TrendingUp size={28} className="text-white" />,
    title: 'Advanced Reporting',
    description: 'Create and share custom reports and dashboards to track KPIs and monitor team performance in real-time.',
  },
  {
    icon: <Users size={28} className="text-white" />,
    title: 'Territory Management',
    description: 'Organize your sales team by territory to ensure optimal lead distribution and balanced workloads.',
  },
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    title: 'Role-Based Permissions',
    description: 'Control who sees what with granular, role-based permissions that protect sensitive data.',
  },
  {
    icon: <Bot size={28} className="text-white" />,
    title: 'AI-Powered Forecasting',
    description: 'Get accurate sales forecasts powered by AI to make smarter, data-driven business decisions.',
  },
];

const midMarketFaqs = [
  {
    question: 'How does the CRM support a growing sales team?',
    answer: 'Our platform is built to scale. It supports territory management, advanced reporting, and role-based permissions to help you manage a growing team effectively while maintaining data security and organization.',
  },
  {
    question: 'Can we customize the CRM to fit our specific industry needs?',
    answer: 'Absolutely. The CRM offers deep customization, including custom fields, objects, and automated workflows. You can tailor it to fit the unique processes of your industry and business model.',
  },
  {
    question: 'What kind of support and training do you offer for mid-market clients?',
    answer: 'We provide dedicated account managers, priority support, and personalized onboarding and training sessions for our mid-market clients to ensure a smooth implementation and long-term success.',
  },
];

const MidMarket = () => {
  return (
    <div>
      <div className="relative h-[70vh] bg-gray-900">
        <img src={midmarketHero} alt="Mid-Market Solutions" className="absolute h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center items-center">
          <h1 className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl tracking-tight">
            Scale Your Business with a Powerful CRM
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Our CRM for mid-market companies provides the tools you need to manage complex sales cycles, align your teams, and drive predictable growth.
          </p>
        </div>
      </div>

      <Painpoints painPointsData={midMarketPainPoints} title="Overcoming Mid-Market Growth Pains" />
      
      <KeyBenefits 
        title="Your Growth Engine"
        subtitle="Advanced Features, Unbeatable Value"
        description="Our mid-market solution is engineered to handle your growing complexity while remaining intuitive and easy to use for your entire organization."
        benefits={midMarketBenefits} 
      />

      <Testimonials />

      <MiniFeatureOverview 
        title="Built for Scale"
        subtitle="Powerful Features for Growing Teams"
        description="Manage complexity and drive efficiency with tools designed for the challenges of a mid-market business."
        features={midMarketFeatures}
      />

      <PricingPrompt 
        title="Ready for a Demo?"
        subtitle="See how our CRM can be tailored to your exact needs. Schedule a personalized demo with one of our experts."
        buttonText="Request a Demo"
        buttonLink="/contact-sales"
        backgroundStyle={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e9ecef' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/svg%3E"),linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea)`,
        }}
      />

      <FAQ title="Frequently Asked Questions" faqs={midMarketFaqs} />

    </div>
  );
};

export default MidMarket;
