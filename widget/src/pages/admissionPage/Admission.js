import './Admission.css';
import React,{useState} from 'react';
import axios from 'axios';
const App=()=> {
  const [result,setResult]=useState("");
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const values=e.target.elements;
    console.log(values)
    const request={
      'GRE Score':values['GRE Score'].value,
      'TOEFL Score':values['TOEFL Score'].value,
      'University Rating':values['University Rating'].value,
      'SOP':values.SOP.value,
      'LOR':values.LOR.value,
      'CGPA':values.CGPA.value,
      'Research':values.Research.value
    };

    
    try{
      const response=await axios.post('http://localhost:5000/predictAdmission',request);
      setResult(response.data.prediction);{

      }
    }
    catch(err){
      setResult(err);
    }
   
  }
  return (
    <div className="container">
    <div className="d-flex  flex-wrap justify-content-center h-100">
        <div className="card card-base">
            <div className="card-header">
                <div>
                    <h3>Classifier</h3>
                    
                </div>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="GRE Score">GRE Score</label>
                    <div className="input-group form-group">

                        <input type="number" id="GRE Score" className="form-control"  name="GRE Score"  required/>
                    </div>
                    <label htmlFor="TOEFL Score">TOEFL Score</label>
                    <div className="input-group form-group">

                        <input type="number" id="TOEFL Score" className="form-control"  name="TOEFL Score"  required/>
                    </div>
                    <label htmlFor="University Rating">University Rating</label>
                    <div className="input-group form-group">

                        <input type="number" id="University Rating" className="form-control"  name="University Rating"  required/>
                    </div>
                    <label htmlFor="SOP">SOP</label>
                    <div className="input-group form-group">

                        <input type="number" id="SOP" className="form-control"  name="SOP"  required/>
                    </div>
{/* 
 */}
        <label htmlFor="LOR">LOR</label>
                    <div className="input-group form-group">

                        <input type="number" id="LOR" className="form-control"  name="LOR"  required/>
                    </div>
                    <label htmlFor="CGPA">CGPA</label>
                    <div className="input-group form-group">

                        <input type="number" id="CGPA" className="form-control"  name="CGPA"  required/>
                    </div>
                    <label htmlFor="Research">Research</label>
                    <div className="input-group form-group">

                        <input type="number" id="Research" className="form-control"  name="Research"  required/>
                    </div>

                    <div className="form-group text-center">
                        <button type="submit " value="Predict" className="btn btn-dark button justify-content-center">Submit</button>
                    </div>
                </form>
            </div>
            <div className="card-body">
                  <h3 className="h3col">YOU ARE CHANCE OF GETTING ADDMISSION IS
                    
                    <b>{result}</b></h3>
                </div>
        </div>
        
    </div>
</div>
  );
}

export default App;
