import React,{useContext} from 'react';
import OnboadingMenu from './OnbordingMenu';
import TabMenu from './TabMenu';
import { AuthLoginContext } from '../Provider/AuthLoginContext';

const ReturnEval = () => {
const {switched} = useContext(AuthLoginContext);


  return (
    <>
    {switched == 'avail' ? <TabMenu /> : <OnboadingMenu />}
    </>
  )
}

export default ReturnEval;