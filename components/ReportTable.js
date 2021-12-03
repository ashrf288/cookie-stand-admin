import React, { useState, useEffect } from "react";
import useResource from "../hooks.js/useResource";
function ReportTable(props) {
  let { fetchResource, deleteResource } = useResource();
  const [totals, settotals] = useState([
    48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516,
  ]);

  let getData = async () => {
    let x = await fetchResource(
      process.env.NEXT_PUBLIC_API_URL + "/api/v1/cookie_stands/"
    );
    setdata(x);
  };
  let deleteStand = async (id) => {
    await deleteResource(id);
  };
  getData();
  const [data, setdata] = useState(props.data);
  useEffect(() => {
    if (props.data.length > 1) {
      let oldTotals = totals.map((element, idx) => {
        return (element = element + props.data[0].hourly_sales[idx]);
      });
      settotals(oldTotals);
    }
  }, [props.data]);
  return (
    <div className="m-auto mt-20 text-lg text-center ">
      {data.length > 0 ? (
        <table className="m-auto bg-green-500 border border-collapse ">
          <thead className="m-auto border border-collapse border-black ">
            <tr className="border ">
              <th className="px-16 border border-black"> location </th>
              {props.hours.map((ele, idx) => {
                return (
                  <th className="border border-black " key={idx}>
                    {ele}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((stand, index) => {
              return (
                <tr
                  className={`banner ${
                    index % 2 == 0 ? "bg-green-400" : "bg-green-300"
                  }`}
                  key={index}
                >
                  <td className="border border-black">
                    {stand.location} <button onClick={()=>deleteStand(stand.id)}>&#128465;</button>
                  </td>
                  {stand.hourly_sales.map((ele, idx) => {
                    return (
                      <td key={idx} className="border border-black">
                        {ele}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="font-bold">
              <td className="">Totals</td>
              {totals.map((ele, index) => {
                return (
                  <td className="border border-black" key={index}>
                    {ele}
                  </td>
                );
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
