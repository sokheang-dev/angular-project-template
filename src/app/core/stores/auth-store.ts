import { inject, Injectable, signal } from "@angular/core";
import { SsrCookieService } from "ngx-cookie-service-ssr";
import { jwtDecode } from "jwt-decode";

const JWT = "_jwt";
@Injectable({
  providedIn: "root",
})
export class AuthStore {
  private readonly cookie = inject(SsrCookieService);
  private readonly token = signal(this.cookie.get(JWT));
  private readonly claims = signal<string[]>([]);

  authenticated(): boolean {
    return this.token() !== "";
  }

  setToken(token: string) {
    this.cookie.set(JWT, token);
    this.token.set(token);
    this.decode(token);
  }

  getUsername() {}

  private decode(token: string) {
    const payload = jwtDecode(token);
    console.log(payload);
    const claims: string[] = [];
    this.claims.set(claims);
  }
}
