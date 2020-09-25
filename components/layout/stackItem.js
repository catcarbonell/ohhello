
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StackItem(props){
    return(
        <div className="border-2 border-custom-flamingo mb-2 flex flex-row flex-no-wrap">
            <FontAwesomeIcon className="w-6" icon={props.icon} />
            <h3 className="ml-2">{props.text}</h3>
        </div>
    )
}