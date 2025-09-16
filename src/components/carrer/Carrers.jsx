import {useNavigate} from 'react-router-dom';


function Carrer() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }


  return (
    <>
      <h1>This is Carrer Page</h1>
      <p>Search your job here</p>
      <button onClick={goToHome}>Home Page</button>
    </>
  );
}

export default Carrer;
