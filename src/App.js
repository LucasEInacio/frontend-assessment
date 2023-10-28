import './App.scss';
import Header from './component/_shared/header';
import MainContent from './component/_shared/mainContent';
import Footer from './component/_shared/footer';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <MainContent />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;