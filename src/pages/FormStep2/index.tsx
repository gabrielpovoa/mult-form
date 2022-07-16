import { useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useEffect } from 'react';
import { Container } from './style';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import SelectOption from '../../components/SelectOption';
import { Link } from 'react-router-dom';


export const Step2 = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step3')
    } else {
      alert("Fill out the fild")
    }
  }

  const handleBackStep = () => {
    if (state.name !== '') {
      navigate('/')
    } else {
      alert("Fill out the fild")
    }
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <Container>
        <p>Step {state.currentStep}/4</p>
        <h1>{state.name}, What is the best description of you right now?</h1>
        <p>Select an option that matches you</p>

        <hr />

        <SelectOption
          title="I'm newbie"
          description="I started to coding less tahn two months ago."
          icon='🥳'
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="I'm software engineer"
          description="I've been coding for over eight months or more."
          icon='👨🏻‍💻'
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <button 
          onClick={handleBackStep}
          className="backButton"
          >
          back
        </button>
        <button onClick={handleNextStep}>Next</button>
      </Container>
    </Theme>
  )
}

