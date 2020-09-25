
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StackItem(props){
    return(
        <div className="mb-2 flex flex-row flex-no-wrap">
            <div className="h-8 w-8">
              <FontAwesomeIcon icon={props.icon} />
            </div>
            <h3 className="ml-2">{props.text}</h3>
        </div>
    )
}