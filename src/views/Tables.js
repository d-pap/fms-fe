/**
 * For rendering the table.
 * Gets the data from `variables/charts.js`
 */

// import React from "react"

// // reactstrap components
// import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap"

// function Tables() {
//   return (
//     <>
//       <div className="content">
//         <Row>
//           <Col md="12">
//             <Card>
//               <CardHeader>
//                 <CardTitle tag="h4">Fleet Drivers</CardTitle>
//               </CardHeader>
//               <CardBody>
//                 <Table responsive>
//                   <thead className="text-primary">
//                     <tr>
//                       <th>Driver ID</th>
//                       <th>Name</th>
//                       <th>Phone#</th>
//                       <th>Vehicle#</th>
//                       <th className="text-right">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>1</td>
//                       <td>Dakota Rice</td>
//                       <td>888-555-1234</td>
//                       <td>36738</td>
//                       <td className="text-right">On Road</td>
//                     </tr>
//                     <tr>
//                       <td>2</td>
//                       <td>Minerva Hooper</td>
//                       <td>888-555-5656</td>
//                       <td>36738</td>
//                       <td className="text-right">On Road</td>
//                     </tr>
//                     <tr>
//                       <td>3</td>
//                       <td>Sage Rodriguez</td>
//                       <td>888-555-5656</td>
//                       <td>36738</td>
//                       <td className="text-right">In Maintenance</td>
//                     </tr>
//                     <tr>
//                       <td>55</td>
//                       <td>Philip Chaney</td>
//                       <td>888-555-5656</td>
//                       <td>36738</td>
//                       <td className="text-right">On Road</td>
//                     </tr>
//                     <tr>
//                       <td>45</td>
//                       <td>Doris Greene</td>
//                       <td>888-555-5656</td>
//                       <td>36738</td>
//                       <td className="text-right">Available</td>
//                     </tr>
//                     <tr>
//                       <td>654</td>
//                       <td>Mason Porter</td>
//                       <td>888-555-5656</td>
//                       <td>36738</td>
//                       <td className="text-right">On Road</td>
//                     </tr>
//                     <tr>
//                       <td>358</td>
//                       <td>Jon Porter</td>
//                       <td>888-555-5656</td>
//                       <td>36738</td>
//                       <td className="text-right">On Road</td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col md="12">
//             <Card className="card-plain">
//               <CardHeader>
//                 <CardTitle tag="h4">Table on Plain Background</CardTitle>
//                 <p className="card-category">Here is a subtitle for this table</p>
//               </CardHeader>
//               <CardBody>
//                 <Table responsive>
//                   <thead className="text-primary">
//                     <tr>
//                       <th>Name</th>
//                       <th>Country</th>
//                       <th>City</th>
//                       <th className="text-right">Salary</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Dakota Rice</td>
//                       <td>Niger</td>
//                       <td>Oud-Turnhout</td>
//                       <td className="text-right">$36,738</td>
//                     </tr>
//                     <tr>
//                       <td>Minerva Hooper</td>
//                       <td>Curaçao</td>
//                       <td>Sinaai-Waas</td>
//                       <td className="text-right">$23,789</td>
//                     </tr>
//                     <tr>
//                       <td>Sage Rodriguez</td>
//                       <td>Netherlands</td>
//                       <td>Baileux</td>
//                       <td className="text-right">$56,142</td>
//                     </tr>
//                     <tr>
//                       <td>Philip Chaney</td>
//                       <td>Korea, South</td>
//                       <td>Overland Park</td>
//                       <td className="text-right">$38,735</td>
//                     </tr>
//                     <tr>
//                       <td>Doris Greene</td>
//                       <td>Malawi</td>
//                       <td>Feldkirchen in Kärnten</td>
//                       <td className="text-right">$63,542</td>
//                     </tr>
//                     <tr>
//                       <td>Mason Porter</td>
//                       <td>Chile</td>
//                       <td>Gloucester</td>
//                       <td className="text-right">$78,615</td>
//                     </tr>
//                     <tr>
//                       <td>Jon Porter</td>
//                       <td>Portugal</td>
//                       <td>Gloucester</td>
//                       <td className="text-right">$98,615</td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   )
// }

// export default Tables
import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap"
import { thead, tbody } from "variables/general.js"

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Fleet Drivers</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tbody.map((row, index) => (
                      <tr key={index} className={row.className}>
                        {row.data.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Tables
