import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NotFound from "@/pages/not-found";

import { Pulvent } from "@/pages/Pulvent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Pulvent} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </LanguageProvider>
  );
}

export default App;
