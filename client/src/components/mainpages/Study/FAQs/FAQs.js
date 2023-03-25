import {faqs, faqs_practise} from './data'
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
                    {faqs.map(({id, day, title, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, recommendations, result}) => {
                        return (
                            <FAQ
                                key={id}
                                day={day}
                                title={title}
                                lesson1={lesson1}
                                lesson2={lesson2}
                                lesson3={lesson3}
                                lesson4={lesson4}
                                lesson5={lesson5}
                                lesson6={lesson6}
                                lesson7={lesson7}
                                lesson8={lesson8}
                                lesson9={lesson9}
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
                    {faqs_practise.map(({id, day, title, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10, recommendations, result}) => {
                        return (
                            <FAQ
                                key={id}
                                day={day}
                                title={title}
                                lesson1={lesson1}
                                lesson2={lesson2}
                                lesson3={lesson3}
                                lesson4={lesson4}
                                lesson5={lesson5}
                                lesson6={lesson6}
                                lesson7={lesson7}
                                lesson8={lesson8}
                                lesson9={lesson9}
                                lesson10={lesson10}
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
