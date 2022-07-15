import { createContext, ReactNode, useContext, useReducer } from "react";

interface State {
    currentStep: number,
    name: string,
    level: 0 | 1,
    email: string,
    github: string
};

interface Action {
    type: FormActions;
    payload: any
};


const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
};

interface FormProviderProps {
    children:ReactNode
}

interface ContextType {
    state: State,
    dispatch: (action: Action) => void
};

const FormContext = createContext<ContextType | undefined>(undefined);
// usamos o undefined para qunado o FormContext Comeca


export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
};

const FormReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload }
        case FormActions.setName:
            return { ...state, name: action.payload }
        case FormActions.setLevel:
            return { ...state, level: action.payload }
        case FormActions.setEmail:
            return { ...state, email: action.payload }
        case FormActions.setGithub:
            return { ...state, github: action.payload }
        default:
            return state;
    };
};

export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

// Context Hook

export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm need to be used inside of FormProvider')
    };
    return context;
};

