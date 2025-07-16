import small1 from '../../assets/small1.jpg';
const pain1 = '/crmp1.jpeg';
const pain2 = '/crmp2.jpeg';
const pain3 = '/crmp3.jpeg';
import { Zap, Users, BarChart2, Smile, Eye, Bell, MessageSquare, Target } from 'lucide-react';
import Painpoints from "../../components/Painpoints";
import KeyBenefits from "../../components/KeyBenefits";
import Testimonials from '../../components/Testimonials';
import MiniFeatureOverview from '../../components/MiniFeatureOverview';
import PricingPrompt from '../../components/PricingPrompt';
import FAQ from '../../components/FAQ';


const FeatureCard = ({ icon, title, description }) => (
<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
<div className="p-4 bg-orange-100 rounded-full mb-4">
{icon}
</div>
<h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
<p className="text-gray-600">{description}</p>
</div>
);

const smallBusinessPainPoints = [
  {
    img: pain1,
    title: 'Losing track of leads?',
    text: 'Our CRM captures every lead, so you never miss an opportunity. Say goodbye to scattered notes and hello to a centralized lead database.',
  },
  {
    img: pain2,
    title: 'Wasting time on manual data entry?',
    text: 'Automate your data entry and repetitive tasks. Spend more time selling and less time on administrative work.',
  },
  {
    img: pain3,
    title: 'Struggling with team collaboration?',
    text: 'Keep your team on the same page with shared contacts, notes, and deal pipelines. Close deals faster, together.',
  },
];

const smallBusinessBenefits = [
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: 'Get Started in Minutes',
    description: 'No long setups. No complicated configurations. Sign up and start managing your customer relationships instantly.',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Built for Collaboration',
    description: 'Our CRM is designed for small teams. Share contacts, deals, and notes effortlessly to keep everyone in sync.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-white" />,
    title: 'Track What Matters',
    description: 'Focus on the metrics that drive your business. Our simple dashboards give you a clear view of your sales pipeline.',
  },
  {
    icon: <Smile className="h-8 w-8 text-white" />,
    title: 'Affordable & Transparent',
    description: 'No hidden fees or surprise charges. Our pricing is simple, straightforward, and designed for small business budgets.',
  },
];

const smallBusinessFeatures = [
  {
    icon: <Eye size={28} className="text-white" />,
    title: 'Visual Sales Pipeline',
    description: 'Track deals at a glance and forecast revenue with a clear, drag-and-drop pipeline.',
  },
  {
    icon: <Bell size={28} className="text-white" />,
    title: 'Task Reminders',
    description: 'Never miss a follow-up. Get automatic reminders for important tasks and meetings.',
  },
  {
    icon: <Users size={28} className="text-white" />,
    title: 'Contact Management',
    description: 'Keep all customer information in one place, from emails to call notes.',
  },
  {
    icon: <MessageSquare size={28} className="text-white" />,
    title: 'Shared Notes & Comments',
    description: 'Collaborate with your team in real-time to close deals faster.',
  },
  {
    icon: <Target size={28} className="text-white" />,
    title: 'Lead Tracking',
    description: 'Capture and track leads from any source, ensuring no opportunity is missed.',
  },
];

const smallBusinessFaqs = [
  {
    question: 'Do I need technical skills to use this CRM?',
    answer: 'Not at all! Our CRM is designed to be intuitive and user-friendly. If you can use email, you can use our platform. We also have a friendly support team ready to help if you have any questions.',
  },
  {
    question: 'Is it really free for small teams?',
    answer: 'Yes, our free plan is perfect for small teams getting started. It includes all the essential features you need to manage your contacts and deals. You can upgrade to a paid plan as your team grows.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time, no questions asked. There are no long-term contracts or hidden fees.',
  },
];

const SmallBusiness = () => {
return (
<div>
<div className="relative w-screen h-[600px] overflow-hidden">
<img
src={small1}
alt="Small Business"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 md:px-10">
<h1 className="text-white text-3xl md:text-5xl font-medium mb-4 leading-tight">
Run your business.
<br />
We’ll handle your customers.
</h1>
<p className="text-white font-medium text-lg md:text-xl mb-6">
Simple. Affordable. Built for small teams.
</p>
<div className="flex gap-4 flex-wrap justify-center">
<button className="bg-white text-gray-900 font-medium px-5 py-2 rounded-md shadow hover:bg-gray-200 transition">
Try for Free
</button>
<button className="bg-transparent border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition">
See Demo
</button>
</div>
</div>
</div>
  <Painpoints painPointsData={smallBusinessPainPoints} title="Solving Your Biggest Challenges" />
  <KeyBenefits 
    title="Why Choose Us?"
    subtitle="Everything you need. Nothing you don't."
    description="Our CRM is packed with features to help you grow, but simple enough that you'll actually use it."
    benefits={smallBusinessBenefits} 
    backgroundStyle={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e9ecef' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/svg%3E"),linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea)`,
      position: 'relative',
    }}
  />
  <Testimonials />
  <MiniFeatureOverview 
    title="Everything You Need"
    subtitle="Features Built for Small Business Success"
    description="Focus on what matters most. Our CRM provides the essential tools to help you grow without the complexity."
    features={smallBusinessFeatures}
  />
  <PricingPrompt 
    title="Ready to simplify your sales process?"
    subtitle="Start your free trial today. No credit card required."
    buttonText="Start free trial"
    backgroundStyle={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e9ecef' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/svg%3E"),linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea)`,
    }}
  />
  <FAQ title="Frequently asked questions" faqs={smallBusinessFaqs} />
</div>
);
};

export default SmallBusiness;