const prefix = "/service-worker";

export const serviceWorkerRoutes = [
  {
    title: "Service Worker Routes",
    url: "#",
    items: [
      {
        title: "Home",
        url: `${prefix}`,
      },
      {
        title: "Complain",
        url: `${prefix}/complain`,
      },
      {
        title: "Proof Complain",
        url: `${prefix}/proof-complain`,
      },
    ],
  },
];
