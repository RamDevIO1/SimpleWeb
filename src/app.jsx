import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Navbar from "./components/nav/nav.jsx";
import Members from "./components/members/members.jsx";
import Footer from "./components/footer/footer.jsx";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
