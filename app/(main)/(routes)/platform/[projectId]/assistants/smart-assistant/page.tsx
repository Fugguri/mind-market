'use client';

import React, { useState, useEffect, createContext, useContext, MouseEvent, ReactNode } from 'react';
import { NextPage } from 'next';
import Select from 'react-select';
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

// Определение типов для параметров и данных узлов
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
      time: string;
    };
    saveToCRM?: boolean;
    additionalFunctions?: {
      functionName: string;
      params: Record<string, any>;
    }[];
  };
  isInitialNode?: boolean;
}

// Исходные узлы
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

// Исходные грани
const initialEdges: Edge[] = [];

// Интерфейсы контекста и провайдера
interface DecisionTreeContextProps {
  setNodes: React.Dispatch<React.SetStateAction<Node<CustomNodeData>[]>>;
  setSelectedNodeId: React.Dispatch<React.SetStateAction<string | null>>;
}

const DecisionTreeContext = createContext<DecisionTreeContextProps | undefined>(undefined);

const useDecisionTreeContext = () => {
  const context = useContext(DecisionTreeContext);
  if (!context) {
    throw new Error('useDecisionTreeContext must be used within a DecisionTreeProvider');
  }
  return context;
};

interface DecisionTreeProviderProps {
  children: ReactNode;
  setNodes: React.Dispatch<React.SetStateAction<Node<CustomNodeData>[]>>;
  setSelectedNodeId: React.Dispatch<React.SetStateAction<string | null>>;
}

const DecisionTreeProvider: React.FC<DecisionTreeProviderProps> = ({ children, setNodes, setSelectedNodeId }) => {
  return (
    <DecisionTreeContext.Provider value={{ setNodes, setSelectedNodeId }}>
      {children}
    </DecisionTreeContext.Provider>
  );
};

