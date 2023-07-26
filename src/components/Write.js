
import write_img from "./images/write_img.png";
export default function Write() {
  return (
    <div className="write " style={{ width:"100%"} }>
    <div className="container" id="founder">
      <div className="row">
        <div className="mt-5 col-lg-8">
          <h2>Write-for-us</h2><br />
          <p className="">
          Crazy bloggers and writers are welcomed to showcase your talent.<br />
           Grab the spotlight for a social cause!!
          </p>
         <a  href='/write-for-us  '> <button className='button mt-2' >Write Now</button></a>
       </div> 
        <div className="col-lg-4 mt-5">
        <img src={write_img} alt="" className="write_img mt-5 pb-2" style={{height:"80%", width:"90%"}}/>
        </div>
      </div>
    </div>
    </div>
  );
}
