"use client"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
    CloudUpload,
    Paperclip
  } from "lucide-react"
import {
    useState
} from "react"
// import {
//     toast
// } from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
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

const formSchema = z.object({
    name_9090037443: z.string(),
    name_0325927416: z.string(),
    name_3351848924: z.string(),
    name_7029931399: z.string(),
    name_8980247883: z.string(),
    name_2513044454: z.string(),
    name_9681232113: z.string()
});

export default function ApplicationsForm() {

    const form = useForm({
        resolver: zodResolver(formSchema),

    })

    function onSubmit(values) {
        try {
            console.log(values);
            // toast(
            //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            //         <code className="text-white">{JSON.stringify(values, null, 2)}</code>
            //     </pre>
            // );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

                <FormField
                    control={form.control}
                    name="name_9090037443"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>المسمى الوظيفي الحالي باللغة الانجليزية</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_0325927416"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>المسمى الوظيفي الحالي باللغة العربية</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_3351848924"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>اسم التخصص باللغة العربية</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* <FormField
                control={form.control}
                name="name_6519574513"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المؤهل</FormLabel>
                    <FormControl>
                      <MultiSelector
                        values={field.value}
                        onValuesChange={field.onChange}
                        loop
                        className="max-w-xs"
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select languages" />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                        <MultiSelectorList>
                          <MultiSelectorItem value={"React"}>React</MultiSelectorItem>
                          <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                          <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
                        </MultiSelectorList>
                        </MultiSelectorContent>
                      </MultiSelector>
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

                <FormField
                    control={form.control}
                    name="name_8980247883"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>المؤهل</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_2513044454"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>اسم الجامعة</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn"

                                    type=""
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_9681232113"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>سنوات الخبرة في مجال التخصص</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_1697523328"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>سنوات الخبرة بشكل عام وإجمالي</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_8408654431"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>الاسم كاملاً</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_7731429774"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>بريدك الإلكتروني</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_0986300849"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* <FormField
              control={form.control}
              name="name_5927155907"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                <FormLabel>رقم الجوال</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="الرجاء ادخال رقم الجوال بدون (0) صفر"
                      {...field}
                      defaultCountry="TR"
                    />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            /> */}

                {/* <FormField
                    control={form.control}
                    name="name_3354287227"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>اخترالجنس</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-[200px] justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}

                                        >
                                            {field.value
                                                ? languages.find(
                                                    (language) => language.value === field.value
                                                )?.label
                                                : "Select language"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search language..." />
                                        <CommandList>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                {languages.map((language) => (
                                                    <CommandItem
                                                        value={language.label}
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue("name_3354287227", language.value);
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                language.value === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {language.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                {/* <FormField
                    control={form.control}
                    name="name_7481115066"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>هل أنت حاليا على رأس العمل ؟</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-[200px] justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}

                                        >
                                            {field.value
                                                ? languages.find(
                                                    (language) => language.value === field.value
                                                )?.label
                                                : "Select language"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search language..." />
                                        <CommandList>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                {languages.map((language) => (
                                                    <CommandItem
                                                        value={language.label}
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue("name_7481115066", language.value);
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                language.value === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {language.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <FormMessage />
                        </FormItem>
                    )}
                /> */}

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="name_4388569291"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>أكتب عن أبرز مهاراتك ومجال خبراتك في العمل</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Placeholder"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                </div>

                {/* <FormField
            control={form.control}
            name="name_9982682543"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الجنسية</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                  <FormDescription>You can manage email addresses in your email settings.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
                <FormField
                    control={form.control}
                    name="name_1784744325"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}

                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel className='pr-2'> أفوض إدارة وظائف ارشاد بمشاركة السيرة الذاتية المُرفقة مع الجهات المعتمدة وفق ما تراه مناسباً، وأقر بأن هذا الاشتراك لا يعني ضمان الوظيفة.</FormLabel>

                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_7418472065"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>تحميل السيرة الذاتية</FormLabel>
                            <FormControl>
                                {/* <FileUploader
                                    value={files}
                                    onValueChange={setFiles}
                                    dropzoneOptions={dropZoneConfig}
                                    className="relative bg-background rounded-lg p-2"
                                > */}
                                    {/* <FileInput
                                        id="fileInput"
                                        className="outline-dashed outline-1 outline-slate-500"
                                    > */}
                                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                                            <CloudUpload className='text-gray-500 w-10 h-10' />
                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span>
                                                &nbsp; or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF
                                            </p>
                                        </div>
                                    {/* </FileInput> */}
                                    {/* <FileUploaderContent> */}
                                        {/* {files &&
                                            files.length > 0 &&
                                            files.map((file, i) => (
                                                <FileUploaderItem key={i} index={i}>
                                                    <Paperclip className="h-4 w-4 stroke-current" />
                                                    <span>{file.name}</span>
                                                </FileUploaderItem>
                                            ))} */}
                                    {/* </FileUploaderContent> */}
                                {/* </FileUploader> */}
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='p-3' type="submit">ارسال</Button>
            </form>
        </Form>
    )
}