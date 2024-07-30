import {IconsProps} from "./Icons.interface";

export default function Icons(props: IconsProps) {
    switch (props.name) {
        case 'more':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width={props.width || '24'} height={props.height || '24'} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            )
        default:
            return ('')
    }
}
