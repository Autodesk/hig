import ButtonsPage from "./pages/ButtonsPage";
import FlyoutPage from "./pages/FlyoutPage";
import CheckboxPage from "./pages/CheckboxPage";
import InputPage from "./pages/InputPage";

export default [
  { path: "/button/", component: ButtonsPage, label: "Button" },
  { path: "/flyout/", component: FlyoutPage, label: "Flyout" },
  { path: "/checkbox/", component: CheckboxPage, label: "Checkbox" },
  { path: "/input/", component: InputPage, label: "Input" }
];
