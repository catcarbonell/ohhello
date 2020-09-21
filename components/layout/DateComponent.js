
import { format  } from 'date-fns'

export default function DateComponent({dateString}){
    return(
        <h4>
             <time dateTime={dateString}>
                {format(new Date(dateString), 'LLLL	d, yyyy')}
            </time>
        </h4>
    )
}


