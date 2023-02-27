import { partiallyApplied } from "./partiallyApplied"

export const Button = ({ padding, color, text }) => {
    return <button style={{
        padding,
        backgroundColor: color
    }}>{text}</button>
}
export const DangerButton = partiallyApplied(Button, { color: 'red' })
export const SuccessButton = partiallyApplied(Button, { color: 'limegreen', padding: '14px' })
