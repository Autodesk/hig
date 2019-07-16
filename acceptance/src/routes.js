import AvatarPage from "./pages/AvatarPage";
import BannerPage from "./pages/BannerPage";
import ButtonsPage from "./pages/ButtonsPage";
import FlyoutPage from "./pages/FlyoutPage";
import CheckboxPage from "./pages/CheckboxPage";
import DropdownPage from "./pages/DropdownPage";
import IconnButtonsPage from "./pages/IconButtonsPage";
import IconsPage from "./pages/IconsPage";
import InputPage from "./pages/InputPage";
import LabelPage from "./pages/LabelPage";
import ModalPage from "./pages/ModalPage";
import MuiButtonsPage from "./pages/material-ui/ButtonsPage";
import ProgressBarPage from "./pages/ProgressBarPage";
import ProgressRingPage from "./pages/ProgressRingPage";
import RadioButtonPage from "./pages/RadioButtonPage";
import RichTextPage from "./pages/RichTextPage";
import SliderPage from "./pages/SliderPage";
import TabsPage from "./pages/TabsPage";
import TextAreaPage from "./pages/TextAreaPage";
import TextLinkPage from "./pages/TextLinkPage";
import TooltipPage from "./pages/TooltipPage";
import TypographyPage from "./pages/TypographyPage";

export default [
  { path: "/avatar/", component: AvatarPage, label: "Avatar" },
  { path: "/button/", component: ButtonsPage, label: "Button" },
  { path: "/banner/", component: BannerPage, label: "Banner" },
  { path: "/dropdown/", component: DropdownPage, label: "Dropdown" },
  { path: "/flyout/", component: FlyoutPage, label: "Flyout" },
  { path: "/checkbox/", component: CheckboxPage, label: "Checkbox" },
  { path: "/icons/", component: IconsPage, label: "Icons" },
  { path: "/icon-button/", component: IconnButtonsPage, label: "Icon Button" },
  { path: "/input/", component: InputPage, label: "Input" },
  { path: "/label/", component: LabelPage, label: "Label"},
  { path: "/modal/", component: ModalPage, label: "Modal" },
  { path: "/progress-bar/", component: ProgressBarPage, label: "Progress Bar" },
  { path: "/progress-ring/", component: ProgressRingPage, label: "Progress Ring" },
  { path: "/radio-button/", component: RadioButtonPage, label: "Radio Button" },
  { path: "/rich-text/", component: RichTextPage, label: "Rich Text" },
  { path: "/slider/", component: SliderPage, label: "Slider" },
  { path: "/tabs/", component: TabsPage, label: "Tabs" },
  { path: "/text-area/", component: TextAreaPage, label: "Text Area" },
  { path: "/text-link/", component: TextLinkPage, label: "Text Link" },
  { path: "/tooltip/", component: TooltipPage, label: "Tooltip" },
  { path: "/typography/", component: TypographyPage, label: "Typography" },
  { path: "/material-ui/buttons/", component: MuiButtonsPage, label: "Material Buttons" },
];
