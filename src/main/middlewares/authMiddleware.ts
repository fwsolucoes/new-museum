import { RedirectServerAdapter } from "~/infra/adapters/redirectServerAdapter";
import { AuthService } from "~/infra/services/authService";
import type { RouteDTO } from "../types/route";

class AuthMiddleware {
  static async authenticate(route: RouteDTO) {
    const user = await AuthService.getAuthStorage(route);
    if (!user) throw RedirectServerAdapter.to("/customer/sign-in");

    const url = new URL(route.request.url);
    const routeBase = url.pathname.trim().split("/")[1];

    if (user.type === "customer" && routeBase === "admin") {
      throw RedirectServerAdapter.to("/admin/sign-in");
    }

    if (user.type === "admin" && routeBase === "customer") {
      throw RedirectServerAdapter.to("/customer/sign-in");
    }

    return user;
  }

  static async getUser(route: RouteDTO) {
    const user = await AuthService.getAuthStorage(route);
    if (!user) return null;
    return user;
  }

  static async logoutUser(route: RouteDTO) {
    const user = await AuthService.getAuthStorage(route);
    if (!user) return null;

    return await AuthService.destroyAuthStorage(user, route);
  }
}

export { AuthMiddleware };
