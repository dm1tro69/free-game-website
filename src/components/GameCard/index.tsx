import React, {FC} from 'react';
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'
import {Game} from "types";
import {Description, Details, Genre, Icon, Img, StyledLink, Title} from "components/GameCard/styles";
import {BROWSER, WINDOWS} from "components/GameCard/constans";

interface Props {
    content: Game
}

const GameCard:FC<Props> = ({content}) => {
    const {id, title, thumbnail, short_description, genre, platform} = content

    const icons = platform.split(',').map(p => {
        let icon = null
        switch (p.trim()) {
            case BROWSER:
                icon = <Icon key={`${id}-browser`} src={browserIcon} alt="img"/>
                break
            case WINDOWS:
                icon = <Icon key={`${id}-windows`} src={windowsIcon} alt="img"/>
                break
            default: break

        }
        return icon
    })

    const link = `/game/${id}`

    return (
        <StyledLink to={link}>
            <Img src={thumbnail} alt="img"/>
            <Details>
                <Title>{title}</Title>
                <Description>{short_description}</Description>
                <Genre>{genre}</Genre>
                {icons}
            </Details>

        </StyledLink>
    );
};

export default GameCard;
