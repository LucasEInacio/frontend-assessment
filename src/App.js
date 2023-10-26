import './App.scss';
import Header from './component/_shared/header';
import MainContent from './component/_shared/mainContent';
import Footer from './component/_shared/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;