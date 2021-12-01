
;
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

export const hours = ['6am', '7am', '8am', '9am', '10am', 
'11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ,'Totals'];

export default function Main(props) {
    let updateStands=(data)=>{
      props.updateStand(data)
    }

    return (
        <div className=' my-36'>
        <CreateForm  updateStand={updateStands}/>
        {props.data&&<ReportTable data={props.data} hours={hours} />}
      </div>
    )
}



