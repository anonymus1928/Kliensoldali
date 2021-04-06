export function Field({ label, placeholder }) {
    return (
        <div className="field">
            <label>{label}</label>
            <input required type="text" placeholder={placeholder} />
        </div>
    );
}
