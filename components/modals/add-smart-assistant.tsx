// import axios from 'axios';
// import * as z from 'zod';
// import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
// import { useParams, useRouter } from 'next/navigation';
// import { zodResolver } from '@hookform/resolvers/zod';

// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from '../ui/form';

// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogFooter,
//     DialogHeader,
//     DialogDescription,
// } from '@/components/ui/dialog';

// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { useModal } from '@/hooks/use-modal-store';
// import AssistantDiagram from '@/components/ui/assistant-diagram';

// const formSchema = z.object({
//     name: z.string().min(1, {
//         message: 'Введите имя ассистента',
//     }),
//     settings: z.string().min(1, {
//         message: 'Введите промт для настройки ассистента',
//     }),
//     comment: z.string().optional(),
//     urls: z.array(z.object({
//         value: z.string().url('Введите корректный URL')
//     })).optional()
// });

// type FormData = z.infer<typeof formSchema>;

// const AddSmartAssistantItem: React.FC = () => {
//     const router = useRouter();
//     const params = useParams();

//     const { isOpen, onClose, type, data } = useModal();
//     const isModalOpen = isOpen && type === 'addWebPageAssistant';
//     const projectId = data ? data.projectId : '';

//     const form = useForm<FormData>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             name: '',
//             settings: '',
//             comment: '',
//             urls: [{ value: '' }],
//         },
//     });

//     const { fields, append, remove } = useFieldArray({
//         control: form.control,
//         name: 'urls',
//     });

//     const isLoading = form.formState.isSubmitting;

//     const onSubmit: SubmitHandler<FormData> = async (values: FormData) => {
//         try {
//             const { name, settings, comment, urls = [] } = values;
//             await axios.post('/api/assistants', {
//                 projectId,
//                 name,
//                 settings,
//                 comment,
//                 urls: urls.map(urlObj => urlObj.value),
//             });
//             form.reset();
//             router.refresh();
//             onClose();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleClose = () => {
//         onClose();
//         form.reset();
//     };

//     const diagramModel = {
//         class: 'go.GraphLinksModel',
//         nodeDataArray: [
//             { key: '1', text: 'Assistant Name', color: 'lightblue', loc: '0 0' },
//             { key: '2', text: 'Assistant Settings', color: 'orange', loc: '150 0' },
//             // Добавь сюда больше узлов по мере необходимости
//         ],
//         linkDataArray: [
//             { from: '1', to: '2' },
//             // Добавь сюда больше связей по мере необходимости
//         ],
//     };

//     return (
//         <Dialog open={isModalOpen} onOpenChange={handleClose}>
//             <DialogContent className="bg-white text-black p-0 overflow-hidden">
//                 <DialogHeader className="pt-8 px-6">
//                     <DialogTitle className="text-2xl text-center font-bold">
//                         Настройте своего ассистента
//                     </DialogTitle>
//                     <DialogDescription className="text-center text-zinc-500">
//                         Дайте своему ассистенту имя и настройте его описание. Вы всегда сможете его изменить!
//                     </DialogDescription>
//                 </DialogHeader>
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                         <div className="space-y-8 px-6">
//                             <FormField
//                                 control={form.control}
//                                 name="name"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
//                                             Имя ассистента
//                                         </FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 disabled={isLoading}
//                                                 className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
//                                                 placeholder="Дайте имя вашему ассистенту"
//                                                 {...field}
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name="settings"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
//                                             Промт для настройки ассистента
//                                         </FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 disabled={isLoading}
//                                                 className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
//                                                 placeholder="Добавьте промт"
//                                                 {...field}
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name="comment"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
//                                             Комментарий к ассистенту
//                                         </FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 disabled={isLoading}
//                                                 className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
//                                                 placeholder="Добавьте комментарий"
//                                                 {...field}
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             {fields.map((item, index) => (
//                                 <div key={item.id} className="flex items-center gap-2">
//                                     <FormField
//                                         control={form.control}
//                                         name={`urls.${index}.value` as const}
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormControl>
//                                                     <Input
//                                                         disabled={isLoading}
//                                                         className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
//                                                         placeholder="Добавьте URL"
//                                                         {...field}
//                                                     />
//                                                 </FormControl>
//                                                 <Button type="button" variant="secondary" disabled={isLoading} onClick={() => remove(index)}>-</Button>
//                                             </FormItem>
//                                         )}
//                                     />
//                                 </div>
//                             ))}
//                             <Button type="button" disabled={isLoading} onClick={() => append({ value: '' })}>
//                                 Добавить ссылку
//                             </Button>
//                         </div>
//                         {/* Вставляем наш компонент AssistantDiagram здесь */}
//                         <div className="px-6">
//                             <AssistantDiagram model={diagramModel} />
//                         </div>
//                         <DialogFooter className="bg-gray-100 px-6 py-4">
//                             <Button type="submit" variant="primary" disabled={isLoading}>
//                                 Добавить
//                             </Button>
//                         </DialogFooter>
//                     </form>
//                 </Form>
//             </DialogContent>
//         </Dialog>
//     );
// };

// export default AddSmartAssistantItem;