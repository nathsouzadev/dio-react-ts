import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Perfil from './pages/Perfil'

const MainRoutes = () => {
    return(
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/:user' exact={true} component={Perfil} />
        </Switch>
    )
}

export default MainRoutes;
