'use client'

import React, { useState, useEffect, MouseEvent } from 'react';
import { NextPage } from 'next';
import {
    Background,
    Controls,
    ReactFlow,
    ReactFlowProvider,
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Handle,
    Position,
    Edge,
    Node,
    Connection,
    NodeChange,
    EdgeChange,
    NodeProps,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { BtnOutlineIcon } from '@/components/buttons';
import { useDecisionTreeContext, CustomNodeData, DecisionTreeProvider } from '@/components/assistant/smart-assistant/DecisionTreeContext';
import CustomNode from '@/components/assistant/smart-assistant/CustomNode';

const initialNodes: Node<CustomNodeData>[] = [
    {
        id: '1',
        type: 'custom',
        data: {
            label: 'Начальный блок',
            params: { companyName: '', companyDescription: '', assistantGoal: '' },
            isInitialNode: true,
        },
        position: { x: 250, y: 5 },
    },
];

const initialEdges: Edge[] = [];

const nodeTypes = { custom: CustomNode };

const DecisionTree: NextPage = () => {
    const [nodes, setNodes] = useState<Node<CustomNodeData>[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

    const onNodesChange = (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds));
    const onEdgesChange = (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds));
    const onConnect = (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds));

    const addNode = (e: MouseEvent) => {
        e.preventDefault();
        const id = (nodes.length + 1).toString();
        const newNode: Node<CustomNodeData> = {
            id,
            type: 'custom',
            data: {
                label: `Шаг ${id}`,
                params: {
                    stepDescription: '',
                    assistantAction: '',
                    reminder: { text: '', delay: 5, delayType: 'SECONDS' },
                    saveToCRM: false,
                    audio: '',
                    video: '',
                    file: '',
                },
            },
            position: { x: Math.random() * 500, y: Math.random() * 500 },
        };
        setNodes((nds) => [...nds, newNode]);
    };

    const deleteNode = () => {
        if (selectedNodeId) {
            setNodes((nds) => nds.filter((node) => node.id !== selectedNodeId));
            setEdges((eds) => eds.filter((edge) => edge.source !== selectedNodeId && edge.target !== selectedNodeId));
            setSelectedNodeId(null);
        }
    };

    const sendPromptToAPI = async () => {
        const payload = {
            nodes,
            edges,
            prompt: generatePrompt(nodes),
        };
        console.log(generatePrompt(nodes));
        try {
            console.log(payload);
            // const response = await fetch('/api/decision-tree', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(payload),
            // });

            // if (response.ok) {
            //   console.log('Данные успешно отправлены');
            // } else {
            //   console.error('Ошибка при отправке данных');
            // }
        } catch (error) {
            console.error('Ошибка сети:', error);
        }
    };

    const generatePrompt = (nodes: Node<CustomNodeData>[]) => {
        const initialNode = nodes.find((node) => node.data.isInitialNode);
        const steps = nodes.filter((node) => !node.data.isInitialNode);
        let prompt = '';

        if (initialNode) {
            const { companyName, companyDescription, assistantGoal } = initialNode.data.params;
            prompt += `Компания: ${companyName}\nОписание: ${companyDescription}\nЦель ассистента: ${assistantGoal}\n`;
        }

        steps.forEach((step, index) => {
            const { stepDescription, assistantAction, reminder, audio, video, file } = step.data.params;
            prompt += `\nШаг ${index + 1}:\nОписание шага: ${stepDescription}\нДействие ассистента: ${assistantAction}\н`;
            if (reminder) {
                prompt += `отправь напоминание через ${reminder.delay} ${reminder.delayType} с текстом - "${reminder.text}"\n`;
            }
            if (audio) prompt += `отправь аудио сообщение: "${audio}"\н`;
            if (video) prompt += `отправь видео сообщение: " ${video}"\н`;
            if (file) prompt += `отправь файл: "${file}"\н`;
        });

        return prompt;
    };

    useEffect(() => {
        if (selectedNodeId) {
            const nodeExists = nodes.find((node) => node.id === selectedNodeId);
            if (!nodeExists) {
                setSelectedNodeId(null);
            }
        }
    }, [nodes, selectedNodeId]);

    return (
        <ReactFlowProvider>
            <DecisionTreeProvider setNodes={setNodes} setSelectedNodeId={setSelectedNodeId}>
                <div>
                    <div style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <BtnOutlineIcon onClick={addNode} text='Добавить узел' />
                        <BtnOutlineIcon onClick={deleteNode} disabled={!selectedNodeId} text='Удалить узел' />
                        <BtnOutlineIcon onClick={sendPromptToAPI} text='Отправить данные' />
                    </div>
                    <div style={{ width: '80vw', height: 'calc(90vh - 50px)' }}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            nodeTypes={nodeTypes}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            style={{ width: '100%', height: '100%' }}
                            nodesDraggable
                            nodesConnectable
                            elementsSelectable
                            fitView
                        >
                            <Controls />
                            <Background color="#aaa" gap={16} />
                        </ReactFlow>
                    </div>
                </div>
            </DecisionTreeProvider>
        </ReactFlowProvider>
    );
};

export default DecisionTree;