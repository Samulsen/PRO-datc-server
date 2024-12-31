import { mergeClasses } from "@lib-theme";

function useDirectConnectorClass(baseClass: string, activeClass: string) {
  return (isCurrentlySelected: boolean, specialClass: string) => {
    return mergeClasses(
      baseClass,
      specialClass,
      isCurrentlySelected ? activeClass : undefined,
    );
  };
}

export { useDirectConnectorClass };
