import { mergeClasses } from "@lib-theme";

function useEnhancedConnectorClass(baseClass: string, activeClass: string) {
  return (isCurrentlySelected: boolean, specialClass?: string) => {
    return mergeClasses(
      baseClass,
      specialClass,
      isCurrentlySelected ? activeClass : undefined,
    );
  };
}

export { useEnhancedConnectorClass };
