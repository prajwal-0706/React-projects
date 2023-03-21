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
        staggerChildren: 1,
        delay: 0.5,
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
      <motion.h1
        drag
        transition={{
          delay: 0,
        }}
        whileHover={{ scale: 1.5, rotate: 20 }}
        whileTap={{
          scale: 0.5,
          rotate: 0,
        }}
      >
        Hello World
      </motion.h1>

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
