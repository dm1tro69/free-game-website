import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Game} from "types";
import {API_HOST} from "components/GameList/constants";

const GameList = () => {
    const [games, setgames] = useState<Game[]>([])
    const [err, setErr] = useState<string>('')

    useEffect(() => {
        axios.get('/games', {
            baseURL: `https://${API_HOST}/api`
        })
    }, [])

    return (
        <div>

        </div>
    );
};

export default GameList;
