import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Footer from './components/footer/Footer'

import './App.css'


function App() {
    return (
        <DataProvider>
            <Router>
                <div>
                    <Header />
                    <MainPages />
                    <Footer />
                </div>
            </Router>
        </DataProvider>
    )
}

export default App
