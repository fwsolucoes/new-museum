import {
  createCookieSessionStorage,
  redirect,
  type SessionIdStorageStrategy,
} from "react-router";

import type { RouteDTO } from "~/main/types/route";
import type { User } from "~/main/types/user";
import { name } from "../../../package.json";
import { RedirectServerAdapter } from "../adapters/redirectServerAdapter";

const SESSION_OPTIONS: SessionIdStorageStrategy["cookie"] = {
  sameSite: "lax",
  path: "/",
  httpOnly: true,
  secrets: ["s3cr3t"],
  secure: process.env.NODE_ENV === "production",
};

class AuthService {
  private static authStorageCookie = createCookieSessionStorage({
    cookie: { ...SESSION_OPTIONS, name: `${name}-admin-auth` },
  });

  static async getAuthStorage(route: RouteDTO): Promise<User | null> {
    const { getSession } = this.authStorageCookie;
    const session = await getSession(route.request.headers.get("cookie"));
    const userJson = session.get("user");

    if (!userJson) return null;
    return userJson;
  }

  static async setAuthStorage(route: RouteDTO, user: User, to?: string) {
    const { getSession, commitSession } = this.authStorageCookie;

    const session = await getSession(route.request.headers.get("cookie"));
    session.set("user", user);

    if (to) {
      return RedirectServerAdapter.to(to, {
        headers: { "Set-Cookie": await commitSession(session) },
      });
    }

    return Response.json(
      { closeModalKey: "registrationModal" },
      { headers: { "Set-Cookie": await commitSession(session) } },
    );
  }

  static async destroyAuthStorage(user: User, route: RouteDTO) {
    const { getSession, destroySession } = this.authStorageCookie;

    const session = await getSession(route.request.headers.get("cookie"));

    const redirectUrl = "/sign-in";

    return redirect(redirectUrl, {
      headers: { "Set-Cookie": await destroySession(session) },
    });
  }
}

export { AuthService };
