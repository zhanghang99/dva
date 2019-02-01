const route = [
  {
    path: "/Index",
    component: () => require("./routes/index.js").default
  },
  {
    path: "/MobileCom",
    component: () => require("./routes/MobileCom").default
  },
  {
    path: "/exception",
    component: () => require("./routes/Exception/Index.js").default
  },
  {
    path: "/exception/401",
    component: () => require("./routes/Exception/403").default
  },
  {
    path: "/exception/403",
    component: () => require("./routes/Exception/403").default
  },
  {
    path: "/exception/404",
    component: () => require("./routes/Exception/404").default
  },
  {
    path: "/exception/500",
    component: () => require("./routes/Exception/500").default
  },
  {
    path: "/exception/trigger",
    component: () => require("./routes/Exception/triggerException").default
  }
];
export default route;