// Опции для функций
const functionOptions = [
  { value: 'sendReminder', label: 'Отправить напоминалку' },
  { value: 'sendAudio', label: 'Отправить аудиосообщение' },
  { value: 'sendVideo', label: 'Отправить видеосообщение' },
];

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ id, data }) => {
  const { setNodes, setSelectedNodeId } = useDecisionTreeContext();
  const [companyName, setCompanyName] = useState(data.params.companyName || '');
  const [companyDescription, setCompanyDescription] = useState(data.params.companyDescription || '');
  const [assistantGoal, setAssistantGoal] = useState(data.params.assistantGoal || '');
  const [stepDescription, setStepDescription] = useState(data.params.stepDescription || '');
  const [assistantAction, setAssistantAction] = useState(data.params.assistantAction || '');
  const [reminderText, setReminderText] = useState(data.params.reminder?.text || '');
  const [reminderTime, setReminderTime] = useState(data.params.reminder?.time || '');
  const [saveToCRM, setSaveToCRM] = useState(data.params.saveToCRM || false);
  const [additionalFunctions, setAdditionalFunctions] = useState(data.params.additionalFunctions || [{ functionName: '', params: {} }]);

  const handleNodeClick = (e: MouseEvent) => {
    e.stopPropagation();
    setSelectedNodeId(id);
  };

  const handleChange = <T extends keyof CustomNodeData['params']>(key: T, value: CustomNodeData['params'][T]) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, params: { ...node.data.params, [key]: value } } } : node
      )
    );
  };

  const handleAdditionalFunctionChange = (index: number, functionName: string) => {
    const updatedFunctions = additionalFunctions.map((func, i) =>
      i === index ? { ...func, functionName } : func
    );

    setAdditionalFunctions(updatedFunctions);
    handleChange('additionalFunctions', updatedFunctions);
  };

  const handleFunctionParamsChange = (index: number, params: Record<string, any>) => {
    const updatedFunctions = additionalFunctions.map((func, i) =>
      i === index ? { ...func, params } : func
    );

    setAdditionalFunctions(updatedFunctions);
    handleChange('additionalFunctions', updatedFunctions);
  };

  const renderFunctionParamsFields = (func: { functionName: string; params: Record<string, any> }, index: number) => {
    switch (func.functionName) {
      case 'sendReminder':
        return (
          <>
            <label>
              Текст:
              <input
                type="text"
                value={func.params.text || ''}
                onChange={(e) => handleFunctionParamsChange(index, { ...func.params, text: e.target.value })}
              />
            </label>
            <label>
              Таймаут:
              <input
                type="text"
                value={func.params.time || ''}
                onChange={(e) => handleFunctionParamsChange(index, { ...func.params, time: e.target.value })}
              />
            </label>
          </>
        );
      case 'sendAudio':
        return (
          <label>
            Имя файла:
            <input
              type="text"
              value={func.params.fileName || ''}
              onChange={(e) => handleFunctionParamsChange(index, { ...func.params, fileName: e.target.value })}
            />
          </label>
        );
      case 'sendVideo':
        return (
          <label>
            Имя файла:
            <input
              type="text"
              value={func.params.fileName || ''}
              onChange={(e) => handleFunctionParamsChange(index, { ...func.params, fileName: e.target.value })}
            />
          </label>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (data.isInitialNode) {
      setCompanyName(data.params.companyName || '');
      setCompanyDescription(data.params.companyDescription || '');
      setAssistantGoal(data.params.assistantGoal || '');
    } else {
      setStepDescription(data.params.stepDescription || '');
      setAssistantAction(data.params.assistantAction || '');
      setReminderText(data.params.reminder?.text || '');
      setReminderTime(data.params.reminder?.time || '');
      setSaveToCRM(data.params.saveToCRM || false);
      setAdditionalFunctions(data.params.additionalFunctions || [{ functionName: '', params: {} }]);
    }
  }, [data]);

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
            <p> Шаг - {id}</p>
            <br />
            <label>
              Название компании:
              <input type="text" value={companyName} onChange={(e) => handleChange('companyName', e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Описание компании:
              <input
                type="text"
                value={companyDescription}
                onChange={(e) => handleChange('companyDescription', e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Цель ассистента (промт):
              <input type="text" value={assistantGoal} onChange={(e) => handleChange('assistantGoal', e.target.value)} />
            </label>
          </div>
        </>
      ) : (
        <>
          <div>
            <p> Шаг - {id}</p>
            <br />
            <label>
              Описание шага:
              <input
                type="text"
                value={stepDescription}
                onChange={(e) => handleChange('stepDescription', e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Что должен делать ассистент (вопрос):
              <input type="text" value={assistantAction} onChange={(e) => handleChange('assistantAction', e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Напоминание текст:
              <input
                type="text"
                value={reminderText}
                onChange={(e) => {
                  const reminder = { 
                    ...data.params.reminder, 
                    text: e.target.value, 
                    time: data.params.reminder?.time ?? '' // or any default value like '12:00'
                  };
                  handleChange('reminder', reminder);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Напоминание минуты:
              <input
                type="text"
                value={reminderTime}
                onChange={(e) => {
                  const reminder = { 
                    ...data.params.reminder, 
                    text: data.params.reminder?.text ?? '', 
                    time: e.target.value,// or any default value like '12:00'
                  };
                  handleChange('reminder', reminder);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Сохранить в CRM:
              <input type="checkbox" checked={saveToCRM} onChange={(e) => handleChange('saveToCRM', e.target.checked)} />
            </label>
          </div>
          {additionalFunctions.map((func, index) => (
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
          ))}
        </>
      )}
      <Handle type="target" position={Position.Top} style={{ background: '#000' }} />
      <Handle type="source" position={Position.Bottom} style={{ background: '#000' }} />
    </div>
  );
};

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
          reminder: { text: '', time: '' },
          saveToCRM: false,
          additionalFunctions: [{ functionName: '', params: {} }],
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
      const { stepDescription, assistantAction, reminder, additionalFunctions } = step.data.params;
      prompt += `\nШаг ${index + 1}:\nОписание шага: ${stepDescription}\nДействие ассистента: ${assistantAction}\n`;
      if (reminder) {
        prompt += `отправь напоминание: через ${reminder.time} минут\n с текстом - ${reminder.text} `;
      }
      additionalFunctions?.forEach((func, idx) => {
        prompt += `вызови функцию ${idx + 1}: ${func.functionName}, параметры: ${JSON.stringify(func.params)}\n`;
      });
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