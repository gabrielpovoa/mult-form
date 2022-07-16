import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Info, Title, Description, IconArea, Point } from './style'

import profile from '../../svg/profile.svg'
import book from '../../svg/book.svg'
import mail from '../../svg/mail.svg'

interface Props {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean
}

const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <Container>
            <Link to={path}>
                <Info>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Info>
                <IconArea active={active}>
                    {/* REFAZER */}
                    {icon === 'profile' &&
                        <span>🦜</span>
                    }
                    {icon === 'book' &&
                        <span>🐦</span>
                    }
                    {icon === 'mail' &&
                        <span>🦚</span>
                    }
                    {icon === 'information' &&
                        <span>🐓</span>
                    }
                </IconArea>

                <Point active={active}></Point>
            </Link>
        </Container>
    )
}

export default SidebarItem