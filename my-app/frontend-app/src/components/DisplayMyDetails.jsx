const DisplayMyDetails=(props)=>{
    console.log(props);
 return(
    
    <>
    <h1>Student Details</h1>
    <ol>
      <li> Name:{props.fullDetails.Name}</li>
      <li> Roll No:{props.fullDetails.rollNumber} </li>
      <li>College Name:{props.fullDetails.collegename} </li>
      <li> Course Name:{props.fullDetails.course}</li>
      <li>Role :{props.role} </li>
    </ol>
    </>
 );
}
 export default DisplayMyDetails;
