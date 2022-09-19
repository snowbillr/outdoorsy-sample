import { useEffect, useState } from "react";

export const IconRotator = ({ children }) => {
  const icons = children.length ? children : [children];
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIconIndex((i) => (i + 1) % icons.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [children]);

  return children[iconIndex];
};
