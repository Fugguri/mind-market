"use client";
import { z } from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Dialog,
  DialogTitle, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogDescription
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/use-modal-store';
import { useParams, useRouter } from 'next/navigation';
import Dropzone from 'react-dropzone';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Введите имя ассистента' }),
  settings: z.string().min(1, { message: 'Введите промт для настройки ассистента' }),
  comment: z.string().optional(),
  files: z.array(z.any()).min(1, { message: 'Добавьте хотя бы один файл' }),
});

type FormData = z.infer<typeof formSchema>;

const AddDocumentAssistantItem = () => {
  const router = useRouter();
  const params = useParams();

  const { isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === 'addDocumentsAssistant';
  const projectId = data.projectId;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', settings: '', comment: '', files: [] }
  });

  const { fields, append, remove } = useFieldArray({
    name: "files",
    control: form.control,
  });

  const isLoading = form.formState.isSubmitting;

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      append(file);
    });
  };

  const onSubmit = async (values: FormData) => {
    console.log("Submitting form with values: ", values);
    try {
      
      const formData = new FormData();
      // @ts-ignore
      formData.append('projectId', projectId);
      formData.append('name', values.name);
      formData.append('settings', values.settings);
      formData.append('comment', values.comment || '');

      values.files.forEach((file, index) => {
        formData.append(`files[${index}]`, file);
      });

      await axios.post('/api/assistants/documents',formData )
      console.log("Form submitted successfully");
      form.reset();
      onClose();
      router.refresh();
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const handleClose = () => {
    onClose();
    form.reset();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className='bg-white text-black p-0 overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl text-center font-bold'>Настройте своего ассистента</DialogTitle>
          <DialogDescription className='text-center text-zinc-500'>Дайте своему ассистенту имя и настройте его описание. Вы всегда сможете его изменить!</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='space-y-8 px-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>Имя ассистента</FormLabel>
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
                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>Промт для настройки ассистента</FormLabel>
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
                      <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>Комментарий к ассистенту</FormLabel>
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
              <FormField
                control={form.control}
                name='files'
                render={() => (
                  <Dropzone onDrop={onDrop} accept={{ "image/*": [".jpg", ".jpeg", ".png"] }} multiple={true} maxSize={5000000}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps({ className: 'p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer border border-[#e2e8f0]' })}>
                        <input {...getInputProps()} />
                        <p>Добавьте файлы</p>
                      </div>
                    )}
                  </Dropzone>
                )}
              />
              {fields.map((field, index) => (
                <div key={field.id} className='flex space-x-2'>
                  <FormItem className='flex-1'>
                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>Файл</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                        value={field.name}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <Button type='button' disabled={isLoading} onClick={() => remove(index)} className='self-end'>Удалить</Button>
                </div>
              ))}
            </div>
            <DialogFooter className='bg-gray-100 px-6 py-4'>
              <Button type='submit' variant='primary' disabled={isLoading}>Добавить</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDocumentAssistantItem;