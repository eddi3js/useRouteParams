import type { UseRouteParams } from "../types";

export default function useRouteParams(): UseRouteParams {
  const searchParams = new URLSearchParams(
    window.location.search?.split("?")[1]
  );

  const get = (param: string) => {
    const allValues = searchParams.getAll(param);
    if (!allValues.length) return undefined;

    return allValues.length === 1 ? allValues[0] : allValues;
  };

  const getAll = () => {
    const entries = searchParams.entries();
    let arr = [];
    for (const entry of entries) {
      const [key, value] = entry;
      arr.push({ key, value });
    }
    return arr;
  };

  return {
    get,
    getAll,
    raw: searchParams,
  };
}
