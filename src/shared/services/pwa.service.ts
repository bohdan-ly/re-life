export class PwaService {
  public installed: any;
  public cancelled: any;
  public beforeinstallprompt: any;

  private deferredPrompt: any;

  constructor() {
    window.addEventListener('appinstalled', (evt) => {
      this.deferredPrompt = null;
      this.installed = true;
    });

    window.addEventListener('beforeinstallprompt', (e: any) => {
      //console.log('Can install PWA and call prompt()');
      e.preventDefault();

      this.deferredPrompt = e;
      this.beforeinstallprompt = true;

      // e.userChoice will return a Promise. For more details read: http://www.html5rocks.com/en/tutorials/es6/promises/
      e.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'dismissed') {
          //console.log('User cancelled homescreen install');
          //EventBus.$emit('pwa.cancelled');
          this.deferredPrompt = null;
          this.cancelled = true;
        } else {
          //console.log('User added to homescreen');
        }
      });
    });
  }

  install() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
    }
  }

  /**
   * Notification
   * @param title
   * @param body
   * @param url
   */
  notify(title: string, body: string, url: string | null = null) {
    const options = {
      body: body,
      title,
      icon: '/icons/icon-192x192.png',
      data: {
        url: url ? url : window.location.href,
      },
    };

    void navigator.serviceWorker.ready.then((registration: any) => {
      registration.active.postMessage({
        name: 'push',
        ...options,
      });
    });
  }

  close() {
    this.deferredPrompt = null;
    this.beforeinstallprompt = false;
    this.installed = false;
    this.cancelled = true;
  }
}

const PWA = new PwaService();
export { PWA };
