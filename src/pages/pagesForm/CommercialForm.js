import React from 'react';
import PageBanner from '../../components/common/PageBanner';
import PageFormHeader from '../../components/common/PageFormHeader';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import FormSpaceType from '../../components/common/FormSpaceType';
const percentages = [
    { percent: "0%" },
    { percent: "10%" },
    { percent: "20%" },
    { percent: "30%" },
    { percent: "40%" },
    { percent: "50%" },
    { percent: "60%" },
    { percent: "70%" },
    { percent: "80%" },
    { percent: "90%" },
    { percent: "100%" },
]
const frequencys = [
    { frequency: "Daily Including weekends" },
    { frequency: "Daily - weekdays only" },
    { frequency: "Twice / week" },
    { frequency: "3 times / Week" },
    { frequency: "Every 2 weeks" },
    { frequency: "Every 3 weeks" },
    { frequency: "Every 4 weeks (Monthly)" },
    { frequency: "To be determined" },
]
const provinces = [
    { province: "Select a province" },
    { province: "Alberta" },
    { province: "British Columbia" },
    { province: "Manitoba" },
    { province: "New Brunswick" },
    { province: "Newfoundland and Labrador" },
    { province: "Nova Scotia" },
    { province: "Nunavut" },
    { province: "Prince Edward Island" },
    { province: "Quebec" },
    { province: "Saskatchewan" },
    { province: "Yukon" },
]
const personsCount = [
    { person: "0-10" },
    { person: "11-30" },
    { person: "31-50" },
    { person: "51-100" },
    { person: "101-200" },
    { person: "201-500" },
    { person: "501+" },
]
const CommercialForm = () => {
    const [commercialSpace, setCommercialSpace] = useState("")
    const [totalSquareFootage, setTotalSquareFootage] = useState("")
    const [heightOfCeilings, setHeightOfCeilings] = useState("")
    const [persons, setPersons] = useState("")
    const [frequency, setFrequency] = useState("")
    const [wood, setWood] = useState("")
    const [cement, setCement] = useState("")
    const [carpeting, setCarpeting] = useState("")
    const [ceramic, setCeramic] = useState("")
    const [floorSpace, setFloorSpace] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [unit, setUnit] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [officesSpaces, setOfficesSpaces] = useState(0);
    const [meetingRooms, setMeetingRooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [cafeterias, setCafeterias] = useState(0);
    const [lounging, setLounging] = useState(0);
    const [yesNo, setYesNo] = useState("no");
    const [buttonGroup, setButtonGroup] = useState("outside");
    const fullData = {
        order: "commercial",
        commercialSpace, totalSquareFootage, heightOfCeilings, persons, frequency,
        covid: yesNo,
        time_of_day: buttonGroup,
        user_data: { firstName, lastName, email, phone },
        location: { address, city, postalCode, unit, province },
        type_of_flooring: { wood, cement, ceramic, carpeting, floorSpace },
        space_types: { officesSpaces, meetingRooms, bathrooms, cafeterias, lounging }
    }

    const handelSubmit = () => {
        console.log(fullData);
    }
    return (
        <div>
            <PageBanner text={"Request a Quote – Commercial Disinfectant Cleaning"} />

            {/* full page */}
            <div className='pageBgPatten'>
                <div className='container py-5'>
                    {/* page heading */}
                    <PageFormHeader title={"Commercial Disinfectant Cleaning"} />
                    {/* page form full */}
                    <div className='formStepOne py-2 m-auto mt-3 bg-white px-3 rounded-3 shadow-sm'>

                        {/* Form step one */}
                        <h2>STEP 1: Tell us about your commercial space.</h2>
                        <div className='inputForm d-flex align-items-center justify-content-between py-4'>
                            <p className='m-0'>What is the primary use of the space?</p>
                            <input
                                onChange={(e) => setCommercialSpace(e.target.value)}
                                className='w-50' type="text" placeholder='Commercial space' />
                        </div>
                        <div className='inputForm py-3'>
                            <p>Total Square Footage of entire area you want cleaned?</p>
                            <input
                                onChange={(e) => setTotalSquareFootage(e.target.value)}
                                className='w-100' type="text" placeholder='Enter the square footage for the total area that requires cleaning.  Feel free to add more into.' />
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Height of Ceilings</p>
                            <input
                                onChange={(e) => setHeightOfCeilings(e.target.value)}
                                className='w-50' type="text" placeholder='Average height of ceiling' />
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>
                                Approx. Total # of all persons in the space?</p>
                            <select
                                onChange={(e) => setPersons(e.target.value)}
                                name="" id="">
                                {personsCount.map((person, i) =>
                                    <option key={i} value={person.person}>{person.person}</option>
                                )}
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>At what frequency would you like to have the cleaning?</p>
                            <select
                                onChange={(e) => setFrequency(e.target.value)}
                                name="" id="">
                                {frequencys.map((frequency, i) =>
                                    <option key={i} value={frequency.frequency}>{frequency.frequency}</option>
                                )}
                            </select>
                        </div>
                        {/* input button group */}
                        <div className='inputForm py-3'>
                            <p className='m-0'>What time of day would you like the space cleaned?</p>
                            <div className='buttonGroupCleaned mt-4 text-center'>
                                <button
                                    onClick={() => setButtonGroup("during")}
                                    className={`space-cleaned-btn border--left ${buttonGroup == "during" ? "button--active" : ""}`}
                                >During Regular Business hours</button>
                                <button
                                    onClick={() => setButtonGroup("outside")}
                                    className={`space-cleaned-btn border--left border--middle ${buttonGroup == "outside" ? "button--active" : ""}`}
                                >Outside Regular Business hours</button>
                                <button
                                    onClick={() => setButtonGroup("overnight")}
                                    className={`space-cleaned-btn borderLg border--right ${buttonGroup == "overnight" ? "button--active" : ""}`}>Overnight (11 p.m. to 7 a.m)</button>
                            </div>
                        </div>
                        {/* yes no button group */}
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>To your knowledge, has anyone in the space contracted COVID-19 in the last month?</p>
                            <div className='yes-no-but-group mt-4 text-center'>
                                <button
                                    onClick={() => setYesNo("yes")}
                                    className={`yes-no-btn borderRight ${yesNo == "yes" ? "button--active" : ""}`}>Yes</button>
                                <button
                                    onClick={() => setYesNo("no")}
                                    className={`yes-no-btn ${yesNo == "no" ? "button--active" : ""}`}>No</button>
                            </div>
                        </div>
                        <hr />
                        {/* Form step tow */}
                        <h2>STEP 2: Select Space types.</h2>
                        <p className='stepTowP'>Select the quantity for each space type in the area you wish cleaned. This will help ensure we provide you the most accurate estimate possible in just a few minutes.</p>

                        {/* services space input count */}
                        <div className='serviceSpace'>
                            <FormSpaceType
                                toolTip={"Total number of ENCLOSED offices (excluding work station or cubicles).  Enclosed office have ceiling to floor walls/separators with doors.  Typically reserved for management, supervisors, personnel requiring privacy or a lockable area of work.  Sometimes contain more than 1 person in an Enclosed office space."}
                                title={"ENCLOSED Offices Spaces"}
                                image={"/images/servicesForm/enclosedOffice.png"}
                                setFun={setOfficesSpaces}
                                set={officesSpaces} />
                            <FormSpaceType
                                title={" Conference or Meeting rooms"}
                                toolTip={"Meeting or conference rooms are enclosed spaces typically used for gathering of teams, usually around a table.  Often include videoconferencing equipment and wall mounted screens or white boards"}
                                image={"/images/servicesForm/conference_rooms.png"}
                                setFun={setMeetingRooms}
                                set={meetingRooms} />
                            <FormSpaceType
                                title={" Men & Women Bathrooms"}
                                toolTip={"What is the total number of Bathrooms in the entire area you wished to have cleaned."}
                                image={"/images/servicesForm/bathrooms.png"}
                                setFun={setBathrooms}
                                set={bathrooms} />
                            <FormSpaceType
                                title={" Cafeterias & Dining Areas"}
                                toolTip={"This should include cafeterias, lounge area for employees, or kitchenettes for employee self service.  It does not include a full kitchen area for the preparation of meals."}
                                image={"/images/servicesForm/cafeterias.png"}
                                setFun={setCafeterias}
                                set={cafeterias} />
                            <FormSpaceType
                                title={"Lounging or Employee / Visitors areas"}
                                toolTip={"The Lounging or Employee / Visitors areas areas Separate to the reception area."}
                                image={"/images/servicesForm/lounging_areas.png"}
                                setFun={setLounging}
                                set={lounging} />
                        </div>
                        <hr />

                        {/* Form step three */}
                        <h2>STEP 3: Type of Flooring</h2>
                        <p className='stepTowP'>Provide your best assessment of the overall flooring type in the area you would like cleaned</p>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Wood - Approximate % of the total floor space?</p>
                            <select
                                onChange={(e) => setWood(e.target.value)}
                                name="" id="">
                                {percentages.map((percentage, i) =>
                                    <option key={i} value={percentage.percent}>{percentage.percent}</option>
                                )}
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Cement - Approximate % of the floor space?</p>
                            <select
                                onChange={(e) => setCement(e.target.value)}
                                name="" id="">
                                {percentages.map((percentage, i) =>
                                    <option key={i} value={percentage.percent}>{percentage.percent}</option>
                                )}
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Carpeting - Approximate % of the floor space? (excludes area & moveable rugs)</p>
                            <select
                                onChange={(e) => setCarpeting(e.target.value)}
                                name="" id="">
                                {percentages.map((percentage, i) =>
                                    <option key={i} value={percentage.percent}>{percentage.percent}</option>
                                )}
                            </select>
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>Ceramic/Marble/Finished stone - Approximate % of the floor space?</p>
                            <select
                                onChange={(e) => setCeramic(e.target.value)}
                                name="" id="">
                                {percentages.map((percentage, i) =>
                                    <option key={i} value={percentage.percent}>{percentage.percent}</option>
                                )}
                            </select>
                        </div>
                        <div className='inputForm py-3'>
                            <p>Is there any other information regarding the floor space?</p>
                            <input
                                onChange={(e) => setFloorSpace(e.target.value)}
                                className='w-100' type="text" placeholder='Please add any other information you feel we should know about and is pertinent or missing in the above.' />
                        </div>
                        <hr />

                        {/* Form step four customer info */}
                        <h2>STEP 4: Let us know who we'll be contacting</h2>
                        <p className='stepTowP'>You will instantly receive an email summarizing the information entered in this Quote Request. In addition, we will call you within the next 10 minutes to provide you a quote. Thanks you & talk real soon!</p>
                        <div className='inputForm d-flex align-items-center justify-content-between gap-4 pt-3'>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                className='w-100' type="text" placeholder='First name' />
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                className='w-100' type="text" placeholder='Last name' />
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between gap-4 pt-2 pb-3'>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-100' type="email" placeholder='Email' />
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                className='w-100' type="number" placeholder='Phone number' />
                        </div>
                        <hr />

                        {/* Form step five customer address */}
                        <h2>STEP 5: Location of the commercial space</h2>
                        <div className='inputForm d-flex align-items-center justify-content-between gap-4 pt-3'>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                className='w-100' type="text" placeholder='Street Address' />
                            <input
                                onChange={(e) => setUnit(e.target.value)}
                                className='w-100' type="text" placeholder='Unit/Apt/Suite #' />
                        </div>
                        <div className='inputForm d-flex align-items-center justify-content-between gap-4 pt-2 pb-3'>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                className='w-100' type="text" placeholder='City' />
                            <select
                                onChange={(e) => setProvince(e.target.value)}
                                name="" id="">
                                {provinces.map((province, i) =>
                                    <option key={i} value={province.province}>{province.province}</option>
                                )}
                            </select>
                            <input
                                onChange={(e) => setPostalCode(e.target.value)}
                                className='w-100' type="text" placeholder='Postal Code' />
                        </div>
                        <hr />
                        {/* Form submit button */}
                        <div className='text-center pt-2 pb-4'>
                            <button
                                onClick={handelSubmit}
                                className='quoteButton'>Request a quote </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default CommercialForm;