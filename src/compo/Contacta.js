import Table from 'react-bootstrap/Table';

const Contacta = () => {
    return (

        <div className='tab'>
            <h3>Contact</h3>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>Adresse</th>
          <th>Mail</th>
          <th>Linkedin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>14 Rue abdelrahmen menzah 1</td>
          <td>jamoussi_amine@hotmail.fr</td>
          <td>https://www.linkedin.com/in/amine-jamoussi-7b97591a1/</td>

        </tr>
       
       
      </tbody>
    </Table>
  


        </div>
    )
}
export default Contacta