"use client";
import { useEffect } from "react";
import BenefitsWebsits from "../../componant/UI/BenefitsWebsite/BenefitsWebsits";
import Header from "../../componant/UI/Header";
import KnowUs from "../../componant/UI/KnowUs/KnowUs";
import OffersWork from "../../componant/UI/OffersWork";
import Services from "../../componant/UI/Services/Services";
import { scroller } from "react-scroll";
import ContectUs from "../../componant/UI/ContactUs/ContectUs";

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");
    if (scrollTo) {
      scroller.scrollTo(scrollTo);
    }
  }, []);
  return (
    <>
      <Header />
      <KnowUs />
      <Services />
      <OffersWork />
      <BenefitsWebsits />
      <ContectUs />
    </>
  );
}
