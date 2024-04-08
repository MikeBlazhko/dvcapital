'use client';

import { 
  AdvantageBlock, 
  FactoringBlock, 
  FaqBlock, 
  FooterBlock, 
  HeaderBlock, 
  MapBlock, 
  ServicesBlock, 
  StagesBlock, 
  UserBlock
} from "../components";

export default function Home() {
  return (
    <main>
      <HeaderBlock/>
      <MapBlock/>
      <AdvantageBlock/>
      <FactoringBlock/>
      <ServicesBlock/>
      <UserBlock/>
      <StagesBlock/>
      <FaqBlock/>
      <FooterBlock/>
    </main>
  );
}
