import {Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Quizz = () => {
    return ( 
       <>
            <Navbar/>
            <div className="quizzPage">
                <div className="quizz">
                    <h2> Quizz Shingeki no Kyojin </h2>
                    <Link to="/question/1" >
                        Commencer 
                    </Link>
                </div>
                <div className="quizz">
                    <h2> Quizz Kimetsu no Yaiba </h2> 
                    <Link to="/question/2">
                        Commencer 
                    </Link>
                </div>
                <div className="quizz">
                    <h2> Quizz Dragon Ball Z</h2> 
                    <Link to="/question/3">
                    Commencer 
                    </Link > 
                </div>
                <div className="quizz">
                    <h2> Quizz Naruto </h2> 
                    <Link to="/question/4"> 
                        Commencer 
                    </Link> 
                </div>
            </div>
        </>
        
    )
}
export default Quizz;