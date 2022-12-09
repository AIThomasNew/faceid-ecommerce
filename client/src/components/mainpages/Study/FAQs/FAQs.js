import {faqs} from './data'
import FAQ from './FAQ'
import '../Study.css'

const FAQs = () => {
    return (
        <section className="faqs padding-class">
            <h2>ПРОГРАММА КУРСА</h2>

            <span></span>

            <h3>Теория - Первый этап. Онлайн-подготовка 5 дней</h3>

            <div className="container faqs__container">
                <div className="faqs__wrapper">
                    {faqs.map(({id, day, title, lesson, recommendations, result}) => {
                        return (
                            <FAQ
                                key={id}
                                day={day}
                                title={title}
                                lesson={lesson}
                                recommendations={recommendations}
                                result={result}
                            />
                        )
                    })}
                </div>
            </div>

            <h3>Практика - Второй этап. Онлайн-подготовка 5 дней</h3>

            <div className="container faqs__container">
                <div className="faqs__wrapper">
                    {faqs.map(({id, day, title, lesson, recommendations, result}) => {
                        return (
                            <FAQ
                                key={id}
                                day={day}
                                title={title}
                                lesson={lesson}
                                recommendations={recommendations}
                                result={result}
                            />
                        )
                    })}
                </div>
            </div>
            <a href="#For" className="Button-start">
                ХОЧУ НА КУРС
            </a>
        </section>
    )
}

export default FAQs
// import SectionHead from './SectionHead'
// import {FaQuestion} from 'react-icons/fa'
// <SectionHead icon={<FaQuestion/>} title='FAQs' />
