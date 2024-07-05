import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Woman from './routes/Woman';
import Man from './routes/Man';

// const locomotiveScroll = new LocomotiveScroll();

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/collections/woman' element={<Woman />} />
                <Route path='/collections/man' element={<Man />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
