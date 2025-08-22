import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Overview from "./pages/Overview";
import NovaAnalise from "./pages/NovaAnalise";
import Equipamentos from "./pages/Equipamentos";
import ML from "./pages/ML";
import QML from "./pages/QML";
import Relatorios from "./pages/Relatorios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            
            <div className="flex-1 flex flex-col">
              <header className="h-16 border-b border-border/50 bg-card/50 backdrop-blur-sm flex items-center px-6">
                <SidebarTrigger className="mr-4" />
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-quantum rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-quantum-foreground rounded-sm"></div>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold bg-gradient-accent bg-clip-text text-transparent">
                      PredictML Platform
                    </h1>
                  </div>
                </div>
              </header>
              
              <main className="flex-1 p-8 overflow-auto">
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/nova-analise" element={<NovaAnalise />} />
                  <Route path="/equipamentos" element={<Equipamentos />} />
                  <Route path="/ml" element={<ML />} />
                  <Route path="/qml" element={<QML />} />
                  <Route path="/relatorios" element={<Relatorios />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
