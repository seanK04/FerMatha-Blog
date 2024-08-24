import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Blog1 from './pages/Blog1';
// You would import Blog2, Blog3, etc. here similarly

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog1" element={<Blog1 />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
