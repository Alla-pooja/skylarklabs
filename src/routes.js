import Capabilities from "./Capabilities";
import Contact from "./Contact";
import Homepage from "./HomePage";
// import Overview from "./home/sections/overview";
import AboutPlatform from "./AboutPlatform";
import PastPerform from "./PastPerform";
// import Capabilities from "capabilities/capabilities";
// import ContactUs from "contact/ContactUs";
// import Page1 from "somepage/Page1";
// import Page2 from "somepage/Page2";
// import Page3 from "somepage/Page3";

export const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/home",
    component: Homepage,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/capabilities",
    component: Capabilities,
  },
  {
    path: "/aboutplatform",
    component: AboutPlatform
    
  },
  {
    path: "/performance",
    component: PastPerform
    
  },
//   {
//     path: "/page3",
//     component: Page3,
//   },
];
