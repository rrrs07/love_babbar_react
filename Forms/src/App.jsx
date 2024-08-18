import React, { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState(" ");

  // const [lastName, setLastName] = useState(" ");

  // function firstNameHandler(e) {
  //   //console.log(e.target.value);
  //   setFirstName(e.target.value);
  // }
  // function lastNameHandler(e) {
  //   //console.log(e.target.value);
  //   setLastName(e.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
    country: "Nigeria",
    comments: true,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(e) {
    // setFormData({...formData, [e.target.name]: e.target.value})
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md bg-[#5d6b7b]"
    >
      <div>
        <label
          htmlFor="firstName"
          className="font-medium text-sm
         text-[#1ea986]"
        >
          First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={changeHandler}
          value={formData.firstName}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          required
        />

        <br />
        <br />

        <label
          htmlFor="lastName"
          className="font-medium text-sm
         text-[#1ea986]"
        >
          First Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={changeHandler}
          value={formData.lastName}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          required
        />

        <br />
        <br />

        <label
          htmlFor="email"
          className="font-medium text-sm
         text-[#1ea986]"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email here"
          name="email"
          onChange={changeHandler}
          value={formData.email}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          required
        />
        <br />
        <br />

        <label
          htmlFor="country"
          className="font-medium text-sm
         text-[#1ea986]"
        >
          Country
        </label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          required
        >
          <option value="Nigeria">Nigeria</option>
          <option value="Ghana">Ghana</option>
          <option value="Kenya">Kenya</option>
          <option value="Togo">Togo</option>
        </select>

        <br />
        <br />
        <br />

       <fieldset>
        <legend className="font-medium text-sm text-[#1ea986]">Email</legend>

        <input
          type="checkbox"
          id="comments"
          name="comments"
          onChange={changeHandler}
          checked={formData.comments}
          className=" p-2 mt-5 mr-2"
        />
        <label htmlFor="comments" className="p-2 mt-2  text-[#1ea986]">
          Comments
        </label>
        <p className="text-sm text-orange-200 ml-7">
          Get notified when someones posts a comment on a posting.
        </p>

        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="candidates"
          id="candidates"
          checked={formData.candidates}
          className=" p-2 mt-2 mr-2"
        />
        <label className="p-2 mt-2  text-[#1ea986]" htmlFor="candidates">
          Candidates
        </label>
        <p className="text-sm text-orange-200 ml-7">
          Get notified when someones posts a comment on a posting.
        </p>

        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="offers"
          id="offers"
          checked={formData.offers}
          className=" p-2 mt-2 mr-2"
        />
        <label className="p-2 mt-2  text-[#1ea986]" htmlFor="offers">
          Offers
        </label>
        <p className="text-sm text-orange-200 ml-7">
          Get notified when someones posts a comment on a posting.
        </p>
       </fieldset>

        <br />
        <br />

        <fieldset>
          <legend className="font-medium text-sm text-[#1ea986]">Push Notifications</legend>
          <p className="text-sm text-orange-200">These are delivered via sms to your mobile phone</p>

          <input 
         type="radio"
         onChange={changeHandler}
         name="pushNotifications"
         value="everything"
         id="radio1"
        //  checked={formData.mode === "Offline-Mode"}
         className=" border border-blue-400 rounded-md p-2 mt-5 mr-2"
         />
         <label className="p-2 mt-2  text-[#1ea986]"
          htmlFor="radio1">Everything</label>
        <br />
        <br />

         <input 
         type="radio"
         onChange={changeHandler}
         name="pushNotifications"
         value="same as email"
         id="radio2"
        //  checked={formData.mode === "Same as email"}
         className=" border border-blue-400 rounded-md p-2 mt-2 mr-2"
         />
         <label htmlFor="radio2" className="p-2 mt-2  text-[#1ea986]">Same as email</label>
        </fieldset>

        <br />

        <button className=" border border-blue-400 rounded-md p-2 mt-2 mr-2  bg-orange-400 text-white">
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
