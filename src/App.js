import './App.css';
import Data from './data.json'

function App() {
  return (
    <div className="App">
        <div className="container">
          <div className="row" style={{marginTop:'150px'}}>
            <div className="content-header p-2">
              <div className="title">
                <h2>Static Crud</h2>
              </div>
              <div className="main_buttons">
                <button className="btn">Add</button>
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div id="records_per_page">
                

              </div>

              <div className="search form-group mt-3">
                <input type="text" className="form-control" id="searchbox" placeholder="Search here..." />
              </div>
            </div>



            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th><input type="checkbox" onclick="checkAll(this)" /></th>
                  <th>Student image</th>
                  <th>Name</th>
                  <th>Roll No.</th>
                  <th>Email ID</th>
                  <th>Contact No.</th>
                  <th>Hobby</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Data.map( data => {
                  return (
                    <tr>
                      <td><input type="checkbox" name /></td>
                      <td><img src={data.image} alt="Student Image" /></td>
                      <td>{data.name}</td>
                      <td>{data.Roll_no}</td>
                      <td>{data.Email_id}</td>
                      <td>{data.Contact_No}</td>
                      <td>{data.Hobby}</td>
                      <td>{data.Gender}</td>
                      <td>{data.Status}</td>
                      <td></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="pagination w-100">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
            </div>

          </div>
        </div>
      </div>


        );
}

        export default App;
