import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div 
        key={useColorModeValue('light', 'dark')}
        style={{ display: 'inline-block' }}
        initial={{ x : -20, opacity : 0 }}
        animate={{ x : 0, opacity : 1 }}
        exit={{ x : 20, opacity : 0 }}
        transition={{ duration : 0.2 }}
      >
        <IconButton 
        aria-label="Change theme"
        icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
        onClick={toggleColorMode}
        colorScheme={useColorModeValue('purple', 'red')}>
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton;
