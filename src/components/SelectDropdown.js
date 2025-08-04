function SelectDropdown({ selectedOption, setSelectedOption }) {
    return (
        <>
            <label>Select your choice</label>
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
            >
                <option value="" disabled>Select your Ans</option>
                <optgroup label="Beginers">
                    <option value="1">HTML</option>
                    <option value="2">CSS</option>
                    <option value="3">JavaScript</option>
                </optgroup>
                <optgroup label="Advance">
                    <option value="4">React</option>
                    <option value="5">Node</option>
                    <option value="6">Express</option>
                    <option value="t">MongoDB</option>
                </optgroup>
            </select>
        </>
    );
}

export default SelectDropdown;