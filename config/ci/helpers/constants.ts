const targetMap = {
  frontendUI: {
    root: "apps/frontend/ui",
    src: "apps/frontend/ui/src",
    tag: "APP_FRONTEND_UI",
  },
  frontendAdmin: {
    root: "apps/frontend/admin",
    src: `apps/frontend/admin/src`,
    tag: "APP_FRONTEND_ADMIN",
  },
  libTheme: {
    root: "libs/theme",
    src: "libs/theme/src",
    tag: "LIBRARY_THEME",
  },
  libComponents: {
    root: "libs/components",
    src: "libs/components/src",
    tag: "LIBRARY_COMPONENTS",
  },
} as const;

export type TTarget = keyof typeof targetMap;

export type TTargetPathOption = "root" | "src";

function selectTarget(target: TTarget, as: TTargetPathOption) {
  return {
    path: targetMap[target][as],
    tag: targetMap[target].tag,
  };
}

export { selectTarget, targetMap };
