import { useState } from "react";

export function Field({ label, placeholder, name }) {
    const [value, setValue] = useState('');

    const handleChange = e => setValue(e.target.value);

    return (
        <div className="field">
            <label>{label}</label>
            <input name={name} value={value} onChange={handleChange} required type="text" placeholder={placeholder} />
        </div>
    );
}
