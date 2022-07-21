import './styles/style.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
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
