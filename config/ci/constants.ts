const target = {
  frontendUI: {
    root: "apps/frontend/ui",
    src: "apps/frontend/ui/src",
  },
  frontendAdmin: {
    root: "apps/frontend/admin",
    src: `apps/frontend/admin/src`,
  },
  libTheme: {
    root: "libs/theme",
    src: "libs/theme/src",
  },
  libComponents: {
    root: "libs/components",
    src: "libs/components/src",
  },
} as const;

export { target };
