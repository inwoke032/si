export type KeyboardShortcut = {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  description: string;
  handler: () => void;
};

export function registerKeyboardShortcuts(shortcuts: KeyboardShortcut[]) {
  const handleKeyPress = (event: KeyboardEvent) => {
    shortcuts.forEach(shortcut => {
      const ctrlMatch = shortcut.ctrlKey === undefined || shortcut.ctrlKey === event.ctrlKey;
      const altMatch = shortcut.altKey === undefined || shortcut.altKey === event.altKey;
      const shiftMatch = shortcut.shiftKey === undefined || shortcut.shiftKey === event.shiftKey;
      const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase();
      
      if (ctrlMatch && altMatch && shiftMatch && keyMatch) {
        event.preventDefault();
        shortcut.handler();
      }
    });
  };
  
  window.addEventListener('keydown', handleKeyPress);
  
  return () => {
    window.removeEventListener('keydown', handleKeyPress);
  };
}
