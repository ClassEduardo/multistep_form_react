import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';

// Components
  import UserForm from './components/UserForm';
  import ReviewForm from './components/ReviewForm';
  import Thanks from './components/Thanks';

// Hooks
  import { useForm } from "./hooks/useForm.jsx";

import './App.css';

export default function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm( formComponents );

  return (
    <div className="App">
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com sua compra, utilize o formulário a baixo para avaliar o podruto
        </p>
      </div>
      <div className='form-container'>
        <p>Etapas</p>

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>

          <div className="inputs-container">{currentComponent}</div>

          <div className='actions'>

            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
              <button type='submit'> 
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'> 
                <span>Enviar</span>
                <FiSend />
              </button>
            )}

          </div>
        </form>
      </div>
    </div>
  )
}
