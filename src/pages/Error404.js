import {Link} from 'react-router-dom';
const Error = ()=>{
    return (
        <div className="errorPage">
            <h2>ERROR 404 !</h2>
            <p>La page spécifié n'existe pas!</p>
            <br/>
            <Link to="/">Retour Sur la page d'accueil</Link>
            
        </div>
    )
}

export default Error