import { useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useEffect } from 'react';
import { Container } from './style';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';


export const Step1 = () => {
  const navigate = useNavigate()

  const {state, dispatch} = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate('/step2')
    } else {
      alert("Fill out the fild")
    }
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <Container>
        <p>Step {state.currentStep}/4</p>
        <h1>Let's start with your name</h1>
        <p>Fill out the following field with your full name.</p>

        <hr />

        <label>Full name
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleChangeName}
          />
        </label>

        <button onClick={handleNextStep}>Next</button>
      </Container>
    </Theme>
  )
}

