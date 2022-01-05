import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyles from "components/GlobalStyles";
import Home from "../Home";

const App:FC = () => {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>

    );
};

export default App;
