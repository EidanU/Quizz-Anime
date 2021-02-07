import Navbar from '../Navbar';
import Rep from './Reponses';
import {useState,useEffect} from 'react';
import Resultat from './Resultats';


const Question = ({ data }) => {

    const [questionData, setQuestionData] = useState(data);
    const [score, setScore] = useState(0);
    const [nbQuestion, setNbQuestion] = useState(0);
    const [finish, setFinish] = useState(false);

    //setQuestionData
    useEffect(()=>{
        document.title = `Questions numéro ${nbQuestion +1}.`;
    },)

    function HandleAnswer(i){

        //const addclass = document.getElementsByClassName('divAnsw');

        if(questionData[nbQuestion].vraie === questionData[nbQuestion].reponse[i] && nbQuestion <= 9 && score <10){
            // addclass.className.add("correct")
            // setTimeout(function(){
            //     addclass.classList.remove("correct");
            // },3000);
            setScore(score + 1)
        }
        else{
            // addclass.classList.add("faux")
            //     setTimeout(function(){
            //         addclass.className.remove("faux");
            //     },3000);
            setScore(score)
        }
        
        if (nbQuestion < 9){ 
            setNbQuestion(nbQuestion +1);
        }
        else{
            setNbQuestion(nbQuestion);
            setFinish(true);

        }
    }

    return(
        <>
            <Navbar/>
            <br/><br/>
            <section className="divAnsw">
           
                <h3>Question {nbQuestion+1}: {questionData && questionData[nbQuestion].titre} ?</h3>
                <div className="answer">
                    { questionData[nbQuestion].reponse.map((rep,i)=>( 
                                <button key={i} onClick={()=>HandleAnswer(i)}>
                                    <Rep answers={rep}/>
                                </button>
                            ))
                    }
                </div>
             
                {finish ? (<Resultat score={score}/>):("")}
            </section>        
        </>
    );
};

export default Question;