"use client"

import axios from "axios"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, 
    FormControl, 
    FormField,
    FormItem,
    FormLabel,
    FormMessage } from "@/components/ui/form"

import { Dialog,
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogDescription, } from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useModal } from "@/hooks/use-modal-store"



const formSchema = z.object({
    api_id: z.string().min(1,{
        message: "Введите api_id"
    }),
    api_hash: z.string().min(1,{
        message: "Введите api_hash"
    }),
    phone: z.string().min(1,{
        message: "Введите номер телефона"
    })
})


export const AddTgUserBotModal = () => {
    
    const { isOpen, onClose, type, data } = useModal()
    
    const router = useRouter();
    
    const isModalOpen = isOpen && type === "addTgUserBot";

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            api_id: "",
            api_hash: "",
            phone: ""
            
        }
        
    })
    
    const isLoading = form.formState.isSubmitting;
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        console.log(values)

        try {
            await axios.post("http://localhost:3000/integrations", values)
            form.reset();
            router.refresh();
            onClose();
            
        } catch(error) {
            console.log(error)
        }
    }
    
    const handleClose = () => {
        onClose();
        form.reset()  ;
    }
    

    
    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden"> 
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        <p>Telegram User Бот</p>
                    </DialogTitle>
                    <DialogDescription className="tetx-center text-zinc-500">
                        Вы всегда сможете удалить интеграцию в разделе настроек.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8">
                        <div className="space-y-8 px-6">
                            <FormField
                            control={form.control}
                            name="api_id"
                            render={({field})=> (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70">
                                        api_id
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                        disabled={isLoading}
                                        className="bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0"
                                        placeholder="Введите api_id"
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="api_hash"
                            render={({field})=> (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70">
                                        api_hash
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                        disabled={isLoading}
                                        className="bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0"
                                        placeholder="Введите api_hash"
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({field})=> (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500
                                    dark:text-secondary/70">
                                        Номер телефона
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                        disabled={isLoading}
                                        className="bg-zinc-300/50 border-0 
                                        focus-visible:ring-0 text-black
                                        focus-visible:ring-offset-0"
                                        placeholder="Введите номер телефона"
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                        </div>
                        <DialogFooter className="bg-gray-100 px-6 py-4">
                            <Button variant="primary" disabled={isLoading}>
                                Добавить
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
                
            </DialogContent> 
        </Dialog>
    )
}