import React, { useState, useEffect, MouseEvent } from 'react';
import { useDecisionTreeContext } from './DecisionTreeContext';
import { NodeProps, Handle, Position } from 'reactflow';
import { Input } from '@/components/ui/input';
import Dropzone from 'react-dropzone';
import Select from 'react-select';

interface CustomNodeData {
    label: string;
    params: {
        companyName?: string;
        companyDescription?: string;
        assistantGoal?: string;
        stepDescription?: string;
        assistantAction?: string;
        reminder?: {
            text: string;
            delay: number;
            delayType: 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS';
        };
        audio?: string;
        video?: string;
        file?: string;
        saveToCRM?: boolean;
        additionalFunctions?: { functionName: string; params: Record<string, any> }[];
    };
    isInitialNode?: boolean;
}

const functionOptions = [
    { value: 'sendReminder', label: 'Напоминание' },
    { value: 'sendAudio', label: 'Аудио сообщение' },
    { value: 'sendVideo', label: 'Видео сообщение' },
    { value: 'sendFile', label: 'Файловое сообщение' },
];

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ id, data }) => {
    const { setNodes, setSelectedNodeId } = useDecisionTreeContext();
    const [params, setParams] = useState(data.params);

    const handleNodeClick = (e: MouseEvent) => {
        e.stopPropagation();
        setSelectedNodeId(id);
    };

    const handleChange = (key: keyof CustomNodeData['params'], value: any) => {
        setNodes(nds =>
            nds.map(node =>
                node.id === id ? { ...node, data: { ...node.data, params: { ...node.data.params, [key]: value } } } : node
            )
        );
    };

    const onDrop = (acceptedFiles: File[], fileType: 'audio' | 'video' | 'file') => {
        const filePath = URL.createObjectURL(acceptedFiles[0]);
        handleChange(fileType, filePath);
    };

    useEffect(() => {
        setParams(data.params);
    }, [data]);

    const handleAdditionalFunctionChange = (index: number, functionName: string) => {
        const updatedFunctions = params.additionalFunctions?.map((func, i) =>
            i === index ? { ...func, functionName } : func
        );

        setParams((prevState) => ({
            ...prevState,
            additionalFunctions: updatedFunctions,
        }));
        handleChange('additionalFunctions', updatedFunctions);
    };

    const handleFunctionParamsChange = (index: number, params: Record<string, any>) => {
        const updatedFunctions = params.additionalFunctions?.map((func:any, i:any) =>
            i === index ? { ...func, params } : func
        );

        setParams((prevState) => ({
            ...prevState,
            additionalFunctions: updatedFunctions,
        }));
        handleChange('additionalFunctions', updatedFunctions);
    };

    const renderAdditionalFunctions = () => {
        return (params.additionalFunctions || []).map((func, index) => (
            <div key={index}>
                <label>
                    Выберите функцию:
                    <Select
                        options={functionOptions}
                        value={functionOptions.find((option) => option.value === func.functionName)}
                        onChange={(option) => handleAdditionalFunctionChange(index, option?.value || '')}
                    />
                </label>
                {func.functionName && renderFunctionParamsFields(func, index)}
            </div>
        ));
    };

    const renderFunctionParamsFields = (func: { functionName: string; params: Record<string, any> }, index: number) => {
        switch (func.functionName) {
            case 'sendReminder':
                return (
                    <>
                        <label>
                            Текст:
                            <Input
                                type="text"
                                value={func.params.text || ''}
                                onChange={(e) => handleFunctionParamsChange(index, { ...func.params, text: e.target.value })}
                            />
                        </label>
                        <label>
                            Таймаут:
                            <Input
                                type="number"
                                value={func.params.time || ''}
                                onChange={(e) => handleFunctionParamsChange(index, { ...func.params, time: e.target.value })}
                            />
                        </label>
                        <label>
                            Единицы времени:
                            <select
                                value={func.params.delayType || 'SECONDS'}
                                onChange={(e) => handleFunctionParamsChange(index, { ...func.params, delayType: e.target.value })}
                            >
                                <option value="SECONDS">Секунды</option>
                                <option value="MINUTES">Минуты</option>
                                <option value="HOURS">Часы</option>
                                <option value="DAYS">Дни</option>
                            </select>
                        </label>
                    </>
                );
            case 'sendAudio':
                return (
                    <Dropzone onDrop={(files) => onDrop(files, 'audio')} accept={{ "audio/*": [".mp4", ".wav", ".mp3"] }} multiple={false}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: 'p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer border border=#e2e8f0]' })}>
                                <input {...getInputProps()} />
                                <p>Добавьте аудио файл</p>
                            </div>
                        )}
                    </Dropzone>
                );
            case 'sendVideo':
                return (
                    <Dropzone onDrop={(files) => onDrop(files, 'video')} accept={{ "video/*": [".mp4", ".avi", ".mov"] }} multiple={false}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: 'p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer border border=#e2e8f0]' })}>
                                <input {...getInputProps()} />
                                <p>Добавьте видео файл</p>
                            </div>
                        )}
                    </Dropzone>
                );
            case 'sendFile':
                return (
                    <Dropzone onDrop={(files) => onDrop(files, 'file')} multiple={false}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: 'p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer border border=#e2e8f0]' })}>
                                <input {...getInputProps()} />
                                <p>Добавьте файл</p>
                            </div>
                        )}
                    </Dropzone>
                );
            default:
                return null;
        }
    };

    return (
        <div
            style={{
                padding: 10,
                border: '1px solid #000',
                borderRadius: 5,
                background: '#fff',
                color: '#000',
                position: 'relative',
            }}
            onClick={handleNodeClick}
        >
            {data.isInitialNode ? (
                <>
                    <div>
                        <p> Начальный блок </p>
                        <label> Название компании: <Input type="text" value={params.companyName} onChange={e => handleChange('companyName', e.target.value)} /> </label>
                        <label> Описание компании: <Input type="text" value={params.companyDescription} onChange={e => handleChange('companyDescription', e.target.value)} /> </label>
                        <label> Цель ассистента: <Input type="text" value={params.assistantGoal} onChange={e => handleChange('assistantGoal', e.target.value)} /> </label>
                    </div>
                </>
            ) : (
                <>
                    <p> Шаг - {id}</p>
                    <label> Описание шага: <Input type="text" value={params.stepDescription} onChange={e => handleChange('stepDescription', e.target.value)} /> </label>
                    <label> Действие ассистента: <Input type="text" value={params.assistantAction} onChange={e => handleChange('assistantAction', e.target.value)} /> </label>
                    <label> Сохранить в CRM: <Input type="checkbox" checked={params.saveToCRM} onChange={e => handleChange('saveToCRM', e.target.checked)} /> </label>
                    {renderAdditionalFunctions()}
                </>
            )}
            <Handle type="target" position={Position.Top} style={{ background: '#000' }} />
            <Handle type="source" position={Position.Bottom} style={{ background: '#000' }} />
        </div>
    );
};

export default CustomNode;
