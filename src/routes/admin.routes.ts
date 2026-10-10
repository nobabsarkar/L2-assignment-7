const prefix = "/admin";

export const adminRoutes = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Home",
        url: `${prefix}`,
      },
      {
        title: "Users",
        url: `${prefix}/users`,
      },
      {
        title: "All Complain",
        url: `${prefix}/all-complain`,
      },
      {
        title: "Payments",
        url: `${prefix}/payments`,
      },
    ],
  },
];
