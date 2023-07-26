import 'react-native-gesture-handler';
import Navigation from './src/Navigation/Navigation';
import Home from './src/Screens/auth/Home';
import { GlobalAuthContext } from './src/Provider/AuthLoginContext';
import codePush from "react-native-code-push";

const App = () => {
    return (
        <GlobalAuthContext>
            

                <Navigation />
        
        </GlobalAuthContext>
    );
}

export default codePush(App);

