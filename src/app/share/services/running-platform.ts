import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RunningPlatform {
  private readonly platformId = inject(PLATFORM_ID);

  server(callback: VoidFunction): void {
    if (isPlatformServer(this.platformId)) {
      callback();
    }
  }

  browser(callback: VoidFunction): void {
    if (isPlatformBrowser(this.platformId)) {
      callback();
    }
  }
}
