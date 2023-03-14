import './App.css';
import { motion } from 'framer-motion';

function App() {
  const container = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <motion.div className="App">
      <motion.h1>Hello World</motion.h1>

      <motion.ul animate="show" initial="hidden" variants={container}>
        <motion.li variants={item}>Jidnyasa</motion.li>
        <motion.li variants={item}>Jidnisa</motion.li>
        <motion.li variants={item}>Khushi</motion.li>
        <motion.li variants={item}>Catty</motion.li>
      </motion.ul>
    </motion.div>
  );
}

export default App;
