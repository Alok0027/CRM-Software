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
import DesignPrinciplesPost from './pages/DesignPrinciplesPost';
import InfluencerMarketingPost from './pages/InfluencerMarketingPost';

// Solution Pages
import SmallBusiness from './pages/Solution/SmallBusiness';
import MidMarket from './pages/Solution/MidMarket';
import Enterprises from './pages/Solution/Enterprises';

// Support Pages
import Help from './pages/Support/Help';
import Contact from './pages/Support/Contact';
import Documentation from './pages/Support/Documentation';

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
            <Route path="support/contact" element={<Contact />} />
            <Route path="support/docs" element={<Documentation />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/design-principles" element={<DesignPrinciplesPost />} />
            <Route path="blog/influencer-marketing" element={<InfluencerMarketingPost />} />
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