import React, { useState } from 'react';
import Data from './data.json'
import '../src/App.css'

const App = () => {

  const [modalTitles, setModaltitles] = useState ();



  const [show, setShow] = useState(false);
  
  const [search, setSearch] = useState('');
  // const [usrdata, setUserData] = useState('');
  const [student, setStudent] = useState({
    name:'',
    roll_no: '',
    email:'',
    contact_no:'',
    hobbies: [],
    gender:'',
    image: ''
  })


  const onChange =  (e) => {
    const  value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setStudent({
      
      ...student, [e.target.name] :  e.target.value});
    console.log({...student, [e.target.name] : value});
  }
  const handleShow = (title) => {
    setModaltitles(title)
    console.log(title)
    setShow(!show);
  }


  const handelChange = e =>{
    setSearch(e.target.value);
    const filteredStudent = Data.filter(data => 
      data.name.toString().toLowerCase().indexOf(search.toLowerCase()) !== -1
  )
  filteredStudent ()
  }

  const[check, setCheck] =  useState (false)
  const checkHandle = () => {
    setCheck(!check)
    console.log("CheckBox")
  }

  const [allCheck, setAllCheck] = useState(false)

  const checkAll = () => {
    console.log("CheckBox All")
    setAllCheck(!allCheck)
    setCheck({ allchecked: check})
  }


  return (
    <div className="App">
        <div className="container">
          <div className="row" style={{marginTop:'150px'}}>
            <div className="content-header p-2">
              <div className="title">
                <h2>Static Crud</h2>
              </div>
              <div className="main_buttons">
                <button className="btn" onClick={handleShow("add")}>Add</button>
                <button className="btn" onClick={handleShow("edit")}>Edit</button>
                <button className="btn">Delete</button>
              </div>
            </div>

            <div className="d-flex justify-content-between w-100">
              <div id="records_per_page">
                

              </div>

              <div className="search form-group mt-3">
                <input type="text" className="form-control" id="searchbox" onChange={handelChange} placeholder="Search here..." />
              </div>
            </div>



            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th><input type="checkbox" onChange={checkAll} /></th>
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
                      <td><input type="checkbox" id={data.id}  allChecked="unchecked" onChange={checkHandle} /></td>
                      <td><img src={data.image} alt="" /></td>
                      <td>{data.name}</td>
                      <td>{data.Roll_no}</td>
                      <td>{data.Email_id}</td>
                      <td>{data.Contact_No}</td>
                      <td>{data.Hobbies.Cycling}</td>
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
                <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                <li className="page-item"><a className="page-link" href="/">1</a></li>
                <li className="page-item"><a className="page-link" href="/">2</a></li>
                <li className="page-item"><a className="page-link" href="/">3</a></li>
                <li className="page-item"><a className="page-link" href="/">Next</a></li>
              </ul>
            </nav>
            </div>

          </div>
        </div>

        {/* Add StudentModal */}
          {show && (
                    <div className="overlay" show={show}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">{modalTitles}</h5>
                          <button type="button" className="close" onClick={ handleShow } >
                            <span aria-hidden="true">??</span>
                          </button>
                        </div>
                        <div className="modal-body">

                          <form>
                            <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input type="text" className="form-control" name="name" value={student.name} onChange={onChange} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="roll_no">Roll No</label>
                              <input type="text" className="form-control" name="roll_no" value={student.roll_no} onChange={onChange} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email address</label>
                              <input type="email" className="form-control" name="email" value={student.email} onChange={onChange} />
                            </div>
                            
                            <div className="form-group">
                              <label htmlFor="contact_no">Contact No</label>
                              <input type="text" className="form-control" name="contact_no" value={student.contact_no} onChange={onChange} />
                            </div>

                            <div>
                              <label>Hobbies</label>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="form-check form-check-inline px-2">
                                <input className="form-check-input" type="checkbox" name={student.hobbies.singing} checked={student.hobbies.singing} value={student.hobbies.singing} onChange={onChange} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Singing</label>
                              </div>
                              <div className="form-check form-check-inline px-2">
                                <input className="form-check-input" type="checkbox" name={student.hobbies.fishing} checked={student.hobbies.fishing} value={student.hobbies.reading} onChange={onChange} />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Reading</label>
                              </div>
                              <div className="form-check form-check-inline px-2">
                                <input className="form-check-input" type="checkbox" name={student.hobbies.fishing} checked={student.hobbies.fishing} value={student.hobbies.cycling} onChange={onChange} />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Cycling</label>
                              </div>
                              <div className="form-check form-check-inline px-2">
                                <input className="form-check-input" type="checkbox" name={student.hobbies.fishing} checked={student.hobbies.fishing} value={student.hobbies.fishing} onChange={onChange} />
                                <label className="form-check-label" htmlFor="inlineCheckbox4">Fishing</label>
                              </div>
                            </div>
                            </div>



                            <div>
                              <label>Gender</label>
                              <div className="d-flex justify-content-between align-items-center px-3">
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" defaultValue="option1" checked={student.gender.male} value={student.gender} defaultChecked  />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                  Male
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" defaultValue="option2" checked={student.gender.other}  value={student.gender}  />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                  Female
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" defaultValue="option3" checked={student.gender.other} value={student.gender} />
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                  Other
                                </label>
                              </div>
                              </div>
                            </div>
                          
                          
                            <div className="form-group">
                              <label htmlFor="exampleFormControlFile1">Upload Image</label>
                              <input type="file" className="form-control-file" name="exampleFormControlFile1" value={student.image} />
                            </div>



                          </form>

                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" onClick={ handleShow}>Close</button>
                          <button type="button" className="btn btn-primary"  onClick={ handleShow}>Add Student</button>
                        </div>
                      </div>
                    </div>
                  </div>
          
          )}
      </div>

  )
}

export default App