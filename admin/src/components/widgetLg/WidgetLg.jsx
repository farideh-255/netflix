import './widgetLg.scss'

export default function WidgetLg() {

  const Button=({type})=>{
      return <button className={"widgetLgButton "+type}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">
          Latest Transactions
      </h3>
      <table className="widgetLgTable">
          <tbody>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">
                        Customer
                    </th>
                    <th className="widgetLgTh">
                        Date
                    </th>
                    <th className="widgetLgTh">
                    Amount 
                    </th>
                    <th className="widgetLgTh">
                        Status
                    </th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="customer-pic" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetDate"> 2 jun 2021</td>
                    <td className="widgetAmount"> $122.00</td>
                    <td className="widgetstatus"> 
                    <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="customer-pic" />
                        <span className="widgetLgName">Susan Carol333</span>
                    </td>
                    <td className="widgetDate"> 22 September 2021</td>
                    <td className="widgetAmount"> $122888.00</td>
                    <td className="widgetstatus"> 
                    <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="customer-pic" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetDate"> 2 jun 2021</td>
                    <td className="widgetAmount"> $122.00</td>
                    <td className="widgetstatus"> 
                    <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="customer-pic" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetDate"> 2 jun 2021</td>
                    <td className="widgetAmount"> $122.00</td>
                    <td className="widgetstatus"> 
                    <Button type="Pending" />
                    </td>
                </tr>
          </tbody>
      </table>
    </div>
  )
}
