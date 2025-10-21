// PWA Service Worker Registration and Utilities

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // In development, service workers might not work as expected
      // We'll try to register but won't fail if it doesn't work
      const swPath = import.meta.env.DEV ? '/sw.js' : '/sw.js';
      
      navigator.serviceWorker
        .register(swPath, { scope: '/' })
        .then((registration) => {
          console.log('✅ Service Worker registered:', registration.scope);
          
          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute
        })
        .catch((error) => {
          // In development, this is expected and OK
          if (import.meta.env.DEV) {
            console.log('ℹ️ Service Worker not available in development mode');
          } else {
            console.error('❌ Service Worker registration failed:', error);
          }
        });
    });
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
}

export async function showNotification(title: string, options?: NotificationOptions) {
  const hasPermission = await requestNotificationPermission();
  
  if (!hasPermission) {
    console.log('Notification permission not granted');
    return;
  }

  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready;
    registration.showNotification(title, {
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      vibrate: [200, 100, 200],
      ...options,
    });
  } else {
    new Notification(title, options);
  }
}

export function isInstalled(): boolean {
  // Check if app is running in standalone mode
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  
  // Check if running as installed PWA
  if ((window.navigator as any).standalone) {
    return true;
  }
  
  return isStandalone;
}

export function canInstall(): boolean {
  return !isInstalled() && 'serviceWorker' in navigator;
}
