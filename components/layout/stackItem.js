
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StackItem(props){
    return(
        <div className="border-2 border-custom-flamingo mb-2 flex flex-row flex-no-wrap">
            <div className="border-2 h-8 w-8">
              <FontAwesomeIcon icon={props.icon} />
            </div>
            <h3 className="ml-2 border-2">{props.text}</h3>
        </div>
    )
}