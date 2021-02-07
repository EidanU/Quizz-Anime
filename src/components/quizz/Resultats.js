import { Link } from "react-router-dom"

const Resultat = ({score}) =>{
return(
    
    <div className="resultat">
      {score > 5 ? <p> Bravo vous avez eu {score}/10</p> : <p> Dommage vous avez eu {score}/10</p> }
      <br/>
      <Link to="/quizz" className='quizz-link'>Tenter un autre quizz</Link>
      </div>
    
)
}
export default Resultat