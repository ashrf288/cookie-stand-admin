
import React ,{useState ,useEffect} from "react";

function ReportTable(props) {
    const [totals, settotals] = useState([48,42,30,24,42,24,36,42,42,48,36,42,24,36,516])

    useEffect(() => {
        if (props.data.length >1){
            let oldTotals= totals.map((element, idx) => {
                return  element=element+props.data[0].hourly_sales[idx]
              });
              settotals(oldTotals)
        }
    
    }, [props.data])
  return (
    <div className="m-auto text-center mt-20 text-lg ">
      {props.data.length > 0 ? (
        <table className="m-auto border border-collapse	bg-green-500  ">
          <thead className="m-auto border border-collapse  border-black ">
            <tr  className="border ">
              <th  className="border border-black px-16"> location </th>
              {props.hours.map((ele, idx) => {
                return <th className="border border-black	" key={idx}>{ele}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {props.data.map((stand , index) => {
              return <tr className={`banner ${index %2==0 ? "bg-green-400" : "bg-green-300"}`} key={index}>
                    <td className="border border-black" >{stand.location}</td>
                    {stand.hourly_sales.map((ele,idx)=>{
                        return <td key={idx} className="border border-black">{ele}</td>
                    }
) }
              </tr>;
            })}
          </tbody>
          <tfoot>
              <tr className="font-bold">
          <td className="" >Totals</td>
          {totals.map((ele ,index) =>{
              return (<td className="border border-black" key={index}>{ele}</td>)
          })}
          </tr>
          </tfoot>
        </table>
      ) : (
        <p> no cookies stands</p>
      )}
    </div>
  );
}

export default ReportTable;
