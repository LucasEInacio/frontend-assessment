import './App.scss';
import Header from './component/_shared/header';
import MainContent from './component/_shared/mainContent';
import Footer from './component/_shared/footer';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Provider store={store}>
                    <MainContent />
                </Provider>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;