import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';

// Components
  import UserForm from './components/UserForm';
  import ReviewForm from './components/ReviewForm';
  import Thanks from './components/Thanks';
  import Steps from './components/Steps';

// Hooks
  import { useForm } from "./hooks/useForm.jsx";
  import { useState } from 'react';

import './App.css';
import { BsChatSquareDotsFill } from 'react-icons/bs';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};


export default function App() {
  const [ data, setData ] = useState(formTemplate);

  const updateFielHandle = (key, value) => {
    setData((prev) => {
      return { ...prev, [key] : value};
    })
  }

  const formComponents = [<UserForm data={data} updateFielHandle={updateFielHandle} />, <ReviewForm data={data} updateFielHandle={updateFielHandle} />, <Thanks data={data} />];

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
        <Steps 
          currentStep={currentStep}
        />

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
