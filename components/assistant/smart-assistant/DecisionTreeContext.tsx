import { createContext, useContext, ReactNode } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Node } from 'reactflow';

interface ReminderParams {
  text: string;
  delay: number;
  delayType: 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS';
}

export interface CustomNodeData {
  label: string;
  params: {
    companyName?: string;
    companyDescription?: string;
    assistantGoal?: string;
    stepDescription?: string;
    assistantAction?: string;
    reminder?: ReminderParams;
    audio?: string;
    video?: string;
    file?: string;
    saveToCRM?: boolean;
  };
  isInitialNode?: boolean;
}

interface DecisionTreeContextProps {
  setNodes: Dispatch<SetStateAction<Node<CustomNodeData>[]>>;
  setSelectedNodeId: Dispatch<SetStateAction<string | null>>;
}

const DecisionTreeContext = createContext<DecisionTreeContextProps | undefined>(undefined);

export const useDecisionTreeContext = () => {
  const context = useContext(DecisionTreeContext);
  if (!context) {
    throw new Error('useDecisionTreeContext must be used within a DecisionTreeProvider');
  }
  return context;
};

interface DecisionTreeProviderProps {
  children: ReactNode;
  setNodes: Dispatch<SetStateAction<Node<CustomNodeData>[]>>;
  setSelectedNodeId: Dispatch<SetStateAction<string | null>>;
}

export const DecisionTreeProvider: React.FC<DecisionTreeProviderProps> = ({ children, setNodes, setSelectedNodeId }) => {
  return (
    <DecisionTreeContext.Provider value={{ setNodes, setSelectedNodeId }}>
      {children}
    </DecisionTreeContext.Provider>
  );
};