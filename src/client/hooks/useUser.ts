import type { Route as AdminRoute } from "+/layout.adminLayout";
import type { Route as CustomerRoute } from "+/layout.customerLayout";
import { useMatches } from "react-router";

type AdminUser = AdminRoute.ComponentProps["loaderData"];
type CustomerUser = CustomerRoute.ComponentProps["loaderData"];

function useUser() {
  const matches = useMatches();

  const customerMatchUrl = "main/routes/layout.customerLayout";
  const adminMatchUrl = "main/routes/layout.adminLayout";

  const customerMatch = matches.find((m) => m.id === customerMatchUrl);
  const adminMatch = matches.find((m) => m.id === adminMatchUrl);

  const customer = customerMatch?.loaderData as CustomerUser | undefined;
  const admin = adminMatch?.loaderData as AdminUser | undefined;

  function showTo(role: "customer" | "admin") {
    const user = admin ?? customer;
    if (!user) return false;

    if (user.type === role) return true;
    return false;
  }

  if (customer) return { user: customer, showTo };
  if (admin) return { user: admin, showTo };

  throw new Error("User layout match not found");
}

export { useUser };
