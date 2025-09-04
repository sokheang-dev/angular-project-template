import { inject } from "@angular/core";
import { CanActivateFn, RedirectCommand, Router } from "@angular/router";
import { AuthStore } from "../stores/auth-store";

export const unauthenticatedGuard: CanActivateFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  const authenticated = authStore.authenticated();
  if (authenticated) {
    const redirectUrl = router.createUrlTree([""]);
    return new RedirectCommand(redirectUrl, {
      skipLocationChange: false,
    });
  }

  return !authenticated;
};
