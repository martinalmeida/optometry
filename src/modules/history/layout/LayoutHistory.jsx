import Dashboard from "../../shared/components/Dashboard.jsx";

export default function App({ children }) {
  return (
    <Dashboard titulo="Página de Historias clinicas">{children}</Dashboard>
  );
}
