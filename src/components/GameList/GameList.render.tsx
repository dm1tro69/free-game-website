import React, {FC} from 'react';
import {Game} from "types";
import GameCard from "components/GameCard";

interface Props {
    err?: string
    games: Game[]
}

const Gamelist:FC<Props> = ({err, games}) => {
    if (err) {
        return <p>Unable to fetch games</p>
    }
    if (games?.length){
        return <p>No games available</p>
    }
    return (
        <ul>
            {games.map((game) => (
                <li key={game.id}><GameCard content={game}/></li>
            ))}
        </ul>
    );
};

export default Gamelist;
