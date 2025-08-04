import React, { useState } from "react";
import InputField from "./InputField";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import SelectDropdown from "./SelectDropdown";
import TextArea from "./TextArea";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({ ...prev, [sub]: !prev[sub] }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({ english: true, maths: false, physics: false });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, contact, gender, selectedOption, subjects, resume, url, about);
    };

    return (
        <form action="#" method="get">
            <InputField label="First Name*" id="firstname" type="text" value={firstName} setValue={setFirstName} />
            <InputField label="Last Name*" id="lastname" type="text" value={lastName} setValue={setLastName} />
            <InputField label="Enter Email*" id="email" type="email" value={email} setValue={setEmail} />
            <InputField label="Contact*" id="contact" type="tel" value={contact} setValue={setContact} />
            <RadioGroup gender={gender} setGender={setGender} />
            <CheckboxGroup subjects={subjects} handleSubjectChange={handleSubjectChange} />
            <label htmlFor="file">Upload Resume*</label>
            <input type="file" id="file" onChange={(e) => setResume(e.target.files[0])} required />
            <InputField label="Enter URL*" id="url" type="url" value={url} setValue={setUrl} />
            <SelectDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <TextArea value={about} setValue={setAbout} />
            <button type="reset" onClick={handleReset}>Reset</button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default Form;
