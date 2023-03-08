import useRouteParams from "./lib";

function App() {
  const { get, getAll } = useRouteParams();
  return (
    <main>
      <p>Get: {JSON.stringify(get("modal"))}</p>
      <p>GetAll: {JSON.stringify(getAll())}</p>
    </main>
  );
}

export default App;
