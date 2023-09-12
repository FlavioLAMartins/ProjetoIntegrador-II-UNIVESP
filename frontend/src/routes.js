import {BrowserRouter, Routes, Route} from "react-router-dom";
import Rotas from "./pages/Rotas";
import RotaHome from "./pages/RotaHome";
import RotaLivro from "./pages/RotaLivro";
import RotaLeitor from "./pages/RotaLeitor";
import PageNotFound from "./pages/PageNotFound";
import RotaRetirada from "./pages/RotaRetirada";
import RotaDevolucao from "./pages/RotaDevolucao";


function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Rotas />}></Route>
                <Route path="/home" element={ <RotaHome />}></Route>
                <Route path="/livro" element={ <RotaLivro />}></Route>
                <Route path="/leitor" element={ <RotaLeitor />}></Route>
                <Route path="/retirada" element={ <RotaRetirada />}></Route>
                <Route path="/devolucao" element={ <RotaDevolucao />}></Route>
                <Route path="*" element={ <PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes;