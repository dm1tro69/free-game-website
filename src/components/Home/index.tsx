import React, {ReactElement} from 'react';
import Games from "components/GameList/GameList.container";
import withErrorBoundary from "hoc/withErrorBoundary";

const Home = (): ReactElement => {
    return (
        <main>
            <Games/>
        </main>
    );
};


export default withErrorBoundary(Home);
