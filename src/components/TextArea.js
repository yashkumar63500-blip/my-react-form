function TextArea({ value, setValue }) {
    return (
        <>
            <label htmlFor="about">About</label>
            <textarea
                id="about"
                rows="10"
                cols="30"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="About yourself"
                required
            ></textarea>
        </>
    );
}

export default TextArea;
