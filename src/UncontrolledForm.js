import React from "react";

export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={nameInput} name="name" type="text" placeholder="Name" />
            <input ref={ageInput} name="age" type="number" placeholder="Age" />
            <input ref={hairColorInput} name="hairColor" type="color" />
            <label htmlFor="hairColor">Hair color</label>
            <input type="submit" value="Submit" />
        </form>
    )
}
