import { RoutesForm } from './routes/formRoutes';
import { FormProvider } from './contexts/FormContext';

const App = () => {
  return <>
    <FormProvider>
      <RoutesForm />
    </FormProvider>
  </>
}

export default App
