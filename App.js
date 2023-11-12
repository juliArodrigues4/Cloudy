import {NavigationContainer} from '@react-navigation/native';

import Rotas from './components/rotasStack';
import RotasTab from './components/rotasTab';

export default function App() {
  return (
    <NavigationContainer>
     <Rotas />
    </NavigationContainer>
  );
}
 export function Home()
{
  return(
    <NavigationContainer>
      <RotasTab />
    </NavigationContainer>
  );
}