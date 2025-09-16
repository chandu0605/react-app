import {useNavigate} from 'react-router-dom';
import Carrer from '../carrer/Carrers';

function Service(){
    const navigate = useNavigate();

    const goToCarrer = () => {
        navigate('/Carrer');
    }

    return(
        <>
            <div>
                <h1>This is Service Page</h1>
                <button onClick={goToCarrer}>Carrer Page</button>
            </div>
            <div>
                Hello
            </div>
        </>
    )
}

export default Service;