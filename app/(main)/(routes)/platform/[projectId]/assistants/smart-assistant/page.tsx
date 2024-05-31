'use client'
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
} from '@/components/ui/form'

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
import Diagram from '@/components/ui/assistant-diagram'// Импортируем наш новый компонент
import AddBlockForm from '@/components/ui/add-diagram-block-form'
import { useState } from 'react'

// Другой код здесь...

const AddSmartAssistantItem = () => {
    const [nodes, setNodes] = useState<Array<{ key: string; color: string; param1: string; param2: string }>>([]);
    const [links, setLinks] = useState<Array<{ from: string; to: string; fromPort: string; toPort: string }>>([]);
  
    const handleAddBlock = (block: { key: string; color: string; param1: string; param2: string }) => {
      setNodes([...nodes, block]);
    };
    return (
        <div>

        <AddBlockForm onAddBlock={handleAddBlock} />
        <Diagram nodes={nodes} links={links} />
        </div>
    )
}

export default AddSmartAssistantItem;
