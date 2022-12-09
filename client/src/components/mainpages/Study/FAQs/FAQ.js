import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FAQ = ({day, title, lesson, recommendations, result}) => {
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
                        <li>{lesson}</li>
                        <li>{lesson}</li>
                        <li>{lesson}</li>
                    </ul>
                    <h4>{recommendations}</h4>
                    <h4>{result}</h4>
                </div>
            )}
        </article>
    )
}

export default FAQ
