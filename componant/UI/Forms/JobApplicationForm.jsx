// "use client"
// import { Textarea } from "@/components/ui/textarea"
// import { Checkbox } from "@/components/ui/checkbox"
// import ershadtopbanner from "../../../public/images/ershadtopbanner.jpg";
// import Image from "next/image";
// import { useDropzone } from 'react-dropzone';
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"

// import {
//     CloudUpload,
//     Paperclip
// } from "lucide-react"
// import {
//     useState
// } from "react"
// import {
//     toast
// } from "sonner"
// import {
//     useForm
// } from "react-hook-form"
// import {
//     zodResolver
// } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import {
//     cn
// } from "@/lib/utils"
// import {
//     Button
// } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import {
//     Input
// } from "@/components/ui/input"

// const formSchema = z.object({
//     name_9090037443: z.string(),
//     name_0325927416: z.string(),
//     name_3351848924: z.string(),
//     name_7029931399: z.string(),
//     name_8980247883: z.string(),
//     name_2513044454: z.string(),
//     name_9681232113: z.string()
// });

// export default function ApplicationsForm() {
//       const [files, setFiles] = useState([]);
//       const {
//         handleSubmit,
//         register,
//         formState: { errors, isSubmitting },
//       } = useForm();
//     const onDrop = (acceptedFiles) => {
//         setFiles(acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })));
//     };
//     // async function onSubmit(data) {

//     //     await request
//     //       .post("/api/contact", data)
//     //       .then((result) => {
//     //         if (result?.data?.message === "Message sent successfully!") {
//     //           alert("تم ارسال رسالتك بنجاح");
//     //         }
//     //       })
//     //       .catch((error) => {
//     //         alert(error?.response?.data?.message);
//     //       });
//     //   }

//     const { getRootProps, getInputProps } = useDropzone({
//         onDrop,
//         accept: 'image/*, .svg, .png, .jpg, .gif',
//     });

//     const form = useForm(


//     );

//     function onSubmit(values) {
//         toast.success("Form submitted successfully!");

//         try {
//             console.log(values);



//         } catch (error) {
//             console.error("Form submission error", error);
//             toast.error("Failed to submit the form. Please try again.");
//         }
//     }
//     return (
//         <div className="flex flex-col  w-full ">
//             <div className="flex relative items-center h-[250px]  "> 
//             <Image objectFit="contain" src={ershadtopbanner} alt="" className="w-[100%] h-[100%] " />

//             </div>
//             <div>
//             <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

// <FormField
//     control={form.control}
//     name="name_9090037443"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel className=''> * المسمى الوظيفي الحالي باللغة الانجليزية</FormLabel>
//             <FormControl>
//                 <Input
//                     placeholder=""

//                     type=""
//                     {...field} />
//             </FormControl>
//             <FormDescription></FormDescription>
//             <FormMessage />
//         </FormItem>
//     )}
// />

// <FormField
//     control={form.control}
//     name="name_0325927416"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>المسمى الوظيفي الحالي باللغة العربية</FormLabel>
//             <FormControl>
//                 <Input
//                     placeholder=""

//                     type=""
//                     {...field} />
//             </FormControl>
//             <FormDescription></FormDescription>
//             <FormMessage />
//         </FormItem>
//     )}
// />

// <FormField
//     control={form.control}
//     name="name_3351848924"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>اسم التخصص باللغة العربية</FormLabel>
//             <FormControl>
//                 <Input
//                     placeholder=""

//                     type=""
//                     {...field} />
//             </FormControl>
//             <FormDescription></FormDescription>
//             <FormMessage />
//         </FormItem>
//     )}
// />

// <FormField
// control={form.control}
// name="name_6519574513"
// render={({ field }) => (
// <FormItem>
// <FormLabel>المؤهل</FormLabel>
// <Select dir ="rtl"dir="rtl" onValueChange={field.onChange} defaultValue={field.value}>
// <FormControl>
// <SelectTrigger>
// <SelectValue dir="rtl" placeholder="" />
// </SelectTrigger>
// </FormControl>
// <SelectContent dir="rtl">
// <SelectItem dir="rtl" value="ثانوية">ثانوية</SelectItem>
// <SelectItem dir="rtl" value="دبلوم">دبلوم</SelectItem>
// <SelectItem dir="rtl" value="جامعة">جامعة</SelectItem>
// <SelectItem dir="rtl" value="ماجستر">ماجستر</SelectItem>
// <SelectItem dir="rtl" value="دكتوراه">دكتوراه</SelectItem>



// </SelectContent>
// </Select>
// <FormDescription></FormDescription>
// <FormMessage />
// </FormItem>
// )}
// />


