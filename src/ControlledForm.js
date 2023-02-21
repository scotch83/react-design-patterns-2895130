import { useEffect, useState } from "react"

export const ControlledForm = () => {
    const [errorDescription, setErrorDescription] = useState('')
    const [nameInputState, setNameInputState] = useState('')
    const [ageInputState, setAgeInputState] = useState('')
    const [hairColorInputState, setHairColorInputState] = useState('')

    useEffect(() => {
        if (nameInputState.length < 2)
            setErrorDescription('You must input a name with more than two characters')
        else setErrorDescription('')
        console.log(nameInputState);
        console.log(ageInputState);
        console.log(hairColorInputState);
    }, [nameInputState, ageInputState, hairColorInputState])
    return (
        <form>
            {errorDescription && <p>{errorDescription}</p>}
            <input name="name" value={nameInputState} type="text" placeholder="Name" onChange={e => setNameInputState(e.target.value)} />
            <input name="age" value={ageInputState} type="number" placeholder="Age" onChange={e => setAgeInputState(e.target.value)} />
            <input name="hairColor" value={hairColorInputState} type="color" onChange={e => setHairColorInputState(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}
