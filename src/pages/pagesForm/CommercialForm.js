import React from 'react';
import PageBanner from '../../components/common/PageBanner';
import PageFormHeader from '../../components/common/PageFormHeader';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';

const CommercialForm = () => {
    const [officesSpaces, setOfficesSpaces] = useState(0);
    const [meetingRooms, setMeetingRooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [cafeterias, setCafeterias] = useState(0);
    const [lounging, setLounging] = useState(0);
    return (
        <div>
            <PageBanner text={"Request a Quote – Commercial Disinfectant Cleaning"} />
            <div className='pageBgPatten'>
                <div className='container p-0 py-5'>
                    <PageFormHeader title={"Commercial Disinfectant Cleaning"} />
                    <div className='formStepOne py-2 w-75 m-auto mt-3 bg-white px-3 rounded-3 shadow-sm'>
                        <h2>STEP 1: Tell us about your commercial space.</h2>
                        <div className='inputForm d-flex align-items-center justify-content-between py-4'>
                            <p className='m-0'>What is the primary use of the space?</p>
                            <input className='w-50' type="text" placeholder='Commercial space' />
                        </div>
                        <div className='inputForm py-3'>
                            <p>Total Square Footage of entire area you want cleaned?</p>
                            <input className='w-100' type="text" placeholder='Enter the square footage for the total area that requires cleaning.  Feel free to add more into.' />
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Height of Ceilings</p>
                            <input className='w-50' type="text" placeholder='Average height of ceiling' />
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>
                                Approx. Total # of all persons in the space?</p>
                            <select name="" id="">
                                <option value="0-10">0-10</option>
                                <option value="11-30">11-30</option>
                                <option value="31-50">31-50</option>
                                <option value="51-100">51-100</option>
                                <option value="101-200">101-200</option>
                                <option value="201-500">201-500</option>
                                <option value="501+">501+</option>
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>At what frequency would you like to have the cleaning?</p>
                            <select name="" id="">
                                <option value="Daily Including weekends">Daily Including weekends</option>
                                <option value="Daily - weekdays only">Daily - weekdays only</option>
                                <option value="Twice / week">Twice / week</option>
                                <option value="3 times / Week">3 times / Week</option>
                                <option value="Every 2 weeks">Every 2 weeks</option>
                                <option value="Every 3 weeks">Every 3 weeks</option>
                                <option value="Every 4 weeks (Monthly)">Every 4 weeks (Monthly)</option>
                                <option value="To be determined">To be determined</option>
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>What time of day would you like the space cleaned?</p>
                            <select name="" id="">
                                <option value="During Regular Business hours">During Regular Business hours</option>
                                <option value="Outside Regular Business hours">Outside Regular Business hours</option>
                                <option value="Overnight (11 p.m. to 7 a.m)">Overnight (11 p.m. to 7 a.m)</option>
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>To your knowledge, has anyone in the space contracted COVID-19 in the last month?</p>
                            <select name="" id="">
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <hr />
                        <h2>STEP 2: Select Space types.</h2>
                        <p className='stepTowP'>Select the quantity for each space type in the area you wish cleaned. This will help ensure we provide you the most accurate estimate possible in just a few minutes.</p>
                        <div className='serviceSpace'>
                            <div className='Space-types-card d-flex align-items-center justify-content-center flex-column'>
                                <h3>
                                    ENCLOSED Offices Spaces
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                Total number of ENCLOSED offices (excluding work station or cubicles).  Enclosed office have ceiling to floor walls/separators with doors.  Typically reserved for management, supervisors, personnel requiring privacy or a lockable area of work.  Sometimes contain more than 1 person in an Enclosed office space.
                                            </Tooltip>
                                        }
                                    >
                                        <span className='ms-2'><BsFillQuestionSquareFill className='toolTip' /></span>
                                    </OverlayTrigger>
                                </h3>
                                <img className='py-4' src="/images/servicesForm/enclosedOffice.png" alt="image" />
                                <div className='inputGroup d-flex align-items-center justify-content-between'>
                                    <button
                                        disabled={officesSpaces === 0}
                                        onClick={() => setOfficesSpaces(officesSpaces - 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlineMinus /></button>
                                    <input className='border-0 text-center form-control h-100  fs-4' type="number" readOnly name='' value={officesSpaces} />
                                    <button
                                        onClick={() => setOfficesSpaces(officesSpaces + 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlinePlus /></button>
                                </div>
                            </div>
                            <div className='Space-types-card d-flex align-items-center justify-content-center flex-column'>
                                <h3>
                                    Conference or Meeting rooms
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                Meeting or conference rooms are enclosed spaces typically used for gathering of teams, usually around a table.  Often include videoconferencing equipment and wall mounted screens or white boards
                                            </Tooltip>
                                        }
                                    >
                                        <span className='ms-2'><BsFillQuestionSquareFill className='toolTip' /></span>
                                    </OverlayTrigger>
                                </h3>
                                <img className='py-4' src="/images/servicesForm/conference_rooms.png" alt="image" />
                                <div className='inputGroup d-flex align-items-center justify-content-between'>
                                    <button
                                        disabled={meetingRooms === 0}
                                        onClick={() => setMeetingRooms(meetingRooms - 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlineMinus /></button>
                                    <input className='border-0 text-center form-control h-100  fs-4' type="number" readOnly name='' value={meetingRooms} />
                                    <button
                                        onClick={() => setMeetingRooms(meetingRooms + 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlinePlus /></button>
                                </div>
                            </div>
                            <div className='Space-types-card d-flex align-items-center justify-content-center flex-column'>
                                <h3>
                                    Conference or Meeting rooms
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                What is the total number of Bathrooms in the entire area you wished to have cleaned.
                                            </Tooltip>
                                        }
                                    >
                                        <span className='ms-2'><BsFillQuestionSquareFill className='toolTip' /></span>
                                    </OverlayTrigger>
                                </h3>
                                <img className='py-4' src="/images/servicesForm/bathrooms.png" alt="image" />
                                <div className='inputGroup d-flex align-items-center justify-content-between'>
                                    <button
                                        disabled={bathrooms === 0}
                                        onClick={() => setBathrooms(bathrooms - 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlineMinus /></button>
                                    <input className='border-0 text-center form-control h-100  fs-4' type="number" readOnly name='' value={bathrooms} />
                                    <button
                                        onClick={() => setBathrooms(bathrooms + 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlinePlus /></button>
                                </div>
                            </div>
                            <div className='Space-types-card d-flex align-items-center justify-content-center flex-column'>
                                <h3>
                                    Cafeterias & Dining Areas
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                This should include cafeterias, lounge area for employees, or kitchenettes for employee self service.  It does not include a full kitchen area for the preparation of meals.
                                            </Tooltip>
                                        }
                                    >
                                        <span className='ms-2'><BsFillQuestionSquareFill className='toolTip' /></span>
                                    </OverlayTrigger>
                                </h3>
                                <img className='py-4' src="/images/servicesForm/cafeterias.png" alt="image" />
                                <div className='inputGroup d-flex align-items-center justify-content-between'>
                                    <button
                                        disabled={cafeterias === 0}
                                        onClick={() => setCafeterias(cafeterias - 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlineMinus /></button>
                                    <input className='border-0 text-center form-control h-100  fs-4' type="number" readOnly name='' value={cafeterias} />
                                    <button
                                        onClick={() => setCafeterias(cafeterias + 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlinePlus /></button>
                                </div>
                            </div>
                            <div className='Space-types-card d-flex align-items-center justify-content-center flex-column'>
                                <h3>
                                    Lounging or Employee / Visitors areas
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                The Lounging or Employee / Visitors areas areas Separate to the reception area.
                                            </Tooltip>
                                        }
                                    >
                                        <span className='ms-2'><BsFillQuestionSquareFill className='toolTip' /></span>
                                    </OverlayTrigger>
                                </h3>
                                <img className='py-4' src="/images/servicesForm/lounging_areas.png" alt="image" />
                                <div className='inputGroup d-flex align-items-center justify-content-between'>
                                    <button
                                        disabled={lounging === 0}
                                        onClick={() => setLounging(lounging - 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlineMinus /></button>
                                    <input className='border-0 text-center form-control h-100  fs-4' type="number" readOnly name='' value={lounging} />
                                    <button
                                        onClick={() => setLounging(lounging + 1)}
                                        className='plusMinus d-flex align-items-center justify-content-center'><AiOutlinePlus /></button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h2>STEP 3: Type of Flooring</h2>
                        <p className='stepTowP'>Provide your best assessment of the overall flooring type in the area you would like cleaned</p>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Wood - Approximate % of the total floor space?</p>
                            <select name="" id="">
                                <option value="0%">0%</option>
                                <option value="10%">10%</option>
                                <option value="20%">20%</option>
                                <option value="30%">30%</option>
                                <option value="40%">40%</option>
                                <option value="50%">50%</option>
                                <option value="60%">60%</option>
                                <option value="70%">70%</option>
                                <option value="80%">80%</option>
                                <option value="90%">90%</option>
                                <option value="100%">100%</option>
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Cement - Approximate % of the floor space?</p>
                            <select name="" id="">
                                <option value="0%">0%</option>
                                <option value="10%">10%</option>
                                <option value="20%">20%</option>
                                <option value="30%">30%</option>
                                <option value="40%">40%</option>
                                <option value="50%">50%</option>
                                <option value="60%">60%</option>
                                <option value="70%">70%</option>
                                <option value="80%">80%</option>
                                <option value="90%">90%</option>
                                <option value="100%">100%</option>
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Carpeting - Approximate % of the floor space? (excludes area & moveable rugs)</p>
                            <select name="" id="">
                                <option value="0%">0%</option>
                                <option value="10%">10%</option>
                                <option value="20%">20%</option>
                                <option value="30%">30%</option>
                                <option value="40%">40%</option>
                                <option value="50%">50%</option>
                                <option value="60%">60%</option>
                                <option value="70%">70%</option>
                                <option value="80%">80%</option>
                                <option value="90%">90%</option>
                                <option value="100%">100%</option>
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Ceramic/Marble/Finished stone - Approximate % of the floor space?</p>
                            <select name="" id="">
                                <option value="0%">0%</option>
                                <option value="10%">10%</option>
                                <option value="20%">20%</option>
                                <option value="30%">30%</option>
                                <option value="40%">40%</option>
                                <option value="50%">50%</option>
                                <option value="60%">60%</option>
                                <option value="70%">70%</option>
                                <option value="80%">80%</option>
                                <option value="90%">90%</option>
                                <option value="100%">100%</option>
                            </select>
                        </div>
                        <div className='inputForm py-3'>
                            <p>Is there any other information regarding the floor space?</p>
                            <input className='w-100' type="text" placeholder='Please add any other information you feel we should know about and is pertinent or missing in the above.' />
                        </div>
                        <hr />
                        <h2>STEP 4: Let us know who we'll be contacting</h2>
                        <p className='stepTowP'>You will instantly receive an email summarizing the information entered in this Quote Request. In addition, we will call you within the next 10 minutes to provide you a quote. Thanks you & talk real soon!</p>
                        <div className='inputForm d-flex align-items-center justify-content-between gap-4 pt-3'>
                            <input className='w-100' type="text" placeholder='First name' />
                            <input className='w-100' type="text" placeholder='Last name' />
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between gap-4 pt-2 pb-3'>
                            <input className='w-100' type="email" placeholder='Email' />
                            <input className='w-100' type="number" placeholder='Phone number' />
                        </div>
                        <hr />
                        <h2>STEP 5: Location of the commercial space</h2>
                        <div className='inputForm d-flex align-items-center justify-content-between gap-4 pt-3'>
                            <input className='w-100' type="text" placeholder='Street Address' />
                            <input className='w-100' type="text" placeholder='Unit/Apt/Suite #' />
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between gap-4 pt-2 pb-3'>
                            <input className='w-100' type="text" placeholder='City' />

                            <input className='w-100' type="text" placeholder='Unit/Apt/Suite #' />
                        </div>
                        <hr />
                        <div className='text-center pt-2 pb-4'>
                            <button className='fromSubmitButton'>Request a quote </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CommercialForm;