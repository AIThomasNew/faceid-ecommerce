import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import './Study.css'

import FAQs from './FAQs/FAQs'
import Baza from './Baza/Baza'
import Bonus from './Bonus/Bonus'
import ForYou from './ForYou/ForYou'
import KakProhodit from './KakProhodit/KakProhodit'
import ResultLearning from './ResultLearning/ResultLearning'
import Students from './Students/Students'
import Nabor from './Nabor/Nabor'
import Okupaemost from './Okupaemost/Okupaemost'
import Abasheva from './Abasheva/Abasheva'
import Tarif from './Tarif/Tarif'


const Online = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="online-container">
            <div>
                <Baza /> {/* адаптивен */}
                <ForYou /> {/* адаптивен */}
                <ResultLearning /> {/* адаптивен */}
                <KakProhodit /> {/* адаптивен */}
                <FAQs /> {/* исправлен */}
                <Nabor /> {/* исправлен */}
                <Okupaemost /> 
                <Bonus /> 
                <Students /> 
                <Abasheva /> 
                <Tarif /> {/* адаптивен */}
            </div>
        </div>
    )
}

export default Online

// ТЕЗИСЫ МЕЖДУ БЛОКАМИ
// От нуля к профессии за 10 дней
// Обучение - Практика - Результат - Поддержка
