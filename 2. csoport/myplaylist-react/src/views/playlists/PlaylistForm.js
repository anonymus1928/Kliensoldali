import { useState } from "react";

export function PlaylistForm({ onSubmit }) {
    // Referenciával
    // const inputRef = useRef(null);

    // State-tel
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(inputRef.current.value); // referencia

        onSubmit(value);
    }
    return (
        <details open>
            <summary>Add new playlist</summary>
            <form className="ui action input container" onSubmit={handleSubmit}>
                {/* <input defaultValue="" ref={inputRef} /> */}
                <input value={value} onChange={e => setValue(e.target.value)} />
                <button className="ui primary button">Add</button>
            </form>
        </details>
    );
}
