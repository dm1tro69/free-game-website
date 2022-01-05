import React, {FC} from 'react';
import {Game} from "types";
import {Description, Details, Genre, Img, StyledLink, Title} from "components/GameCard/styles";

interface Props {
    content: Game
}

const GameCard:FC<Props> = ({content}) => {
    const {id, title, thumbnail, short_description, genre} = content

    const link = `/game/${id}`

    return (
        <StyledLink to={link}>
            <Img src={thumbnail} alt="img"/>
            <Details>
                <Title>{title}</Title>
                <Description>{short_description}</Description>
                <Genre>{genre}</Genre>
            </Details>

        </StyledLink>
    );
};

export default GameCard;
