import React from 'react';
import PageBanner from '../../components/common/PageBanner';
import PageFormHeader from '../../components/common/PageFormHeader';
import { useState } from 'react';
import FormSpaceType from '../../components/common/FormSpaceType';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
const tables = [
    { table: "1-10 tables" },
    { table: "11 - 25 tables" },
    { table: "26 - 50 tables" },
    { table: "51 - 75 tables" },
    { table: "76 - 100 tables" },
    { table: "More than 100 tables" },
]
const chairs = [
    { chair: "Less than 25 chairs" },
    { chair: "25 - 50 chairs" },
    { chair: "51 - 100 chairs" },
    { chair: "100 - 200 chairs" },
    { chair: "200 - 300 chairs" },
    { chair: "More than 300 chairs" },
]
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
const RestaurantForm = () => {
    const [totalSquareFootage, setTotalSquareFootage] = useState("")
    const [heightOfCeilings, setHeightOfCeilings] = useState("")
    const [frequency, setFrequency] = useState("")
    const [bestTime, setBestTime] = useState("")
    const [wood, setWood] = useState("")
    const [table, setTable] = useState("")
    const [chair, setChair] = useState("")
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
    const [bathrooms, setBathrooms] = useState(0);
    const [toiletStalls, setToiletStalls] = useState(0);
    const [yesNo, setYesNo] = useState("no");
    const [kitchen, setKitchen] = useState("yes");
    const [locker, setLocker] = useState("yes");

    const fullData = {
        order: "restaurant",
        totalSquareFootage, heightOfCeilings, table, chair, frequency, bestTime,
        covid: yesNo,
        user_data: { firstName, lastName, email, phone },
        location: { address, city, postalCode, unit, province },
        type_of_flooring: { wood, cement, ceramic, carpeting, floorSpace },
        space_types: { bathrooms, toiletStalls, kitchen, locker }
    }

    const handelSubmit = () => {
        console.log(fullData);
    }
    return (
        <div>
            <PageBanner text={"Request a Quote – Restaurant & Cafe Cleaning"} />

            {/* full page */}
            <div className='pageBgPatten'>
                <div className='container p-0 py-5'>
                    {/* page heading */}
                    <PageFormHeader title={"Restaurant & Cafe Cleaning"} />
                    {/* page form full */}
                    <div className='formStepOne py-2 m-auto mt-3 bg-white px-3 rounded-3 shadow-sm'>

                        {/* Form step one */}
                        <h2>STEP 1: Tell us about your restaurant or cafe</h2>
                        <div className='inputForm py-3'>
                            <p>What is the total square footage of the space?</p>
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
                        <div className='inputForm py-3'>
                            <p className='mb-3'>Total Chairs and Tables (including standing tables and bar stools)</p>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <select
                                    onClick={(e) => setTable(e.target.value)}
                                    className='w-100'
                                    name="" id="">
                                    {tables.map((table, i) =>
                                        <option key={i} value={table.table}>{table.table}</option>
                                    )}
                                </select>
                                <select
                                    onClick={(e) => setChair(e.target.value)}
                                    className='w-100'
                                    name="" id="">
                                    {chairs.map((chair, i) =>
                                        <option key={i} value={chair.chair}>{chair.chair}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        {/* yes no button */}
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
                        <div className='inputForm d-flex align-items-center justify-content-between py-3'>
                            <p className='m-0'>What time of day would you like the space cleaned?</p>
                            <input
                                onChange={(e) => setBestTime(e.target.value)}
                                className='w-50' type="text" placeholder='Best time to clean' />
                        </div>
                        <hr />
                        {/* Form step tow */}
                        <h2>STEP 2: Select Space types.</h2>
                        <p className='stepTowP'>Select the quantity for each space type in the area you wish cleaned. This will help ensure we provide you the most accurate estimate possible in just a few minutes.</p>

                        {/* services space input count */}
                        <div className='serviceSpace'>
                            <div className='Space-types-card d-flex align-items-center justify-content-center flex-column'>
                                <h3>
                                    Kitchen
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                We will contact you separately for kitchens
                                            </Tooltip>
                                        }
                                    >
                                        <span className='ms-2'><BsFillQuestionSquareFill className='toolTip' /></span>
                                    </OverlayTrigger>
                                </h3>
                                <img className='py-4' src="/images/servicesForm/kitchen.png" alt="image" />
                                <div className='yes-no-but-group mt-4 text-center'>
                                    <button
                                        onClick={() => setKitchen("yes")}
                                        className={`yes-no-btn borderRight ${kitchen == "yes" ? "button--active" : ""}`}>Yes</button>
                                    <button
                                        onClick={() => setKitchen("no")}
                                        className={`yes-no-btn ${kitchen == "no" ? "button--active" : ""}`}>No</button>
                                </div>
                            </div>
                            <div className='Space-types-card d-flex align-items-center justify-content-center flex-column'>
                                <h3>
                                    Employee/Storage Locker
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                Employee/Storage Locker
                                            </Tooltip>
                                        }
                                    >
                                        <span className='ms-2'><BsFillQuestionSquareFill className='toolTip' /></span>
                                    </OverlayTrigger>
                                </h3>
                                <img className='py-4' src="/images/servicesForm/Storage_Locker.png" alt="image" />
                                <div className='yes-no-but-group mt-4 text-center'>
                                    <button
                                        onClick={() => setLocker("yes")}
                                        className={`yes-no-btn borderRight ${locker == "yes" ? "button--active" : ""}`}>Yes</button>
                                    <button
                                        onClick={() => setLocker("no")}
                                        className={`yes-no-btn ${locker == "no" ? "button--active" : ""}`}>No</button>
                                </div>
                            </div>
                            <FormSpaceType
                                title={" Men & Women Bathrooms"}
                                toolTip={"What is the total number of Bathrooms in the entire area you wished to have cleaned."}
                                image={"/images/servicesForm/bathrooms.png"}
                                setFun={setBathrooms}
                                set={bathrooms} />
                            <FormSpaceType
                                title={"Toilet Stalls & Urinals"}
                                toolTip={"In the bathrooms, what are the total # of toilet stalls & urinals? Give it you best guess.  Our quote includes cleaning the bathrooms at least once for each Frequency period you have selected in STEP 1."}
                                image={"/images/servicesForm/toilet_stalls.png"}
                                setFun={setToiletStalls}
                                set={toiletStalls} />
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
                        <h2>STEP 5: Where is the location of the restaurant?</h2>
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

export default RestaurantForm;