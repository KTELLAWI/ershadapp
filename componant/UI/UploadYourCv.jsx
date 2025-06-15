'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

export default function UploadYourCv() {
      const router = useRouter();

    const handleUploadClick = () => {
        router.push('/sendyourcv');
    };
    return (
        <section dir="rtl" className=" px-4  items-center justify-center gap-0 py-4 overflow-hidden">
            <div className=" mx-auto relative  w-full flex flex-row items-center justify-center   overflow-hidden z-20">

                {/* Upload Box */}
                <div className='flex w-[60%] -translate-x-1/4 '>
                <motion.div
                    onClick={handleUploadClick}

                    className="cursor-pointer order-2 w-full lg:order-1  z-10 bg-gray-100 border border-gray-300 rounded-xl p-6 text-center transition-all hover:shadow-xl"
                    whileHover={{ scale: 1.01 }}
                >
                    <svg
                        className="w-10 h-10 mx-auto mb-3 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4-4m0 0l-4 4m4-4v12"
                        />
                    </svg>
                    <p className="text-lg font-semibold text-[#B08B2D]">ارفع سيرتك الآن</p>

                </motion.div>
</div>
                {/* CV Images */}
                <div className=" order-1 lg:order-2 z-20 lg:z-30 gap-3">
                    {[1].map((index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Image
                                src="/images/cv.png" // Placeholder image for CVs
                                alt={`CV ${index}`}
                                width={130}
                                height={180}
                                className="rounded-lg h-[250px] w-[250px] object-contain"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
