import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/formulario'
import Tabela from './Pages/tabela'

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/"element={<Home/>}/>
                <Route path="/tabela"element={<Tabela/>}/>
                
            </Routes>
        </Router>
    );
}
export default App;