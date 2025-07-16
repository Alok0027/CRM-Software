import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Preloader
import Preloader from './components/Preloader';

// Layouts
import MainLayout from './layout/MainLayout';

// Main Pages
import Home from './pages/Home';
import Login from './pages/Login';
import BlogPage from './pages/Blog';
import BlogOverviewPage from './pages/BlogOverviewPage';
import DesignPrinciplesPost from './pages/DesignPrinciplesPost';
import InfluencerMarketingPost from './pages/InfluencerMarketingPost';
import PricingPage from './pages/PricingPage';
import AboutUs from './pages/Aboutus';
import SiteContact from './pages/Contact';


// Solution Pages
import SmallBusiness from './pages/Solution/SmallBusiness';
import MidMarket from './pages/Solution/MidMarket';
import Enterprises from './pages/Solution/Enterprises';

// Support Pages
import Help from './pages/Support/Help';
import SupportContact from './pages/Support/Contact';
import HelpCenter from './pages/HelpCenter';
import FeaturesPage from './pages/FeaturesPage';
import Documentation from './pages/Support/Documentation';
import ArticlePage from './pages/ArticlePage';
import IntegrationsPage from './pages/IntegrationsPage';
import TermsAndConditions from './pages/TermsAndConditions';
import ConfirmEmail from './pages/ConfirmEmail';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Dashboard (assuming separate layout)
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Task from './pages/Task';
import Setting from './pages/Setting';

const DashboardLayout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Topbar />
      {children}
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Reduced preloader time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          {/* Main Site Layout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="solutions/small-business" element={<SmallBusiness />} />
            <Route path="solutions/mid-market" element={<MidMarket />} />
            <Route path="solutions/enterprise" element={<Enterprises />} />
            <Route path="support/help" element={<Help />} />
            <Route path="support/contact" element={<SupportContact />} />
            <Route path="support/docs" element={<Documentation />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog-overview" element={<BlogOverviewPage />} />
            <Route path="blog/design-principles" element={<DesignPrinciplesPost />} />
            <Route path="blog/influencer-marketing" element={<InfluencerMarketingPost />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact" element={<SiteContact />} />
            <Route path="help-center" element={<HelpCenter />} />
            <Route path="help-center/:slug" element={<ArticlePage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="confirm-email" element={<ConfirmEmail />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Standalone Pages */}

          {/* Dashboard Layout */}
          <Route
            path="/dashboard"
            element={<DashboardLayout><Dashboard /></DashboardLayout>}
          />
          <Route
            path="/dashboard/contacts"
            element={<DashboardLayout><Contacts /></DashboardLayout>}
          />
          <Route
            path="/dashboard/tasks"
            element={<DashboardLayout><Task /></DashboardLayout>}
          />
          <Route
            path="/dashboard/settings"
            element={<DashboardLayout><Setting /></DashboardLayout>}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;