"use client"
import {
    useState
} from "react"
// import {
//     toast
// } from "sonner"
import {
    useForm
} from "react-hook-form"
// import {
//     zodResolver
// } from "@hookform/resolvers/zod"
// import * as z frovm "zod"
import {
    cn
} from "@/lib/utils"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"

// const formSchema = z.object({
//   name_9090037443: z.string(),
//   name_0325927416: z.string(),
//   name_3351848924: z.string(),
//   name_7029931399: z.string(),
//   name_8980247883: z.string(),
//   name_2513044454: z.string(),
//   name_9681232113: z.string()
// });

export default function page() {

    // const form = useForm < z.infer < typeof formSchema >> ({
    //     resolver: zodResolver(formSchema),

    // })

    // function onSubmit(values: z.infer<typeof formSchema>) {
    //     try {
    //         console.log(values);
    //         toast(
    //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //                 <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //             </pre>
    //         );
    //     } catch (error) {
    //         console.error("Form submission error", error);
    //         toast.error("Failed to submit the form. Please try again.");
    //     }
    // }

    return (
        <Form >
            <form  className="space-y-8 max-w-3xl mx-auto py-10">
<Input/>
                {/* <FormField
                    // control={form.control}
                    // name="name_9090037443"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>المسمى الوظيفي الحالي باللغة الانجليزية</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    // type=""
                                    // {...field} 
                                    />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}

                
                
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}