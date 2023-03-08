type GetAllReturnValue = {
  key: string;
  value: string;
};
type GetReturnValue = string | string[] | undefined;

export interface UseRouteParams {
  get: (param: string) => GetReturnValue;
  getAll: () => GetAllReturnValue[];
  raw: URLSearchParams;
}
