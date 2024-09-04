import React, { useEffect, useState } from "react";
import { Route,Switch, BrowserRouter, Redirect } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import "animate.css";
// import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./theme";
// import GlobalCss from "./styles/jss/GlobalCss";
import GlobalCss from "./styles/GlobalCss";

import { routes } from "./routes";
import Header from "./Header";
import Footermenu from "./FooterMenu";
// import HelpingForm from "HelpingForm";
import ScrollToTop from "./ScrollToTop";
import AdminPanel from "./blog/admin/AdminPanel";


function App() {
  const animationSpeed = 2000;
  const [isLoading, setLoading] = useState(true);
  const [isRemoved, setRemoved] = useState(false);
  const [opacity, setOpacity] = useState(0.4);
  const [mainstyle, setmainstyle] = useState({
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: opacity * 2,
    backgroundColor: "#121212", // Background color for the entire app
  });
  function removeFadeOut(el, speed) {
    var seconds = speed / 1000;
    // el.style.transition = "opacity " + seconds + "s ease";
    // el.style.opacity = 0;
    setTimeout(function () {
      // el.parentNode.removeChild(el);
      setmainstyle({});
    }, speed);
    // window.scrollTo(0, contactRef.current.offsetTop);
  }
  function removeFadeIn(speed) {
    var seconds = speed / 1000;
    setOpacity(seconds);
    setTimeout(function () { }, speed);
  }

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        if (!isRemoved) {
          removeFadeIn(1000);
          setRemoved(true);
          removeFadeOut(document.getElementById("style-id"), 1000);
        }
        setLoading(false);
      }, animationSpeed);

    // }, 1);
    const timerId = timer();
    return () => {
      clearTimeout(timerId);
    };
  });

  const contactRef = React.useRef();
  // const location = useLocation();
  const scrollToView = () => {
    // console.log('got to contact')
    // contactRef.current.scrollIntoView();
    // console.log(contactRef.current.offsetTop);
    // window.scrollTo(0, contactRef.current.offsetTop);
  };
  useEffect(() => {
    // if (isLoading) {
    if (window.location.href.indexOf("/#contact") != -1) {
      // scrollToView()
      console.log("go to contact");
      // document.location.reload(true)
      // document.getElementById("contact")
      contactRef.current.scrollIntoView();
      // $('html, body').animate({
      // scrollTop: $("#contact").offset().top
      // }, 1000);
      // document.getElementById("contact").scrollTo(0, 200)
      // window.location.replace("/#contact")
    }
    // }
  }, []);

  const showComponentsHandler = (pathname) => {
    if (pathname === "/admin-panel") {
      return <Route exact path="/admin-panel" component={AdminPanel} />;
      // } else if (pathname === "/login") {
      //   const user_token = localStorage.getItem("refresh_token");
      //   if (user_token) {
      //     window.location.href = "/admin-panel";
      //     return;
      //   }
      //   return <Route exact path="/login" component={SignIn} />;
      // } else if (pathname === "/post") {
      //   return <Route path="/:slug" component={PostDetails} />;
      // } else if (pathname === "/logout") {
      //   return <Route exact path="/logout" component={Logout} />;
      // } else if (pathname === "/verify_user") {
      //   return <Route exact path="/verify_user" component={Verifyuser} />;
    } else {
      return (
        <>
          <ScrollToTop />
          <Header />
          <Switch>
            {
              routes.map(
                (route, i) => {
                  return <Route exact key={i} path={route.path} component={route.component} />
                }
              )
            }
            <Route component={NotFound} />
          </Switch>
          {/* <HelpingForm ref={contactRef} scrollToView={scrollToView} /> */}
          <Footermenu />
        </>
      );
    }

  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalCss>
        <div id="homeScreen" style={window.innerWidth > 500 ? mainstyle : {}}>
          <BrowserRouter>{showComponentsHandler(window.location.pathname)}</BrowserRouter>
        </div>
      </GlobalCss>
    </ThemeProvider>
  );
}

const NotFound = () => {
  return (
    <>
      <div className="notfoundPage">
        <div className="container">
          <div className="notfoundtext">
            4<span>0</span>4
          </div>
          <div className="notfoundmessage">
            Page not found
            <p>
              Look like something went wrong! The page you were looking for is not here. <span> Go Home or Contact us.</span>{" "}
            </p>
            <a href="/" className="btn">
              Back To Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
//https://d1nbq27kwttg28.cloudfront.net/blog/Self-learling.mp4