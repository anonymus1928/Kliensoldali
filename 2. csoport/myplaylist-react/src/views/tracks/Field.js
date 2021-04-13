export function Field({ name, label, placeholder, value, onChange }) {
    return (
        <div className="field">
            <label>{label}</label>
            <input name={name} value={value} onChange={onChange} required type="text" placeholder={placeholder} />
        </div>
    );
}
