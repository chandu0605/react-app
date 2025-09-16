import {useNavigate} from 'react-router-dom';
import Service from '../serices/Services';
import './home.css';

export function Home() {
    const navigate = useNavigate();


    const goToService = () => {
        navigate('/Service');
    }

    const goToProducts = () => {
        navigate('/Products');
    }

    return (
      
        <div> 
            <h1>Hello</h1>
            <p>React Project</p>
            <button className="p-4" onClick ={goToService}>service Page</button>
            <button onClick ={goToProducts}>Products page</button>
        </div>
       

    )
}

export default Home;



