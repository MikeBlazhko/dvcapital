'use client';

import { InvestBlock } from "../../components";
import BackgroundFirst from "@/assets/images/background1.png";
import BackgroundSecond from "@/assets/images/background2.png";
import BackgroundThrid from "@/assets/images/background3.png";
import BackgroundFour from "@/assets/images/background4.png";

import queryString from 'query-string';
import ReactDOM from 'react-dom';


const createImageURL = (image: any) =>
  `${queryString.stringifyUrl(
    {
      query: { url: image },
      url: '/_next/image',
    },
    { encode: true, skipEmptyString: true, skipNull: true },
  )}&w=680&q=75`;




ReactDOM.preload(createImageURL(BackgroundFirst), {
  as: 'image',
});

ReactDOM.preload(createImageURL(BackgroundSecond), {
  as: 'image',
});

ReactDOM.preload(createImageURL(BackgroundThrid), {
  as: 'image',
});

ReactDOM.preload(createImageURL(BackgroundFour), {
  as: 'image',
});

export default function Investors() {
  return (
    <main>
      <InvestBlock/>
    </main>
  );
}
