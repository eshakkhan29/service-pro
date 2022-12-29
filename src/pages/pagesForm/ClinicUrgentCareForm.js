import React from "react";
import PageBanner from "../../components/common/PageBanner";
import PageFormHeader from "../../components/common/PageFormHeader";
import { useState } from "react";
import FormSpaceType from "../../components/common/FormSpaceType";
import { useNavigate } from "react-router-dom";
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
];
const frequencys = [
  { frequency: "Daily Including weekends" },
  { frequency: "Daily - weekdays only" },
  { frequency: "Twice / week" },
  { frequency: "3 times / Week" },
  { frequency: "Every 2 weeks" },
  { frequency: "Every 3 weeks" },
  { frequency: "Every 4 weeks (Monthly)" },
  { frequency: "To be determined" },
];
const waitingrooms = [
  { room: "1-25" },
  { room: "26-50" },
  { room: "51-100" },
  { room: "More than 100" },
];
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
];
const ClinicUrgentCareForm = () => {
  const [totalSquareFootage, setTotalSquareFootage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [waitingRoom, setWaitingRoom] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [wood, setWood] = useState("");
  const [cement, setCement] = useState("");
  const [carpeting, setCarpeting] = useState("");
  const [linoleum, setLinoleum] = useState("");
  const [ceramic, setCeramic] = useState("");
  const [floorSpace, setFloorSpace] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [doctorOffices, setDoctorOffices] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [officeStorage, setOfficeStorage] = useState(0);
  const [toiletStalls, setToiletStalls] = useState(0);
  const [reception, setReception] = useState(0);
  const [cafeterias, setCafeterias] = useState(0);
  const [yesNo, setYesNo] = useState("no");

  const fullData = {
    order: "clinic",
    totalSquareFootage,
    frequency,
    bestTime,
    waitingRoom,
    covid: yesNo,
    user_data: { firstName, lastName, email, phone },
    location: { address, city, postalCode, unit, province },
    type_of_flooring: {
      wood,
      cement,
      ceramic,
      carpeting,
      linoleum,
      floorSpace,
    },
    space_types: {
      toiletStalls,
      doctorOffices,
      bathrooms,
      officeStorage,
      cafeterias,
      reception,
    },
  };
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    console.log(fullData);
    e.preventDefault();
    if (fullData.user_data.email === "") {
      return;
    }
    fetch("http://localhost:5001/api/clinic-clean-request", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          //e.target.reset();

          //setIsLoading(false);
          //setPackageDataInfo("");
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <PageBanner text={"Request a Quote – Cleaning / Urgent Care Cleaning"} />

      {/* full page */}
      <div className="pageBgPatten">
        <div className="container px-lg-0 py-5">
          {/* page heading */}
          <PageFormHeader title={"Clinic/Urgent Care Cleaning"} />
          {/* page form full */}
          <div className="formStepOne py-md-5 py-4 m-auto mt-3  px-3 rounded-3">
            {/* Form step one */}
            <h2>STEP 1: Tell us about your clinic/urgent care facility</h2>
            <div className="inputForm py-3">
              <p>
                What is the total square footage of the area you want sanitized
                and disinfected?
              </p>
              <input
                onChange={(e) => setTotalSquareFootage(e.target.value)}
                className="w-100"
                type="text"
                placeholder="Enter the square footage for the total area that requires cleaning.  Feel free to add more into."
              />
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">
                Total capacity of the waiting room and evaluation rooms
              </p>
              <select
                onChange={(e) => setWaitingRoom(e.target.value)}
                name=""
                id=""
              >
                {waitingrooms.map((room, i) => (
                  <option key={i} value={room.room}>
                    {room.room}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">
                At what frequency would you like to have the cleaning?
              </p>
              <select
                onChange={(e) => setFrequency(e.target.value)}
                name=""
                id=""
              >
                {frequencys.map((frequency, i) => (
                  <option key={i} value={frequency.frequency}>
                    {frequency.frequency}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">
                What time of day would you like the space cleaned?
              </p>
              <input
                onChange={(e) => setBestTime(e.target.value)}
                type="text"
                placeholder="Preferred time for cleaning"
              />
            </div>
            {/* yes no button */}
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">
                To your knowledge, has anyone in the space contracted COVID-19
                in the last month?
              </p>
              <div className="yes-no-but-group mt-4 text-center">
                <button
                  onClick={() => setYesNo("yes")}
                  className={`yes-no-btn borderRight ${
                    yesNo === "yes" ? "button--active" : ""
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setYesNo("no")}
                  className={`yes-no-btn ${
                    yesNo === "no" ? "button--active" : ""
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            <hr style={{ color: "#a1a1a1" }} />
            {/* Form step tow */}
            <h2>STEP 2: Select Space types</h2>
            <p>
              Select the quantity for each space type in the area you wish
              cleaned. This will help ensure we provide you the most accurate
              estimate possible in just a few minutes.
            </p>
            {/* services space input count */}
            <div className="serviceSpace">
              <FormSpaceType
                title={"Doctor's Offices/Evaluation Rooms"}
                toolTip={"Doctor's Offices/Evaluation Rooms"}
                image={"/images/servicesForm/doctors_offices.png"}
                setFun={setDoctorOffices}
                set={doctorOffices}
              />
              <FormSpaceType
                title={"Reception Area / Employee Lounge"}
                toolTip={
                  "Reception areas include the main reception area for an office building as well as all secondary receptions including those for delivery services or warehouses.."
                }
                image={"/images/servicesForm/reception.png"}
                setFun={setReception}
                set={reception}
              />
              <FormSpaceType
                title={" Men & Women Bathrooms"}
                toolTip={
                  "What is the total number of Bathrooms in the entire area you wished to have cleaned."
                }
                image={"/images/servicesForm/bathrooms.png"}
                setFun={setBathrooms}
                set={bathrooms}
              />
              <FormSpaceType
                title={"Toilet Stalls & Urinals"}
                toolTip={
                  "In the bathrooms, what are the total # of toilet stalls & urinals? Give it you best guess.  Our quote includes cleaning the bathrooms at least once for each Frequency period you have selected in STEP 1."
                }
                image={"/images/servicesForm/toilet_stalls.png"}
                setFun={setToiletStalls}
                set={toiletStalls}
              />
              <FormSpaceType
                title={"Cafeterias & Dining Areas"}
                toolTip={
                  "This should include cafeterias, lounge area for employees, or kitchenettes for employee self service.  It does not include a full kitchen area for the preparation of meals."
                }
                image={"/images/servicesForm/cafeterias.png"}
                setFun={setCafeterias}
                set={cafeterias}
              />
              <FormSpaceType
                title={"Office Storage & Walkins"}
                toolTip={
                  "These are Enclosed areas typically located in the office area, frequently dedicated for storage, filing, large walk in vestibules, libraries"
                }
                image={"/images/servicesForm/office_storage.png"}
                setFun={setOfficeStorage}
                set={officeStorage}
              />
            </div>
            <hr style={{ color: "#a1a1a1" }} />

            {/* Form step three */}
            <h2>STEP 3: Type of Flooring</h2>
            <p className="stepTowP">
              Provide your best assessment of the overall flooring type in the
              area you would like cleaned
            </p>
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">
                Wood - Approximate % of the total floor space?
              </p>
              <select onChange={(e) => setWood(e.target.value)} name="" id="">
                {percentages.map((percentage, i) => (
                  <option key={i} value={percentage.percent}>
                    {percentage.percent}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">Cement - Approximate % of the floor space?</p>
              <select onChange={(e) => setCement(e.target.value)} name="" id="">
                {percentages.map((percentage, i) => (
                  <option key={i} value={percentage.percent}>
                    {percentage.percent}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">
                Carpeting - Approximate % of the floor space? (excludes area &
                moveable rugs)
              </p>
              <select
                onChange={(e) => setCarpeting(e.target.value)}
                name=""
                id=""
              >
                {percentages.map((percentage, i) => (
                  <option key={i} value={percentage.percent}>
                    {percentage.percent}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">
                Vinyl/Linoleum - Approximate % of the floor space?
              </p>
              <select
                onChange={(e) => setLinoleum(e.target.value)}
                name=""
                id=""
              >
                {percentages.map((percentage, i) => (
                  <option key={i} value={percentage.percent}>
                    {percentage.percent}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between py-3">
              <p className="m-0">
                Ceramic/Marble/Finished stone - Approximate % of the floor
                space?
              </p>
              <select
                onChange={(e) => setCeramic(e.target.value)}
                name=""
                id=""
              >
                {percentages.map((percentage, i) => (
                  <option key={i} value={percentage.percent}>
                    {percentage.percent}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputForm py-3">
              <p>Is there any other information regarding the floor space?</p>
              <input
                onChange={(e) => setFloorSpace(e.target.value)}
                className="w-100"
                type="text"
                placeholder="Please add any other information you feel we should know about and is pertinent or missing in the above."
              />
            </div>
            <hr style={{ color: "#a1a1a1" }} />

            {/* Form step four customer info */}
            <h2>STEP 4: Let us know who we'll be contacting</h2>
            <p className="stepTowP">
              You will instantly receive an email summarizing the information
              entered in this Quote Request. In addition, we will call you
              within the next 10 minutes to provide you a quote. Thanks you &
              talk real soon!
            </p>
            <div className="inputForm d-flex align-items-center justify-content-between gap-4 py-3">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                className="w-100"
                type="text"
                placeholder="First name"
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                className="w-100"
                type="text"
                placeholder="Last name"
              />
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between gap-4 py-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-100"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="w-100"
                type="number"
                placeholder="Phone number"
              />
            </div>
            <hr style={{ color: "#a1a1a1" }} />

            {/* Form step five customer address */}
            <h2>STEP 5: Where is the location of the restaurant?</h2>
            <div className="inputForm d-flex align-items-center justify-content-between gap-4 py-3">
              <input
                onChange={(e) => setAddress(e.target.value)}
                className="w-100"
                type="text"
                placeholder="Street Address"
              />
              <input
                onChange={(e) => setUnit(e.target.value)}
                className="w-100"
                type="text"
                placeholder="Unit/Apt/Suite #"
              />
            </div>
            <div className="inputForm d-flex align-items-center justify-content-between gap-4 py-3">
              <input
                onChange={(e) => setCity(e.target.value)}
                className="w-100"
                type="text"
                placeholder="City"
              />
              <select
                onChange={(e) => setProvince(e.target.value)}
                className="w-100"
                name=""
                id=""
              >
                {provinces.map((province, i) => (
                  <option key={i} value={province.province}>
                    {province.province}
                  </option>
                ))}
              </select>
              <input
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-100"
                type="text"
                placeholder="Postal Code"
              />
            </div>
            <hr style={{ color: "#a1a1a1" }} />
            {/* Form submit button */}
            <div className="text-center pt-3">
              <button onClick={handelSubmit} className="quoteButton">
                Request a quote{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicUrgentCareForm;
