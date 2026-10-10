const prefix = "/citizen";

export const citezenRoutes = [
  {
    title: "Citizen Dashboard",
    items: [
      {
        title: "Home",
        url: `${prefix}`,
      },
      {
        title: "Create Complain",
        url: `${prefix}/create-complain`,
      },
      {
        title: "All Complain",
        url: `${prefix}/all-complain`,
      },
      {
        title: "Approve Complain",
        url: `${prefix}/approve-complain`,
      },
      {
        title: "Payments",
        url: `${prefix}/payments`,
      },
    ],
  },
];
