import { useEffect, useState } from "react";

function useFuiProviderNode() {
  const [node, setNode] = useState<Element | null>(null);
  useEffect(() => {
    const fuiNode = document.querySelector(".fui-FluentProvider");
    setNode(fuiNode);
  }, []);
  return { fuiProviderNode: node };
}

export { useFuiProviderNode };
