import React from 'react';
import Virtual from '../../Virtual/Virtual'
import {ImCheckmark} from 'react-icons/im'

const ResultLearning = () => {
    return (
        <div>
            <div className="Result-Learning padding-class">
                    <div className="Result-container">
                        <div className="Result-content">
                            <h2>РЕЗУЛЬТАТЫ ОБУЧЕНИЯ</h2>
                            <span></span>
                            <ul>
                                <li>
                                    <div>
                                        <ImCheckmark />
                                    </div>
                                    Вы освоите одну из самых востребованных и высокооплачиваемых профессий в
                                    бьюти-сфере.
                                </li>
                                <li>
                                    <div>
                                        <ImCheckmark />
                                    </div>
                                    Научитесь видеть и подчеркивать индивидуальную красоту каждого клиента.
                                </li>
                                <li>
                                    <div>
                                        <ImCheckmark />
                                    </div>
                                    Освоите на практике создание эскизов и подбор пигментов.
                                </li>
                                <li>
                                    <div>
                                        <ImCheckmark />
                                    </div>
                                    Научитесь выполнять перманентный макияж бровей, губ и межреснички в самых популярных
                                    техниках.
                                </li>
                                <li>
                                    <div>
                                        <ImCheckmark />
                                    </div>
                                    Приобретете уверенность в своих действиях при работе с клиентом.
                                </li>
                                <li>
                                    <div>
                                        <ImCheckmark />
                                    </div>
                                    Сразу после обучения сможете приступить к работе: для этого у вас будут все знания и
                                    навыки + стартовый набор.
                                </li>
                                <li>
                                    <div>
                                        <ImCheckmark />
                                    </div>
                                    Получите доступ к бессрочному чату поддержки учеников.
                                </li>
                            </ul>
                        </div>
                        <div className="Result-virtual">
                            <Virtual />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ResultLearning;
