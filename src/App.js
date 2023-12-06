import FormComponent from "./components/FormComponent";
import { BrowserRouter, useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavComponent from "./components/NavComponent";
import ZapatosM from "./pages/ZapatosM";
import MochilaM from "./pages/MochilaM";
import SacoM from "./pages/SacoM";
import ListProductsPage from "./pages/ListProductsPage";



import SacoH from "./pages/SacoH";
import MochilaH from "./pages/MochilaH";
import ZapatosH from "./pages/ZapatosH";



function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <FormComponent /> },
      { path: "/HomePage", element: <HomePage /> },
      { path: "/UsersPage", element: <h1>Esta es mi pagina de usuarios</h1> },
      { path: "/ZapatosM", element:<ZapatosM />  },
      {path: "/MochilaM", element: <MochilaM />},
      {path: "/SacoM", element: <SacoM />},

      { path: "/ZapatosH", element:<ZapatosH />  },
      {path: "/SacoH", element: <SacoH />},
      {path: "/MochilaH", element: <MochilaH />},
      {path: "/ListProductsPage", element: <ListProductsPage />},
    
     
    ]);
    return routes;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavComponent />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
