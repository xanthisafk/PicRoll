import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';

import { getColorScheme } from '../lib/colorSchemeHandler';

import meta from '../data/meta.json'

const ScrollToTop = ({colorScheme}) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position='fixed'
          bottom={6}
          right={6}
          zIndex={3}>
          <IconButton
            aria-label={meta.scrollToTopText}
            icon={<ArrowUpIcon />}
            colorScheme={colorScheme}
        />
        </Box>
      )}
    </>
  );
}

export default ScrollToTop;