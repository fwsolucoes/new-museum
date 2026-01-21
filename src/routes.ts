import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("./main/routes/_index.ts"),
  route("api/file-upload", "./main/routes/api.fileUpload.ts"),
  route("api/logout-user", "./main/routes/api.logoutUser.ts"),
  
  layout("./main/routes/layout.signLayout.tsx", [ 
    ...prefix("customer", [
      route("sign-in", "./main/routes/route.customer.signIn.tsx"),
      route("forgot-password", "./main/routes/route.customer.forgotPassword.tsx"),
      route("forgot-password/:forgotPasswordToken", "./main/routes/route.customer.changeForgotPassword.tsx"),
    ]),
    
    ...prefix("admin", [
      route("sign-in", "./main/routes/route.admin.signIn.tsx"),
    ]),
  ]),

  route("admin", "./main/routes/layout.adminLayout.tsx", [
    route("dashboard", "./main/routes/route.admin.dashboard.tsx"),
    route("customers", "./main/routes/route.admin.customers.tsx"),
    route("wallets", "./main/routes/route.admin.wallets.tsx"),
    route("property-owners", "./main/routes/route.admin.propertyOwners.tsx"),
    route("properties/:propertyId", "./main/routes/route.admin.property.tsx"),
    route("properties", "./main/routes/route.admin.properties.tsx"),
    route("properties/create", "./main/routes/route.admin.createProperty.tsx"),
    route("properties/:propertyId/update", "./main/routes/route.admin.updateProperty.tsx")
  ]),

  route("customer", "./main/routes/layout.customerLayout.tsx", [
    route("dashboard", "./main/routes/route.customer.dashboard.tsx"),
    route("properties", "./main/routes/route.customer.properties.tsx"),
    route("properties/:propertyId", "./main/routes/route.customer.property.tsx"),
  ]),
] satisfies RouteConfig;