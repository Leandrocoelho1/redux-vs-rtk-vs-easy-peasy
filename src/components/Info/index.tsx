import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { motion } from "framer-motion";

import { Container } from "./styles";

const Info: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container
      isOpen={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MdInfoOutline size={20} />

      {open && (
        <motion.div
          key="infocontent"
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.1,
            },
            x: 0,
          }}
        >
          <span>Designed &amp; coded by:</span>
          <a
            href="https://github.com/Leandrocoelho1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leandro Coelho
          </a>
          <span>Illustration by:</span>
          <a
            href="https://absurd.design/illustrations.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            absurd.design
          </a>
        </motion.div>
      )}
    </Container>
  );
};

export default Info;
