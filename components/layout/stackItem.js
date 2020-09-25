
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StackItem(props){
    return(
        <div className="mb-4 flex flex-row flex-no-wrap items-center">
            <div className="h-8 w-8">
              <FontAwesomeIcon style={{color:props.color}} icon={props.icon} />
            </div>
            <h3 className="ml-2">{props.text}</h3>
        </div>
    )
}