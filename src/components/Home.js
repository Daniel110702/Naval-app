import { useContext } from 'react';
import { context } from '../context/authContext';

function Home() {

    const authContext = useContext(context);

    console.log(authContext);

  return (
    <div>
      Home
    </div>
  )
}

export default Home
