import { useState, useEffect } from "react";

export function useLocalStorage(storageName = "value") {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(storageName);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(
    function () {
      localStorage.setItem(storageName, [JSON.stringify(value)]);
    },
    [value, storageName]
  );

  return [value, setValue];
}
