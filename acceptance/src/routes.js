import AvatarPage from "./pages/AvatarPage";
import ButtonsPage from "./pages/ButtonsPage";
import FlyoutPage from "./pages/FlyoutPage";
import CheckboxPage from "./pages/CheckboxPage";
import IconsPage from "./pages/IconsPage";
import InputPage from "./pages/InputPage";
import ProgressBarPage from "./pages/ProgressBarPage";
import RadioButtonPage from "./pages/RadioButtonPage";
import SliderPage from "./pages/SliderPage";
import TextLinkPage from "./pages/TextLinkPage";
import TooltipPage from "./pages/TooltipPage";
import TypographyPage from "./pages/TypographyPage";

export default [
  { path: "/avatar/", component: AvatarPage, label: "Avatar" },
  { path: "/button/", component: ButtonsPage, label: "Button" },
  { path: "/flyout/", component: FlyoutPage, label: "Flyout" },
  { path: "/checkbox/", component: CheckboxPage, label: "Checkbox" },
  { path: "/icons/", component: IconsPage, label: "Icons" },
  { path: "/input/", component: InputPage, label: "Input" },
  { path: "/progress-bar/", component: ProgressBarPage, label: "ProgressBar" },
  { path: "/radio-button/", component: RadioButtonPage, label: "Radio Button" },
  { path: "/slider/", component: SliderPage, label: "Slider" },
  { path: "/text-link/", component: TextLinkPage, label: "Text Link" },
  { path: "/tooltip/", component: TooltipPage, label: "Tooltip" },
  { path: "/typogrpahy/", component: TypographyPage, label: "Typography" }
];
