import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FAQ = ({day, title, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10, recommendations, result}) => {
    const [isLessonsShowing, setIsLessonsShowing] = useState(false)

    return (
        <article className="faq" onClick={() => setIsLessonsShowing((prev) => !prev)}>

            <div className="plus">
                <div>
                    <h4>{day}</h4>
                    <h5>{title}</h5>
                </div>
                <button className="faq__icon">{isLessonsShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            </div>

            {isLessonsShowing && (
                <div className="minus">
                    <ul>
                        <li>{lesson1}</li>
                        <li>{lesson2}</li>
                        <li>{lesson3}</li>
                        <li>{lesson4}</li>
                        <li>{lesson5}</li>
                        <li>{lesson6}</li>
                        <li>{lesson7}</li>
                        <li>{lesson8}</li>
                        <li>{lesson9}</li>
                        <li>{lesson10}</li>
                    </ul>
                    <h4>{recommendations}</h4>
                    <h4>{result}</h4>
                </div>
            )}
        </article>
    )
}

export default FAQ