// <FormField
//     control={form.control}
//     name="name_2513044454"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>اسم الجامعة</FormLabel>
//             <FormControl>
//                 <Input
//                     placeholder=""

//                     type=""
//                     {...field} />
//             </FormControl>

//             <FormMessage />
//         </FormItem>
//     )}
// />

// <FormField
//     control={form.control}
//     name="name_9681232113"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>سنوات الخبرة في مجال التخصص</FormLabel>
//             <FormControl>
//                 <Input
//                     placeholder=""

//                     type=""
//                     {...field} />
//             </FormControl>
//             <FormDescription></FormDescription>
//             <FormMessage />
//         </FormItem>
//     )}
// />

// <FormField
//     control={form.control}
//     name="name_1697523328"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>سنوات الخبرة بشكل عام وإجمالي</FormLabel>
//             <FormControl>
//                 <Input
//                     placeholder=""

//                     type=""
//                     {...field} />
//             </FormControl>
//             <FormDescription></FormDescription>
//             <FormMessage />
//         </FormItem>
//     )}
// />

// <FormField
//     control={form.control}
//     name="name_8408654431"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>الاسم كاملاً</FormLabel>
//             <FormControl>
//                 <Input
//                     placeholder=""

//                     type=""
//                     {...field} />
//             </FormControl>
//             <FormDescription></FormDescription>
//             <FormMessage />
//         </FormItem>
//     )}
// />

// <FormField
//     control={form.control}
//     name="name_7731429774"
//     render={({ field }) => (
//         <FormItem>
//             <FormLabel>بريدك الإلكتروني</FormLabel>
//             <FormControl>
//                 <Input
//                     placeholder=""

//                     type="email"
//                     {...field} />
//             </FormControl>
//             <FormDescription></FormDescription>
//             <FormMessage />
//         </FormItem>
//     )}
// />



// <FormField
// control={form.control}
// name="name_5927155907"
// render={({ field }) => (
// <FormItem className="flex flex-col items-start">
// <FormLabel>رقم الجوال</FormLabel>
// <FormControl className="w-full">
// <Input
// {...field}
// type="phone"
// placeholder="5xxxx"

// />
// </FormControl>

// <FormMessage />
// </FormItem>
// )}
// />

// <FormField
// control={form.control}
// name="name_3354287227"
// render={({ field }) => (
//   <FormItem>
// <FormLabel>اختر الجنس</FormLabel>
// <Select dir ="rtl"dir="rtl" onValueChange={field.onChange} defaultValue={field.value}>
// <FormControl>
// <SelectTrigger>
// <SelectValue placeholder="" />
// </SelectTrigger>
// </FormControl>
// <SelectContent dir="rtl">
// <SelectItem value="ذكر">ذكر</SelectItem>
// <SelectItem value="انثى">انثى</SelectItem>
// </SelectContent>
// </Select>
// <FormDescription></FormDescription>
// <FormMessage />
// </FormItem>
// )}
// />
// <FormField
// control={form.control}
// name="name_7481115066"
// render={({ field }) => (
// <FormItem className="flex flex-col">
//     <FormLabel>هل أنت حاليا على رأس العمل ؟</FormLabel>
// <Select dir ="rtl"dir="rtl" onValueChange={field.onChange} defaultValue={field.value}>
// <FormControl>
// <SelectTrigger>
// <SelectValue placeholder="" />
// </SelectTrigger>
// </FormControl>
// <SelectContent dir="rtl">
// <SelectItem value="نعم">نعم</SelectItem>
// <SelectItem value="لا">لا</SelectItem>
// </SelectContent>
// </Select>
// <FormDescription></FormDescription>


//     <FormMessage />
// </FormItem>
// )}
// />

// <div className="grid grid-cols-12 gap-4 w-full">

//     <div className="col-span-12">

//         <FormField

//             control={form.control}
//             name="name_4388569291"
//             render={({ field }) => (
//                 <FormItem>
//                     <FormLabel className='w-full'>أكتب عن أبرز مهاراتك ومجال خبراتك في العمل</FormLabel>
//                     <FormControl>
//                         <Textarea
//                             placeholder=""
//                             className="resize-none w-full"
//                             {...field}
//                         />
//                     </FormControl>

//                     <FormMessage />
//                 </FormItem>
//             )}
//         />
//     </div>

// </div>

