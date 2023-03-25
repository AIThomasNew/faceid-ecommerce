import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import './App.css'

import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Footer from './components/footer/Footer'


function App() {
    return (
        <DataProvider>
            <Router>
                <div>
                    <Header />      {/* адаптивен */}
                    <MainPages />   
                    <Footer />      {/* адаптивен */}
                </div>
            </Router>
        </DataProvider>
    )
}

export default App
