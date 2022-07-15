import React, { ReactNode } from 'react';
import Header from '../Header';
import SidebarItem from '../SidebarItem';
import { Container, Area, Steps, Sidebar, Page } from './style';
import { useForm } from '../../contexts/FormContext'

interface Props {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm()

    return (
        <Container>
            <Area>
                <Header />

                <Steps >
                    <Sidebar>
                        <SidebarItem
                            title="Personal"
                            description="Introduce yourself"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Profissional"
                            description="Your Level"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Contacts"
                            description="How can we find you"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </Sidebar>
                    <Page>
                        {children}
                    </Page>
                </Steps>
            </Area>
        </Container>
    )
}
