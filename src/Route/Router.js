import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from '../pages/Landing';
import Quizz from '../pages/Quizz';
import Question from '../components/quizz/Question';
import data from '../Data/QuizzData.json';
import Error404 from '../pages/Error404'
import Resultats from '../components/quizz/Resultats';


//data={data[0].snk}
const Routeur = () =>{
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path = "/" component={Landing}/>
                    <Route exact path="/quizz" component={Quizz}/>
    
                    <Route exact path="/question/1">
                        <Question data={data[0].snk}/>
                    </Route>

                    <Route exact path="/question/2">
                        <Question data={data[1].kny}/>
                    </Route>

                    <Route exact path="/question/3">
                        <Question data={data[2].dbz}/>
                    </Route>

                    <Route exact path="/question/4">
                        <Question data={data[3].naruto}/>
                    </Route>

                    <Route path="/quizz/resultat" component={Resultats}/>

                    <Route path="*">
                        <Error404 />
                    </Route>
                </Switch>
            </Router>
        </>
    )
    
};

export default Routeur