import appLogo from "./assets/media/images/logo.png";
export const AppRoutes = {
  app: {
    landing: "/",
    contact: "/contact",
    about: "/about",
    faqs: "/faqs"
  },

  user: {
    login: "/login",
    signup: "/signup",
    profile: "/profile",
    adminControlPanel: {
      // Only Admin
      dashboard: "/cpanel-dashboard"
      // Not Completed.
    }
  },

  product: {
    browse: "/browse-product", // Accepts get request with parameter "id", if no parameter it shows all products.
    add: "/add-product", // Only Admins.
    delete: "/delete-product", // Only Admins.
    update: "/update-product" // Only Admins.
  }
};

const AppDetails = {
  title: "laphub",
  formatedTitle: "Laphub",
  version: "1.0 beta",
  description:
    "Computer Store: Laptops - Pcs - Computer Accessories And Hardwares",
  logo: appLogo
};
export default AppDetails;
