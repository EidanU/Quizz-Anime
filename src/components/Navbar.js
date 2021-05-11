import { Link, BrowserRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>

                    <li>
                        <Link to="/eidanu.github.io/Quizz-Anime">Home</Link>
                    </li>
                    <li>
                        <Link to="/eidanu.github.io/Quizz-Anime/quizz">Page Quizz</Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}
export default Navbar