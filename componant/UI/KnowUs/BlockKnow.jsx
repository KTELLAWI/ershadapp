import React from "react";
export default function BlockKnow({
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  textSix,
}) {
  return (
    <div className="bg-bgKnowUs rounded-lg pt-5 pb-10 max-h-[300px] px-3 flex items-center gap-5 flex-col">
      <h4 className="text-twoTextHeader font-semibold text-[1.3rem]">
        {textOne}{" "}
      </h4>
      <p className="text-center text-twoTextHeader ">
        {textTwo}
        <br />
        {textThree}
        <br />
        {textFour}
        <br />
        {textFive}
        <br />
        {textSix}
      </p>
    </div>
  );
}
