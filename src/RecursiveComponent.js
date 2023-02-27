const isObject = (data) => typeof data === 'object' && data != null;
export const RecursiveComponent = ({ data }) => {
    return (
        <ul>
            {
                Object.entries(data).map(([key, value]) => {
                    if (!isObject(value))
                        return (
                            <li>
                                {value}
                            </li>
                        )
                    else return <li>
                        {key}:
                        <RecursiveComponent data={value} />
                    </li>
                })}
        </ul>
    );
};
