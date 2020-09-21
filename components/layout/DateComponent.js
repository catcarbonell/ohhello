
import { format  } from 'date-fns'

export default function DateComponent({dateString}){
    return(
        <h4 className="text-left uppercase">
             <time dateTime={dateString}>
                {format(new Date(dateString), 'LLLL	d, yyyy')}
            </time>
        </h4>
    )
}


