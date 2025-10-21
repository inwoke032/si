import { Moon, Sun, Bell, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import logoIcon from "@assets/icono-512_1761085347199.png";

interface HeaderProps {
  onExportClick?: () => void;
  onNotificationsClick?: () => void;
  notificationCount?: number;
}

export function Header({ onExportClick, onNotificationsClick, notificationCount = 0 }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <img 
              src={logoIcon} 
              alt="Inwookie Calendario" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-md"
            />
            <div className="hidden md:block">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Plan de Pasantía en IA
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Tu hoja de ruta interactiva hacia el éxito profesional
              </p>
            </div>
            <div className="md:hidden">
              <h1 className="text-lg font-bold text-primary">Plan de Pasantía</h1>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onExportClick}
              className="hover-elevate relative"
              data-testid="button-export"
            >
              <Download className="w-5 h-5" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={onNotificationsClick}
              className="hover-elevate relative"
              data-testid="button-notifications"
            >
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <motion.span 
                  className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  {notificationCount}
                </motion.span>
              )}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="hover-elevate"
              data-testid="button-theme-toggle"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
