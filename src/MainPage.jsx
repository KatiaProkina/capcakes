import TitleBlock from "./components/TitleBlock/TitleBlock";
import "../src/MainPage.css";
import Catalog from "./components/Catalog/Catalog";
import Content from "./components/Content/Content";
import Confectioner from "./components/Confectioner/Confectioner";
import Reviews from "./components/Reviews/Reviews";
import Gallery from "./components/Gallery/Gallery";
import FooterForm from "./components/FooterForm/FooterForm";

const MainPage = () => {
  return (
    <div>
      <TitleBlock />
      <Catalog />
      <Content />
      <Confectioner />
      <Reviews />
      <Gallery />
      <FooterForm />
    </div>
  );
};

export default MainPage;
