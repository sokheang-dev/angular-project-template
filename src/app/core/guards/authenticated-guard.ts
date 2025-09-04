import { inject } from "@angular/core";
import { CanActivateFn, RedirectCommand, Router } from "@angular/router";
import { AuthStore } from "../stores/auth-store";

export const authenticatedGuard: CanActivateFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  const authenticated = authStore.authenticated();
  if (!authenticated) {
    const redirectUrl = router.createUrlTree(["/login"]);
    return new RedirectCommand(redirectUrl, {
      skipLocationChange: false,
    });
  }

  return authenticated;
};
