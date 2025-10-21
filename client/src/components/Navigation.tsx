import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Target, Map, Clock } from "lucide-react";

type View = "resumen" | "roadmap" | "calendario" | "dia";

interface NavigationProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const navItems = [
  { id: "resumen" as View, label: "Resumen", icon: Target },
  { id: "roadmap" as View, label: "Roadmap", icon: Map },
  { id: "calendario" as View, label: "Calendario", icon: CalendarIcon },
  { id: "dia" as View, label: "Mi Día", icon: Clock },
];

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  return (
    <motion.nav 
      className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="container mx-auto px-4 py-4 max-w-3xl">
        <div className="flex items-center justify-center bg-card p-2 rounded-full border border-card-border gap-1 relative">
          <motion.div
            className="absolute h-[calc(100%-16px)] bg-primary rounded-full"
            layoutId="activeTab"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: `calc(${100 / navItems.length}% - 8px)`,
              left: `calc(${navItems.findIndex(item => item.id === currentView) * (100 / navItems.length)}% + 4px)`,
            }}
          />
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`
                  relative z-10 flex items-center justify-center gap-1.5
                  px-3 md:px-4 py-2 rounded-full flex-1
                  text-xs md:text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? 'text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                  }
                `}
                data-testid={`nav-${item.id}`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
