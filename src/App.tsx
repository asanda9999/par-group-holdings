import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialLoadLoader from "@/components/InitialLoadLoader";
import ScrollToTop from "@/components/ScrollToTop";
import { lazy, Suspense } from 'react';

// Lazy load components for code splitting
const Index = lazy(() => import("./pages/Index"));
const ParEquity = lazy(() => import("./pages/ParEquity"));
const AnthuriFund = lazy(() => import("./pages/AnthuriFund"));
const Parvest = lazy(() => import("./pages/Parvest"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TeamMemberPage = lazy(() => import("./pages/TeamMemberPage"));
const PortfolioDetailPage = lazy(() => import("./pages/PortfolioDetailPage"));
const Maintenance = lazy(() => import("./pages/Maintenance"));

const queryClient = new QueryClient();

// Set this to true to enable maintenance mode
const MAINTENANCE_MODE = false;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <InitialLoadLoader />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        }>
          <Routes>
            {MAINTENANCE_MODE ? (
              <Route path="*" element={<Maintenance />} />
            ) : (
              <>
                <Route path="/" element={<Index />} />
                <Route path="/parequity" element={<ParEquity />} />
                <Route path="/parequity/team/:slug" element={<TeamMemberPage />} />
                <Route path="/parequity/portfolio/:slug" element={<PortfolioDetailPage />} />
                <Route path="/anthuri-fund" element={<AnthuriFund />} />
                <Route path="/anthuri-fund/team/:slug" element={<TeamMemberPage />} />
                <Route path="/anthuri-fund/portfolio/:slug" element={<PortfolioDetailPage />} />
                <Route path="/parvest" element={<Parvest />} />
                <Route path="/parvest/team/:slug" element={<TeamMemberPage />} />
                <Route path="/parvest/portfolio/:slug" element={<PortfolioDetailPage />} />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
