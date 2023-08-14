import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import LoadingBar from 'react-top-loading-bar'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


const  App = ()=> {
    const pageSize = 9;

    const [progress, setProgress] = useState(0)
        return (
            <Router>
                <div>
                    <Navbar />
                    <LoadingBar
                        height={3}
                        color='#f11946'
                        progress={progress}
                    />
                    <Routes>
                        <Route exact path="/" element={<Card setProgress={setProgress} pageSize={pageSize} />} />
                    </Routes>
                </div>
            </Router>
        )
}
export default App;