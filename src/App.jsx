import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Preloader from './components/Preloader';

import MainLayout from './layout/MainLayout';

import Home from './pages/Home';
import Login from './pages/Login';
import BlogPage from './pages/Blog';
import BlogOverviewPage from './pages/BlogOverviewPage';
import DesignPrinciplesPost from './pages/DesignPrinciplesPost';
import InfluencerMarketingPost from './pages/InfluencerMarketingPost';
import PricingPage from './pages/PricingPage';
import AboutUs from './pages/Aboutus';
import SiteContact from './pages/Contact';


import SmallBusiness from './pages/Solution/SmallBusiness';
import MidMarket from './pages/Solution/MidMarket';
import Enterprises from './pages/Solution/Enterprises';

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
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Task from './pages/Task';
import Setting from './pages/Setting';
import Marketplace from './pages/DashboardPages/Marketplace';
import AnalyticsDashboard from './pages/DashboardPages/Tables';
import Kanban from './pages/DashboardPages/Kanban';
import Leads from './pages/DashboardPages/Leads';
import Profile from './pages/DashboardPages/Profile';
import Market from './pages/DashboardPages/Market';
import Opportunity from './pages/DashboardPages/Opportunity';

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
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
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
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<SiteContact />} />
            <Route path="help-center" element={<HelpCenter />} />
            <Route path="help-center/:slug" element={<ArticlePage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="confirm-email" element={<ConfirmEmail />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>

          
          <Route
            path="/dashboard"
            element={<DashboardLayout><Dashboard /></DashboardLayout>}
          />
          <Route
            path="/contacts"
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
          <Route
            path="/dashboard/marketplace"
            element={<DashboardLayout><Marketplace /></DashboardLayout>}
          />
          <Route path="/dashboard/tables" element={<Navigate to="/dashboard/analytics" replace />} />
          <Route
            path="/dashboard/analytics"
            element={<DashboardLayout><AnalyticsDashboard /></DashboardLayout>}
          />
          <Route
            path="/dashboard/kanban"
            element={<DashboardLayout><Kanban /></DashboardLayout>}
          />
          <Route
            path="/leads"
            element={<DashboardLayout><Leads /></DashboardLayout>}
          />
          <Route
            path="/dashboard/profile"
            element={<DashboardLayout><Profile /></DashboardLayout>}
          />
          <Route
            path="/opportunity"
            element={<DashboardLayout><Opportunity /></DashboardLayout>}
          />
          <Route
            path="/market"
            element={<DashboardLayout><Market /></DashboardLayout>}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;