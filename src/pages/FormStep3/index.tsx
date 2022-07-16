import { useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useEffect } from 'react';
import { Container } from './style';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';


export const Step3 = () => {
  const navigate = useNavigate()

  const {state, dispatch} = useForm()

  useEffect(() => {
    if(state.name !== '') {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    } else {
      navigate('/')
    }
    
  }, [])

  const handleFinishStep = () => {

    setTimeout(() => {
      if(state.email && state.github !== '') {
        console.log(state)
        navigate('/step4')
      } else {
        alert('You need to fill the below field before finish')
      }
    }, 2000);

    
  }

  const handleBackStep = () => {
    if (state.name !== '') {
      navigate('/step2')
    } else {
      alert("Fill out the fild")
    }
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleChangeGithub = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <Container>
        <p>Step 3/3</p>
        <h1>cool, {state.name}, where we can find you?</h1>
        <p>Please fill out the fields with your touches to we get in touch with you</p>

        <hr />

        <label>enter your e=mail address
          <input
            type="email"
            value={state.email}
            onChange={handleChangeEmail}
          />
        </label>

        <label>enter you GitHub link
          <input
            type="url"
            value={state.github}
            onChange={handleChangeGithub}
          />
        </label>

        <button onClick={handleBackStep} className="backButton">back</button>
        <button onClick={handleFinishStep}>Finish registration</button>
      </Container>
    </Theme>
  )
}

