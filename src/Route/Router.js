import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from '../pages/Landing';
import Quizz from '../pages/Quizz';
import Question from '../components/quizz/Question';
import data from '../Data/QuizzData.json';
import Error404 from '../pages/Error404'
import Resultats from '../components/quizz/Resultats';


//data={data[0].snk}
const Routeur = () => {
    const myUrl = "/Quizz-Anime";
    return (
        <>
            <Router>
                <Switch>
                    <Route path={myUrl} component={Landing} />
                    <Route path={myUrl + '/quizz'} component={Quizz} />

                    <Route path={myUrl + "/question/1"}>
                        <Question data={data[0].snk} />
                    </Route>

                    <Route path={myUrl + "/question/2"}>
                        <Question data={data[1].kny} />
                    </Route>

                    <Route path={myUrl + "/question/3"}>
                        <Question data={data[2].dbz} />
                    </Route>

                    <Route path={myUrl + "/question/4"}>
                        <Question data={data[3].naruto} />
                    </Route>

                    <Route path={myUrl + "/quizz/resultat"} component={Resultats} />

                    <Route path="*">
                        <Error404 />
                    </Route>
                </Switch>
            </Router>
        </>
    )

};

export default Routeur