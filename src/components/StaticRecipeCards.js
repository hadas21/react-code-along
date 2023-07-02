import React from 'react';
import Pomodoro from './Pomodoro';
import PenneArabiatta from './PenneArabiatta';
import Risotto from './Risotto';
import SpaghettiAllaPutanescca from './SpaghettiAllaPutanesca';

function StaticRecipeCards () {
    return (
        <div>
            <Pomodoro/>
            <PenneArabiatta/>
            <Risotto/>
            <SpaghettiAllaPutanescca/>
        </div>
    )
}

export default StaticRecipeCards;