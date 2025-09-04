import { inject, Injectable } from "@angular/core";
import { SsrCookieService } from "ngx-cookie-service-ssr";

@Injectable({
    providedIn: 'root'
})
export class AuthStore {
    private readonly cookie = inject(SsrCookieService);


}