import React from 'react'
import "./IconImage.css"
import { motion } from 'framer-motion';




function IconImage({ icon }) {
 
  return (
    <motion.div 
    className='icon-container'
    initial={{ opacity: 0, y:-30 }}
    animate={{ opacity:1, y: 0 }}
    >
      {icon}
    </motion.div>
  )
}

export default IconImage
