import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-items";

const variants = {
  hidden : {opacity : 0, x : 20, y : 0}, 
  enter : {opacity : 1, x : 0, y : 0},
  exit : {opacity : 0, x : 20, y : 20}, 
}

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    style={{ position : 'relative' }}
    transition={{ duration : 0.4, type : 'easeInOut' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Mei Sastra Jayadi</title>
        </Head>
      )}
      {children}
      <GridItemStyle/>
    </>
  </motion.article>
)

export default Layout;
