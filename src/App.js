import './styles/style.scss';
import Header from "/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import Delete from "./components/delete";

function App() {
    return (
        <div className="App">
            <Header/>
            <Delete/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
