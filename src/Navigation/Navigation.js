import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Loader from '../Utils/Loader';
import ReturnEval from './ReturnEval';
import { AuthLoginContext } from '../Provider/AuthLoginContext';

export default function App() {
  const {switched} = useContext(AuthLoginContext);
  return (
    <NavigationContainer>
        {
          userState == 'init' ? <Loader /> : <ReturnEval />
        }
    </NavigationContainer>
  );
}