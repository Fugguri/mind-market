import axios from 'axios'
import * as z from 'zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { useParams, useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogDescription,
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/use-modal-store'

const urlSchema = z.string().url({ message: 'Введите корректный URL' }).nonempty({ message: 'URL не может быть пустым' });

const formSchema = z.object({
    name: z.string().min(1, {
        message: 'Введите имя ассистента',
    }),
    settings: z.string().min(1, {
        message: 'Введите промт для настройки ассистента',
    }),
    comment: z.string().optional(),
    urls: z.array(urlSchema).min(1, {
        message: 'Список страниц сайта, к данных которых будет обращаться ассистент',
    }),
})

type FormData = z.infer<typeof formSchema>;

const AddWebPageAssistantItem = () => {
    const router = useRouter()
    const params = useParams()

    const { isOpen, onClose, type, data } = useModal()
    const isModalOpen = isOpen && type === 'addWebPageAssistant'
    const projectId = data.projectId
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            settings: '',
            comment: '',
            urls: [''] //defining as array of strings here
        },
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'urls', // specifying name field as array of url fields
    });

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: FormData) => {
        try {
            const { name, urls, settings, comment } = values
            await axios.post('/api/assistants/wep-page-assistant', {
                projectId,
                name,
                settings,
                comment,
                urls,v
            })
            form.reset()
            router.refresh()
            onClose()
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        onClose()
        form.reset()
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Настройте своего ассистента
                    </DialogTitle>
                    <DialogDescription className='tetx-center text-zinc-500'>
                        Дайте своему ассистенту имя и настройте его описание. Вы всегда сможете его изменить!
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <div className='space-y-8 px-6'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                            Имя ассистента
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                placeholder='Дайте имя вашему ассистенту'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='settings'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                            Промт для настройки ассистента
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                placeholder='Добавьте промт'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='comment'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                            Комментарий к ассистенту
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                placeholder='Добавьте комментарий'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {fields.map((field, index) => (
                                <div key={field.id} className='flex space-x-2'>
                                    <FormField
                                        control={form.control}
                                        name={`urls.${index}`}
                                        render={({ field }) => (
                                            <FormItem className='flex-1'>
                                                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                                    Ссылка на страницу сайта
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isLoading}
                                                        className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                                        placeholder='Добавьте ссылку'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type='button' disabled={isLoading} onClick={() => remove(index)} className='self-end'>
                                        Удалить
                                    </Button>
                                </div>
                            ))}
                            <Button type='button' disabled={isLoading} onClick={() => append({})}>
                                Добавить ссылку
                            </Button>
                        </div>
                        <DialogFooter className='bg-gray-100 px-6 py-4'>
                            <Button variant='primary' disabled={isLoading}>
                                Добавить
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default AddWebPageAssistantItem;