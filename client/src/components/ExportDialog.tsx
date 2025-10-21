import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, FileJson, FileText, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useTaskProgress } from "@/hooks/useTaskProgress";
import { exportAsJSON, exportAsICalendar, exportAsPDF } from "@/lib/export";
import { useToast } from "@/hooks/use-toast";

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExportDialog({ open, onOpenChange }: ExportDialogProps) {
  const { taskProgress, streakData } = useTaskProgress();
  const { toast } = useToast();

  const handleExport = (format: 'json' | 'pdf' | 'ical') => {
    try {
      switch (format) {
        case 'json':
          exportAsJSON(taskProgress, streakData);
          break;
        case 'pdf':
          exportAsPDF();
          break;
        case 'ical':
          exportAsICalendar();
          break;
      }
      
      toast({
        title: "Exportación exitosa",
        description: `Tu plan de pasantía se ha exportado como ${format.toUpperCase()}`,
      });
      
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error en la exportación",
        description: "Hubo un problema al exportar tus datos. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  const exportOptions = [
    {
      id: 'json',
      title: 'Exportar como JSON',
      description: 'Descarga todos tus datos en formato JSON para respaldo',
      icon: FileJson,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      id: 'pdf',
      title: 'Exportar como PDF',
      description: 'Genera un reporte PDF de tu plan de pasantía',
      icon: FileText,
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
    },
    {
      id: 'ical',
      title: 'Exportar como iCal',
      description: 'Importa tu calendario a Google Calendar o Outlook',
      icon: Calendar,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Exportar Datos</DialogTitle>
          <DialogDescription>
            Elige el formato en el que deseas exportar tu plan de pasantía
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 mt-4">
          {exportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto p-4 hover-elevate"
                  onClick={() => handleExport(option.id as any)}
                  data-testid={`export-${option.id}`}
                >
                  <div className={`p-2 rounded-md ${option.bgColor} mr-3`}>
                    <Icon className={`w-5 h-5 ${option.color}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold">{option.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {option.description}
                    </div>
                  </div>
                  <Download className="w-4 h-4 ml-2 text-muted-foreground" />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
