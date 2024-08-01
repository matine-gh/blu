interface KeyValueInterface {
    name: string,
    value: string | number
}
export default function ToKeyValue({name , value}: KeyValueInterface) {
    return (
        <div className={'space-x-1'}>
            <span className={'font-semibold'}>{name}</span>
            <span>:</span>
            <span>{value}</span>
        </div>
    )
}