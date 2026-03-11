// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FeaturedProduct from "../component/FeaturedProduct";
import Hero from "../component/Hero";
import Highlights from "../component/Highlights";
import OnSaleProducts from "../component/OnSaleProducts";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Highlights />
        <FeaturedProduct />
        <OnSaleProducts/>
      </motion.div>
    </div>
  );
};

export default Home;
