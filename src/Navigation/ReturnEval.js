import React,{useContext} from 'react';
import OnboadingMenu from './OnbordingMenu';
import { AuthLoginContext } from '../Provider/AuthLoginContext';
import StartMenu from './StartMenu';

const ReturnEval = () => {
const {switched} = useContext(AuthLoginContext);


  return (
    <>
    {switched == 'avail' ? <StartMenu /> : <OnboadingMenu />}
    </>
  )
}

export default ReturnEval;