import { Switch, Router } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import PricingPage from "../Pages/PricingPage";
import ContactPage from "../Pages/ContactPage";
export default function PageContent() {
  return (
    <Switch>
      <Router path="/home">
        <HomePage />
      </Router>
      <Router path="/product">
        <ProductPage />
      </Router>
      <Router path="/pricing">
        <PricingPage />
      </Router>
      <Router path="/contact">
        <ContactPage />
      </Router>
    </Switch>
  );
}
