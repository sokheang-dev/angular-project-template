import { Routes } from "@angular/router";
import { authenticatedGuard } from "./core/guards/authenticated-guard";
import { unauthenticatedGuard } from "./core/guards/unauthenticated-guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./features/home/home").then((m) => m.Home),
    canActivate: [authenticatedGuard],
  },
  {
    path: "login",
    loadComponent: () => import("./features/login/login").then((m) => m.Login),
    canActivate: [unauthenticatedGuard],
  },
];
