
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignupCustomer from "./pages/SignupCustomer";
import SignupWorker from "./pages/SignupWorker";
import CustomerDashboard from "./pages/CustomerDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";
import Chat from "./pages/Chat";
import Help from "./pages/Help";
import HowToBook from "./pages/HowToBook";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import CustomerSupport from "./pages/CustomerSupport";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WorkerProfile from "./pages/WorkerProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup-customer" element={<SignupCustomer />} />
              <Route path="/signup-worker" element={<SignupWorker />} />
              <Route path="/customer-dashboard" element={<CustomerDashboard />} />
              <Route path="/worker-dashboard" element={<WorkerDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/services" element={<Services />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/help" element={<Help />} />
              <Route path="/how-to-book" element={<HowToBook />} />
              <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
              <Route path="/customer-support" element={<CustomerSupport />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/worker-profile/:workerId" element={<WorkerProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
