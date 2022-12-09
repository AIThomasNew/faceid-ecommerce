import React, {useState} from 'react'
import {motion, AnimateSharedLayout, AnimatePresence} from 'framer-motion'

const Nabor = () => {
    return (
        <div className="Nabor padding-class">
            <div className="Text">
                <h4>На время обучения центр предоставляет моделей и все расходные материалы</h4>

                <p>ОТРАБОТКА НА МОДЕЛЯХ</p>
                <span></span>
                <p>
                    Мы даем МАКСИМУМ практики! Каждый ученик под контролем тренера отрабатывает каждую зону на 9 моделях
                    (брови, губы, межресничка). Приступить к работе после обучение - легко! ДАРИМ нашим ученикам
                    стартовый набор, который включает все самое необходимое.
                </p>
            </div>
            <AnimateSharedLayout>
                <motion.ul className="list-ul" layout initial={{borderRadius: 25}}>
                    {items.map((item) => (
                        <Item key={item} />
                    ))}
                </motion.ul>
            </AnimateSharedLayout>
        </div>
    )
}
export default Nabor

function Item() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <motion.li className="list-li" layout onClick={toggleOpen} initial={{borderRadius: 10}}>
            {/* <motion.div className="avatar" layout /> */}
            <motion.div>
                <h4>СТАРТОВЫЙ НАБОР</h4>
                <h5>для ТАРИФА Стандарт стоимостью <h5 className='word-price'>22580 руб.</h5></h5>
            </motion.div>
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    )
}

function Content() {
    return (
        <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <p>• Аппарат mast (мотор Китай) - 6900</p>
            <p>• Блок aurora 2 - 4300</p>
            <p>• Пигмент для век “Black Velvet” от Lip Blush - 1200</p>
            <p>• Пигменты для губ от Lip Blush 3шт по 5мл - 3400 </p>
            <p>• Минеральный пигмент для бровей от “CONTUR pro” - 2700</p>
            <p>• Колпачки для пигмента - 200</p>
            <p>• Подставка для колпачков - 250 </p>
            <p>• Линейка - 200 </p>
            <p>• Картриджи Defender 20 шт - 2080</p>
            <p>• Карандаши для эскиза: белый - 100 коричневый - 200 красный - 200 </p>
            <p>• Коврик для отработки – 200</p>
            <p>• Бандажный бинт – 150 </p>
            <p>• Фартук мастера – 500 СТАРТОВЫЙ НАБОР для ТАРИФА Стандарт+ стоимостью 57980</p>
            <p>• Аппарат WTE (мотор Германия) - 24000 </p>
            <p>• Блок WTE – 12800 </p>
            <p>• RCA (проdод) - 2000</p>
            <p>• Пигмент для век “Black Velvet” от Lip Blush - 1200 </p>
            <p>• Пигменты для губ от Lip Blush 3шт по 5мл - 3400</p>
            <p>• 3 Минеральных пигмента для бровей от “CONTUR pro” – 8100</p>
            <p>• Анастезия первичная b-caine и вторичная TKTX - 2400</p>
            <p>• Колпачки для пигмента - 200 </p>
            <p>• Подставка для колпачков - 250</p>
            <p>• Линейка - 200</p>
            <p>• Картриджи Defender 20 шт - 2080</p>
            <p>• Карандаши для эскиза: белый - 100 коричневый - 200 красный - 200</p>
            <p>• Коврик для отработки – 200</p>
            <p>• Бандажный бинт – 150 </p>
            <p>• Фартук мастера – 500</p>
        </motion.div>
    )
}

const items = [0]
