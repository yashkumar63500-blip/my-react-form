function InputField({ label, id, type, value, setValue }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={label}
                required
            />
        </>
    );
}

export default InputField;