export const partiallyApplied = (Component, partialProps) => {
    return props => {
        return (<Component {...partialProps}{...props} />)
    }
}
