import About from "./contents/About";
import Contacts from "./contents/Contacts";
import Home from "./contents/Home";

/* eslint-disable react/prop-types */
function Content({ content }) {
  switch (content) {
    case "Home":
      return <Home />;
    case "About":
      return <About />;
    case "Contact":
      return <Contacts />;
  }
}

export default Content;