// <FormField
// control={form.control}
// name="name_9982682543"
// render={({ field }) => (
// <FormItem>
// <FormLabel>الجنسية</FormLabel>
// <Select dir ="rtl"dir="rtl" onValueChange={field.onChange} defaultValue={field.value}>
// <FormControl>
// <SelectTrigger>
// <SelectValue placeholder="" />
// </SelectTrigger>
// </FormControl>
// <SelectContent dir="rtl">
// <SelectItem value="سعودي">سعودي</SelectItem>
// <SelectItem value="وافد">وافد</SelectItem>
// </SelectContent>
// </Select>
// <FormDescription></FormDescription>
// <FormMessage />
// </FormItem>
// )}
// />
// <FormField
//     control={form.control}
//     name="name_1784744325"
//     render={({ field }) => (
//         <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
//             <FormControl>
//                 <Checkbox
//                     checked={field.value}
//                     onCheckedChange={field.onChange}

//                 />
//             </FormControl>
//             <div className="space-y-1 leading-none">
//                 <FormLabel className='pr-2'> أفوض إدارة وظائف ارشاد بمشاركة السيرة الذاتية المُرفقة مع الجهات المعتمدة وفق ما تراه مناسباً، وأقر بأن هذا الاشتراك لا يعني ضمان الوظيفة.</FormLabel>

//                 <FormMessage />
//             </div>
//         </FormItem>
//     )}
// />

// <FormField
//     control={form.control}
//     name="name_7418472065"
//     render={({ field }) => (

//         <FormItem>
// <FormLabel>تحميل السيرة الذاتية</FormLabel>
// <FormControl>
// <>FormControl
// <div className="br-3 bg-black"
// {...getRootProps({
// className:
//     'flex items-center border border-1 border border-1 border-dashed justify-center flex-col p-8 w-full bg-background rounded-lg cursor-pointer',
// })}
// >
// <input {...getInputProps()} />
// <CloudUpload className="text-gray-500 w-10 h-10" />
// <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
// <span className="font-semibold">انقر للتحميل</span>
// &nbsp; أو السحب والافلات
// </p>
// <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or PDF</p>
// </div>
// {files.length > 0 && (
// <div className="mt-4">
// {files.map((file, index) => (
//     <div key={index} className="flex items-center space-x-2">
//         <Paperclip className="h-4 w-4 stroke-current" />
//         <span>{file.name}</span>
//     </div>
// ))}
// </div>

// )}
// </>
// </FormControl>
// <FormMessage />
// </FormItem>
//     )}
// />
// <Button  
//  className='p-3 w-[70px]' type="submit">ارسال</Button>
// </form>
// </Form>
//             </div>

//         </div>
//     )




// }

"use client"
import React, { useState ,useContext} from 'react';
import { useToast } from "@/hooks/use-toast"
import ershadtopbanner from "../../../public/images/ershadtopbanner.jpg";
import Image from "next/image";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { CloudUpload, Paperclip } from 'lucide-react';
import { ContextSimple } from "../../../context/simpleContext";

export default function JobApplicationForm(endpoint) {
    const { toast } = useToast()
        const {
          setOpenApplayOnWork,
          setInformationCompanyToApplay,
          informationCompanyToApplay,
      
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
        resume: null
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
        setFiles(uploadedFiles);
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
        toast({
            title: "تم إرسال الطلب",
            description: "تم استلام طلبك بنجاح",
            status: "success",
            className: "bg-[#D3B472] text-black border-none",

        });
        setOpenApplayOnWork(false);

        if (validateForm()) {
            try {
                // Handle form submission
                console.log(formData);
                toast({
                    title: "تم إرسال الطلب",
                    description: "تم استلام طلبك بنجاح",
                    status: "success"
                });
            } catch (error) {
                console.error('Submission error', error);
                toast({
                    title: "خطأ في الإرسال",
                    description: "حدث خطأ أثناء إرسال الطلب",
                    status: "error",
                    className: "bg-red text-white border-none",

                });
            }
        }

        setIsSubmitting(false);
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
                        <label className="block mb-2">* الجنسية</label>
                        <div className="relative">
                            <Select dir="rtl"
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
                            )}
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
                        <label className="block mb-2">تحميل السيرة الذاتية</label>
                        <div
                            className="flex items-center border border-dashed justify-center flex-col p-8 w-full bg-background rounded-lg cursor-pointer"
                        >
                            <input
                                type="file"
                                onChange={handleFileUpload}
                                accept=".svg,.png,.jpg,.pdf"
                                className="hidden"
                                id="resume-upload"
                            />
                            <label htmlFor="resume-upload" className="cursor-pointer">
                                <CloudUpload className="text-gray-500 w-10 h-10" />
                                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">انقر للتحميل</span>
                                    &nbsp; أو السحب والافلات
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or PDF</p>
                            </label>
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
