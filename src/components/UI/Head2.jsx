import React from 'react'

const Head2 = ({children, as= "h2"}) => {
  const Tag = as;
  return <Tag data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease">{children}</Tag>
}

export default Head2