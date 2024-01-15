export const mobileHeaderEnabled = () =>
  useState("mobileHeaderEnabled", () => false);

export const headerActiveMenuIndex = () =>
  useState("headerActiveMenuIndex", () => -1);

export const testLoadingEnabled = () =>
  useState("testLoadingEnabled", () => false);
