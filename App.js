import 'react-native-gesture-handler';
import Navigation from './src/Navigation/Navigation';
import Home from './src/Screens/auth/Home';
import { GlobalAuthContext } from './src/Provider/AuthLoginContext';
const App = ()=>{
    return (
        <GlobalAuthContext>

            <Navigation />
        </GlobalAuthContext>
    );
}

export default App;

