import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ParEquity from "./pages/ParEquity";
import AnthuriFund from "./pages/AnthuriFund";
import Parvest from "./pages/Parvest";
import NotFound from "./pages/NotFound";
import TeamMemberPage from "./pages/TeamMemberPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/parequity" element={<ParEquity />} />
          <Route path="/parequity/team/:slug" element={<TeamMemberPage />} />
          <Route path="/anthuri-fund" element={<AnthuriFund />} />
          <Route path="/anthuri-fund/team/:slug" element={<TeamMemberPage />} />
          <Route path="/parvest" element={<Parvest />} />
          <Route path="/parvest/team/:slug" element={<TeamMemberPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
