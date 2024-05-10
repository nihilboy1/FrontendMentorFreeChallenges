import { useMediaQuery } from "@chakra-ui/react";
import { ShoppingCart } from "phosphor-react";
import desktopImage from "./assets/image-product-desktop.jpg";
import mobileImage from "./assets/image-product-mobile.jpg";
import S from "./styles/App.module.scss";

function App() {
  const [isShorterThan550] = useMediaQuery("(max-width: 550px)");

  return (
    <main className={S.main_box}>
      <img src={isShorterThan550 ? mobileImage : desktopImage} alt="" />
      <div className={S.text_box}>
        <header>
          <span className={S.perfume}>PERFUME</span>
          <h1 className={S.title}>Gabrielle Essence Eau De Parfum</h1>
        </header>
        <p className={S.main_text}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <div className={S.prices_box}>
          <p className={S.main_price}>$149.99</p>
          <p className={S.other_price}>$169.99</p>
        </div>
        <button>
          <ShoppingCart weight="bold" size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </main>
  );
}

export default App;
