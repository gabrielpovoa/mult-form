import { useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useEffect } from 'react';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import { Container, Info, Content } from './style';

export const ShowInfo = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name !== '') {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      })
    } else {
      navigate('/')
    }

  }, [])

  return (
    <Theme>
      <Container>
        <p>Step {state.currentStep}/4</p>
        <h1>Here you gonna be alble to see all your datum</h1>

        <hr />
        <Info>
          <h2>Name and Skill</h2>
          <Content>
            Name: {state.name}<br />
            Profissional: {state.level }
          </Content>

          <h2>Get in touch</h2>
          <Content>
            E-mail: {state.email}<br />
            GitHub: {state.github}
          </Content>

        </Info>
      </Container>
    </Theme>
  )
}

