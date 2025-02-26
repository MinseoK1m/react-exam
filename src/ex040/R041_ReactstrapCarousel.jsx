import React from "react";
import mac01 from '/img/mac01.png'
import mac02 from '/img/mac02.png'
import mac03 from './img/mac03.png' 
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: mac01,
    altText: '신메뉴01',
    caption: '맥스파이시 크리미어니언',
    header: '신제품01',
  },
  {
    src: mac02,
    altText: '신메뉴02',
    caption: '페퍼로니 피자버거',
    header: '신제품02',
  },
  {
    src: mac03,
    altText: '신메뉴03',
    caption: '더블비프미트칠리버거',
    header: '신제품03',
  }
];

const R041_ReactstrapCarousel = () => {
  return (
    <UncontrolledCarousel items={items}/>
  );
};

export default R041_ReactstrapCarousel;