import "./Footer.css";
import { useFilters } from "../hooks/useFilters"

export const Footer = () => {
  const { filters } = useFilters()
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>Project React ⚛️</h4>
        <span>Yeison Perea</span>
        <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
};
