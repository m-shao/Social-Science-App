import logo from '../images/logo.svg';
import { useScience, useScienceUpdate } from '../context/ScienceContext';
import { Link } from 'react-router-dom';

function NavigationBar(){
    let page = useScience()

    let link1 = ""
    let link2 = ""
    if(page === "Anthropologie"){
        link1 = "Psychologie"
        link2 = "Sociologie"
    }
    else if(page === "Psychologie"){
        link1 = "Anthropologie"
        link2 = "Sociologie"
    }
    else{
        link1 = "Anthropologie"
        link2 = "Psychologie"
    }

    const changeScience = useScienceUpdate()

    return(
        <div className="nav">
            <ul className="nav-container">
                <li className="nav-links" onClick={() => changeScience(link1)}>
                    <Link to={`/${link1}`}>{ link1 }</Link>
                </li>
                
                <img src={ logo } alt="" className='logo'/>

                <li className="nav-links" onClick={() => changeScience(link2)}>
                    <Link to={`/${link2}`}>{ link2 }</Link>
                </li>
            </ul>
        </div>
    )



}

export default NavigationBar
    