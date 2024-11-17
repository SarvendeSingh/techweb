import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  const [isVisible, setIsVisible] = useState(false);
const listtenToScroll = () => {    
    let heightToHidden = 250;

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }

}

  useEffect(() => {
    window.addEventListener("scroll",listtenToScroll);
  }, [])

  return isVisible && (<div className='topup' onClick={handleTop}><FaArrowUp /></div>)
};

export default GoToTop;
