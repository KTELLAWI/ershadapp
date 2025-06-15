'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import robort from "../../public/images/robot1.png"

export default function NewHeader() {
  return (
    <div
      dir="rtl"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 px-2 py-4  rounded-xl mt-4 max-w-5xl mx-auto"
    >
      {/* Text Content */}
      <div className="text-right md:w-1/2 space-y-3">
        {/* <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
          حياكم
        </div> */}
        <h2 className="text-2xl font-semibold text-gray-800">مع إرشاد للتوظيف</h2>
        <p className="text-lg text-gray-800 font-medium leading-relaxed">
          خلي الذكاء الاصطناعي يوصل <br />
          <span className="text-[#B08B2D] font-bold">
            سيرتك للوظيفة المناسبة!
          </span>
        </p>
      </div>

      {/* Robot Image with Floating Animation */}
      <motion.div
        className="md:w-1/2 w-full flex justify-center items-center"
        animate={{
          rotate: [0, 5, -5, 0],
          y: [0, -4, 4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src={robort}
          alt="robot assistant"
          width={200}
          height={200}
          className="drop-shadow-xl w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
        />
      </motion.div>
    </div>
  );
}
