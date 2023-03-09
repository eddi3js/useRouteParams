# useRouteParams

This is a lightweight package to quickly pull url search paramters from a URL. It is intended to be used in a React environment

## Installation

```
# npm
npm install useRouteParams

# yarn
yarn add useRouteParams

# pnpm
pnpm install useRouteParams
```

## Usage

Import the `useRouteParams` hook into your component

```
const { get, getAll, raw } = useRouteParams
```

- `get(paramName: string)` - this function will return the value (or array of values) of the parameter entered as a string
- `getAll()` this function returns an array of `{ key: string, value: string }` objects that represents all url parameters that exist
- `raw()` - This function returns the entire `URLSearchParams` object in case you want to utilize the other methods from that interface. See [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) for full list
