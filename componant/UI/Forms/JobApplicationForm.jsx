
"use client"
import React, { useState, useContext, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast"
import ershadtopbanner from "../../../public/images/ershadtopbanner.jpg";
import Image from "next/image";
import { request, url } from "../../../axios/axios";
import { useRouter } from "next/navigation";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { CloudUpload, Paperclip } from 'lucide-react';
import { ContextSimple } from "../../../context/simpleContext";

export default function JobApplicationForm(props) {
    const router = useRouter();

    const { toast } = useToast()
    const {
        setOpenApplayOnWork,
        setInformationCompanyToApplay,
        informationCompanyToApplay


    } = useContext(ContextSimple);
    const [formData, setFormData] = useState({
        currentJobTitleEn: '',
        currentJobTitleAr: '',
        specialtyNameAr: '',
        qualification: '',
        universityName: '',
        specialtyExperience: '',
        totalExperience: '',
        fullName: '',
        nationality: '',
        email: '',
        phoneNumber: '',
        gender: '',
        currentlyEmployed: '',
        skills: '',
        dataConsent: false,
        job: "" // change later


    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [files, setFiles] = useState([]);

    const handleChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        console.log("event.target.files");
        console.log(event.target.files);

        setFiles(uploadedFiles);
        console.log("files");

        console.log(files);
        // formData.resume=uploadedFiles[0];
        console.log("formData.resume");

        console.log(formData.resume);

        handleChange('resume', uploadedFiles[0]);
    };


    const validateForm = () => {
        const newErrors = {};

        // Validation for ALL fields
        if (!formData.currentJobTitleEn) {
            newErrors.currentJobTitleEn = 'المسمى الوظيفي باللغة الإنجليزية مطلوب';
        }

        if (!formData.currentJobTitleAr) {
            newErrors.currentJobTitleAr = 'المسمى الوظيفي باللغة العربية مطلوب';
        }

        if (!formData.specialtyNameAr) {
            newErrors.specialtyNameAr = 'اسم التخصص مطلوب';
        }

        if (!formData.qualification) {
            newErrors.qualification = 'المؤهل مطلوب';
        }

        if (!formData.universityName) {
            newErrors.universityName = 'اسم الجامعة مطلوب';
        }

        if (!formData.specialtyExperience) {
            newErrors.specialtyExperience = 'سنوات الخبرة في التخصص مطلوبة';
        }

        if (!formData.totalExperience) {
            newErrors.totalExperience = 'سنوات الخبرة الإجمالية مطلوبة';
        }

        if (!formData.fullName) {
            newErrors.fullName = 'الاسم الكامل مطلوب';
        }

        if (!formData.nationality) {
            newErrors.nationality = 'الجنسية مطلوبة';
        }

        if (!formData.email) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صالح';
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'رقم الجوال مطلوب';
        } else if (!/^5\d{8}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'رقم الجوال يجب أن يبدأ بـ 5 ويتكون من 9 أرقام';
        }

        if (!formData.gender) {
            newErrors.gender = 'الجنس مطلوب';
        }

        if (!formData.currentlyEmployed) {
            newErrors.currentlyEmployed = 'الحالة الوظيفية مطلوبة';
        }

        if (!formData.skills) {
            newErrors.skills = 'وصف المهارات مطلوب';
        }

        if (!formData.resume) {
            newErrors.resume = 'السيرة الذاتية مطلوبة';
        }

        if (!formData.dataConsent) {
            newErrors.dataConsent = 'يجب الموافقة على شروط مشاركة السيرة الذاتية';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            // try {
            // Handle form submission
            console.log(formData);
            const formDatalar = new FormData();
            Object.keys(formData).forEach((key) => {
                if (key == "job") {
                    formDatalar.append(key, informationCompanyToApplay?.idJop || "");
                }
                else { formDatalar.append(key, formData[key]) };
            });


            if (props.endpoint === "company") {
                // async function onSubmit(data) {


                try {
                    console.log(formDatalar);
                    const result = await request.post("/api/application/apply", formDatalar);
                    console.log("Result:", result);

                    if (result?.data?.message === "Application submitted successfully") {
                        console.log("Application submitted successfully");
                        setOpenApplayOnWork(false);
                        setInformationCompanyToApplay(null);
                        toast({
                            title: "تم إرسال الطلب",
                            description: "تم استلام طلبك بنجاح",
                            status: "success",
                            className: "bg-[#D3B472] text-black border-none",
                            duration: 3000, // Auto-dismiss after 5 seconds

                        });
                        await router.push("/statusOrder");
                    } else {
                        console.error("Unexpected response message:", result?.data?.message);
                        throw new Error("Invalid response message");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    toast({
                        title: "خطأ في الإرسال",
                        description: error?.response?.data?.message || "An unexpected error occurred",
                        status: "error",
                        className: "bg-red text-white border-none",
                        duration: 3000, // Auto-dismiss after 5 seconds

                    });
                }


                // await request
                //     .post("/api/application/apply", formDatalar)
                //     .then((result) => {
                //         console.log("result", result); // Log the complete result for debugging
                //         if (result?.data?.message === "Application submitted successfully") {
                //             console.log("Application submitted successfully");
                //             setOpenApplayOnWork(false);
                //             setInformationCompanyToApplay(null);
                //             toast({
                //                 title: "تم إرسال الطلب",
                //                 description: "تم استلام طلبك بنجاح",
                //                 status: "success",
                //                 className: "bg-[#D3B472] text-black border-none",

                //             });
                //             router.push("/statusOrder");
                //             // Add further actions here, like navigating to a success page
                //         } else {
                //             console.error("Unexpected response message:", result?.data?.message);
                //         }


                //     })
                //     .catch((error) => {
                //         // alert(error?.response?.data?.message);
                //         toast({
                //             title: "خطأ في الإرسال",
                //             description: error?.response?.data?.message,
                //             status: "error",
                //             className: "bg-red text-white border-none",

                //         });
                //     });

            }

            if (props.endpoint === "email") {
                try {
                    console.log(formDatalar);
                    const result = await request.post("/api/application/sendjobform", formDatalar);
                    console.log("Result:", result);

                    if (result?.data?.message === "Application submitted successfully") {
                        console.log("Application submitted successfully");
                        setOpenApplayOnWork(false);
                        setInformationCompanyToApplay(null);
                        toast({
                            title: "تم إرسال الطلب",
                            description: "تم استلام طلبك بنجاح",
                            status: "success",
                            className: "bg-[#D3B472] text-black border-none",
                            duration: 3000, // Auto-dismiss after 5 seconds

                        });
                        await router.push("/statusOrder");
                    } else {
                        console.error("Unexpected response message:", result?.data?.message);
                        throw new Error("Invalid response message");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    toast({
                        title: "خطأ في الإرسال",
                        description: error?.response?.data?.message || "An unexpected error occurred",
                        status: "error",
                        className: "bg-red text-white border-none",
                        duration: 3000, // Auto-dismiss after 5 seconds

                    });
                }




            }




        }

        setIsSubmitting(false);
    };

    const fileInputRef = useRef(null);

    const handleLabelClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Programmatically trigger input click
        }
    };
    return (



        <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto py-10">
            {/* Current Job Title (English) */}
            <div>
                <label className="block mb-2">* المسمى الوظيفي الحالي باللغة الانجليزية</label>
                <div className="relative">
                    <Input
                        value={formData.currentJobTitleEn}
                        onChange={(e) => handleChange('currentJobTitleEn', e.target.value)}
                        placeholder=""
                    />
                    {errors.currentJobTitleEn && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.currentJobTitleEn}
                        </p>
                    )}
                </div>
            </div>

            {/* Current Job Title (Arabic) */}
            <div>
                <label className="block mb-2">* المسمى الوظيفي الحالي باللغة العربية</label>
                <div className="relative">
                    <Input
                        value={formData.currentJobTitleAr}
                        onChange={(e) => handleChange('currentJobTitleAr', e.target.value)}
                        placeholder=""
                    />
                    {errors.currentJobTitleAr && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.currentJobTitleAr}
                        </p>
                    )}
                </div>
            </div>

            {/* Specialty Name (Arabic) */}
            <div>
                <label className="block mb-2">* اسم التخصص باللغة العربية</label>
                <div className="relative">
                    <Input
                        value={formData.specialtyNameAr}
                        onChange={(e) => handleChange('specialtyNameAr', e.target.value)}
                        placeholder=""
                    />
                    {errors.specialtyNameAr && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.specialtyNameAr}
                        </p>
                    )}
                </div>
            </div>

            {/* Qualification */}
            <div>
                <label className="block mb-2">* المؤهل</label>
                <div className="relative">
                    <Select dir="rtl"
                        onValueChange={(value) => handleChange('qualification', value)}
                        value={formData.qualification}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent dir="rtl">
                            <SelectItem value="ثانوية">ثانوية</SelectItem>
                            <SelectItem value="دبلوم">دبلوم</SelectItem>
                            <SelectItem value="جامعة">جامعة</SelectItem>
                            <SelectItem value="ماجستر">ماجستر</SelectItem>
                            <SelectItem value="دكتوراه">دكتوراه</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.qualification && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.qualification}
                        </p>
                    )}
                </div>
            </div>

            {/* University Name */}
            <div>
                <label className="block mb-2">* اسم الجامعة</label>
                <div className="relative">
                    <Input
                        value={formData.universityName}
                        onChange={(e) => handleChange('universityName', e.target.value)}
                        placeholder=""
                    />
                    {errors.universityName && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.universityName}
                        </p>
                    )}
                </div>
            </div>

            {/* Specialty Experience */}
            <div>
                <label className="block mb-2">* سنوات الخبرة في مجال التخصص</label>
                <div className="relative">
                    <Input
                        value={formData.specialtyExperience}
                        onChange={(e) => handleChange('specialtyExperience', e.target.value)}
                        type="number"
                        placeholder=""
                    />
                    {errors.specialtyExperience && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.specialtyExperience}
                        </p>
                    )}
                </div>
            </div>

            {/* Total Experience */}
            <div>
                <label className="block mb-2">* سنوات الخبرة بشكل عام وإجمالي</label>
                <div className="relative">
                    <Input
                        value={formData.totalExperience}
                        onChange={(e) => handleChange('totalExperience', e.target.value)}
                        type="number"
                        placeholder=""
                    />
                    {errors.totalExperience && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.totalExperience}
                        </p>
                    )}
                </div>
            </div>

            {/* Full Name */}
            <div>
                <label className="block mb-2">* الاسم كاملاً</label>
                <div className="relative">
                    <Input
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder=""
                    />
                    {errors.fullName && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.fullName}
                        </p>
                    )}
                </div>
            </div>



            {/* Nationality */}
            <div>
                <label className="block mb-2">* المدينة</label>
                <div className="relative">
                <Input
                        value={formData.nationality}
                        onChange={(e) => handleChange('nationality', e.target.value)}
                        placeholder=""
                    />
                    {errors.nationality && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.nationality}
                        </p>
                    )}
                    {/* <Select dir="rtl"
                        onValueChange={(value) => handleChange('nationality', value)}
                        value={formData.nationality}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent dir="rtl">
                            <SelectItem value="سعودي">سعودي</SelectItem>
                            <SelectItem value="وافد">وافد</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.nationality && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.nationality}
                        </p>
                    )} */}
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="block mb-2">* بريدك الإلكتروني</label>
                <div className="relative">
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder=""
                    />
                    {errors.email && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            {/* Phone Number */}
            <div>
                <label className="block mb-2">* رقم الجوال</label>
                <div className="relative">
                    <Input dir="rtl"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handleChange('phoneNumber', e.target.value)}
                        placeholder="5xxxx"
                    />
                    {errors.phoneNumber && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.phoneNumber}
                        </p>
                    )}
                </div>
            </div>

            {/* Gender */}
            <div>
                <label className="block mb-2">* اختر الجنس</label>
                <div className="relative">
                    <Select dir="rtl"
                        onValueChange={(value) => handleChange('gender', value)}
                        value={formData.gender}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent dir="rtl">
                            <SelectItem value="ذكر">ذكر</SelectItem>
                            <SelectItem value="انثى">انثى</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.gender && (
                        <p className="text-red font-bold text-sm absolute -bottom-5">
                            {errors.gender}
                        </p>
                    )}
                </div>
            </div>

            {/* Currently Employed */}
            <div>
                <label className="block mb-2">هل أنت حاليا على رأس العمل؟</label>
                <Select dir="rtl"
                    onValueChange={(value) => handleChange('currentlyEmployed', value)}
                    value={formData.currentlyEmployed}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent dir="rtl">
                        <SelectItem value="نعم">نعم</SelectItem>
                        <SelectItem value="لا">لا</SelectItem>
                    </SelectContent>
                </Select>
                {errors.currentlyEmployed && (
                    <p className="text-red font-bold text-sm   bottom-5">
                        {errors.currentlyEmployed}
                    </p>
                )}
            </div>

            {/* Skills */}
            <div>
                <label className="block mb-2">أكتب عن أبرز مهاراتك ومجال خبراتك في العمل</label>
                <Textarea
                    value={formData.skills}
                    onChange={(e) => handleChange('skills', e.target.value)}
                    placeholder=""
                    className="resize-none w-full min-h-[150px]"
                />


                {(
                    errors.skills && <p className="text-red font-bold text-sm bottom-5">
                        {errors.skills}
                    </p>
                )}
            </div>


            {/* Data Consent */}
            <div className="flex items-start space-x-3 rounded-md border p-4">
                <div className="flex items-center space-x-2">
                    <Checkbox
                        checked={formData.dataConsent}
                        onCheckedChange={(checked) => handleChange('dataConsent', checked)}
                    />
                    <label className="text-sm pr-2">
                        أفوض إدارة وظائف ارشاد بمشاركة السيرة الذاتية المُرفقة مع الجهات المعتمدة وفق ما تراه مناسباً، وأقر بأن هذا الاشتراك لا يعني ضمان الوظيفة.
                    </label>
                </div>
                {errors.dataConsent && (
                    <p className="text-red font-bold text-sm">
                        {errors.dataConsent}
                    </p>
                )}
            </div>

            {/* Resume Upload */}
            <div>
                <label className=" mb-2">تحميل السيرة الذاتية</label>
                <div

                    className="flex items-center border border-dashed justify-center flex-col p-8 w-full bg-background rounded-lg cursor-pointer"
                >
                    <div className='hidden'>
                        <input
                            type="file"
                            ref={fileInputRef}

                            onChange={handleFileUpload}
                            accept=".svg,.png,.jpg,.pdf"
                            className="hidden"
                            id="resume-upload"
                        />
                    </div>
                    <div className="cursor-pointer  z-8">
                        <CloudUpload onClick={handleLabelClick} className="text-gray-500 w-20 h-20  z-[10]" />
                        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">انقر للتحميل</span>
                            &nbsp;
                        </p>
                        {/* <p className="text-xs text-gray-500 dark:text-gray-400"> */}


                        {/* </p> */}
                    </div>
                    {files.length > 0 && (
                        <div className="mt-4">
                            {files.map((file, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Paperclip className="h-4 w-4 stroke-current" />
                                    <span>{file.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {errors.resume && (
                    <p className="text-red font-bold text-sm bottom-5">
                        {errors.resume}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
            >
                {isSubmitting ? 'جاري الإرسال...' : 'ارسال'}
            </Button>
        </form>
    );
}
