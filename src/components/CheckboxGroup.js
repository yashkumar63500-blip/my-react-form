function CheckboxGroup({ subjects, handleSubjectChange }) {
    return (
        <>
            <label>Your best Subject</label>
            {Object.keys(subjects).map((sub) => (
                <span key={sub}>
                    <input
                        type="checkbox"
                        id={sub}
                        checked={subjects[sub]}
                        onChange={() => handleSubjectChange(sub)}
                    />
                    {sub.charAt(0).toUpperCase() + sub.slice(1)}
                </span>
            ))}
        </>
    );
}

export default CheckboxGroup;