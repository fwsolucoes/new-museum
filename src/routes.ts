import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("./main/routes/_index.ts"),
  route("api/file-upload", "./main/routes/api.fileUpload.ts"),
  route("api/logout-user", "./main/routes/api.logoutUser.ts"),
  
  layout("./main/routes/layout.signLayout.tsx", [
    route("sign-in", "./main/routes/route.admin.signIn.tsx"),
    route("forgot-password", "./main/routes/route.forgotPassword.tsx"),
    route("change-forgot-password", "./main/routes/route.changeForgotPassword.tsx"),
  ]),
  
  layout("./main/routes/layout.publicLayout.tsx", [
    route("item/:id", "./main/routes/route.item.$id.tsx"),
  ]),

  route("panel", "./main/routes/layout.panelLayout.tsx", [
    route("items", "./main/routes/route.items.tsx"),
    route("item/new", "./main/routes/route.createItem.tsx"),
    route("item/:id/update", "./main/routes/route.updateItem.tsx"),
    route("dashboard", "./main/routes/route.admin.dashboard.tsx"),
    route("customers", "./main/routes/route.admin.customers.tsx"),
    route("wallets", "./main/routes/route.admin.wallets.tsx"),
    route("property-owners", "./main/routes/route.admin.propertyOwners.tsx"),
    route("properties/:propertyId", "./main/routes/route.admin.property.tsx"),
    route("properties", "./main/routes/route.admin.properties.tsx"),
    route("properties/create", "./main/routes/route.admin.createProperty.tsx"),
    route("properties/:propertyId/update", "./main/routes/route.admin.updateProperty.tsx")
  ]),

] satisfies RouteConfig;