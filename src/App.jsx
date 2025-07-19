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
import ApiReference from './pages/ApiReference';
import StatusPage from './pages/StatusPage';
import Changelog from './pages/Changelog';
import Security from './pages/Security';
import SystemStatus from './pages/SystemStatus';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Setting from './pages/Setting';
import Marketplace from './pages/DashboardPages/Marketplace';
import AnalyticsDashboard from './pages/DashboardPages/Tables';
import Kanban from './pages/DashboardPages/Kanban';
import Leads from './pages/DashboardPages/Leads';
import Profile from './pages/DashboardPages/Profile';
import Market from './pages/DashboardPages/Market';
import Opportunity from './pages/DashboardPages/Opportunity';
import Automation from './pages/DashboardPages/Automation';
import DataIntegration from './pages/DashboardPages/DataManagement/Dataintegration';
import DataModel from './pages/DashboardPages/DataManagement/DataModel';
import DataEnrichment from './pages/DashboardPages/DataManagement/Dataenrichment';
import DataSets from './pages/DashboardPages/DataManagement/DataSets';
import Task from './pages/DashboardPages/Task';

const DashboardLayout = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
      <div
        className={`transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`}>
        <Topbar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

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
            
            {/* Resource Pages */}
            <Route path="documentation" element={<Documentation />} />
            <Route path="api-reference" element={<ApiReference />} />
            <Route path="status" element={<StatusPage />} />
            <Route path="changelog" element={<Changelog />} />
            <Route path="security" element={<Security />} />
            <Route path="system-status" element={<SystemStatus />} />
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
          <Route
            path="/automation"
            element={<DashboardLayout><Automation /></DashboardLayout>}
          />
          <Route
            path="/data-integration"
            element={<DashboardLayout><DataIntegration /></DashboardLayout>}
          />
          <Route
            path="/data-model"
            element={<DashboardLayout><DataModel /></DashboardLayout>}
          />
          <Route
            path="/data-enrichment"
            element={<DashboardLayout><DataEnrichment /></DashboardLayout>}
          />
          <Route
            path="/data-sets"
            element={<DashboardLayout><DataSets /></DashboardLayout>}
          />

        <Route
          path="/Task"
          element={<DashboardLayout><Task /></DashboardLayout>}
        />



        </Routes>
      )}
    </div>
  );
}

export default App;