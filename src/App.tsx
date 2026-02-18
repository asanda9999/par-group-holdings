import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialLoadLoader from "@/components/InitialLoadLoader";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ParEquity from "./pages/ParEquity";
import AnthuriFund from "./pages/AnthuriFund";
import Parvest from "./pages/Parvest";
import NotFound from "./pages/NotFound";
import TeamMemberPage from "./pages/TeamMemberPage";
import PortfolioDetailPage from "./pages/PortfolioDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <InitialLoadLoader />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
