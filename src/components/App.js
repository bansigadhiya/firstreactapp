import './App.css';

function App() {
  var data =
    [
      {
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022,
        status: true
      },
      {
        id: 102,
        name: 'Eltrombopag',
        quantity: 90,
        price: 550,
        expiry: 2021,
        status: true
      },
      {
        id: 103,
        name: 'Meloxicam',
        quantity: 85,
        price: 450,
        expiry: 2025,
        status: false
      },
      {
        id: 104,
        name: 'Allopurinol',
        quantity: 50,
        price: 600,
        expiry: 2023,
        status: true
      },
      {
        id: 105,
        name: 'Phenytoin',
        quantity: 63,
        price: 250,
        expiry: 2021,
        status: false
      }
    ];

    return (
      
      <table>
        <th>
          <td>Id</td>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Expiry</td>
          <td>status</td>
        </th>
        <tr>
        {
          data.map((d) => {
           console.log(d);
           return (
            <tr>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.quantity}</td>
              <td>{d.price}</td>
              <td>{d.expiry}</td>
              <td>{d.status.toString()}</td>
            </tr>
            
           )
          })
        }
        </tr>
        
      </table>
      
      
    )

  // return (
  //   <div className='card-container'>
  //     {
  //       data.map((d) => {
  //         console.log(d);
  //         return (
  //           <div className='card'>
  //             <h5>
  //               Name : {d.name}
  //             </h5>
  //             <p>
  //               id : {d.id}
  //             </p>
  //             <p>
  //               Quantity : {d.quantity}
  //             </p>
  //             <p>
  //               Price : {d.price}
  //             </p>
  //             <p>
  //               Expiry Year : {d.expiry}
  //             </p>
  //             <p>
  //               Status : {d.status}
  //             </p>
  //           </div>
  //         )
  //       })
  //     }

  //   </div>

  // )
}

export default App;
