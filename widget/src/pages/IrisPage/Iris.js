import './Iris.css';
import React,{useState} from 'react';
import axios from 'axios';
const App=()=> {
  const [result,setResult]=useState("");
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const values=e.target.elements;
    console.log(values)
    const request={
      'Sepal_Length1':values.Sepal_Length.value,
      'Sepal_Width':values.Sepal_Width.value,
      'Petal_Length':values.Petal_Length.value,
      'Petal_Width':values.Petal_Width.value
    };

    
    try{
      const response=await axios.post('http://localhost:5000/predict',request);
      setResult(response.data.prediction);
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
                    <label htmlFor="sepal_length">Sepal Length</label>
                    <div className="input-group form-group">

                        <input type="number" id="sepal_length" className="form-control"  name="Sepal_Length" placeholder="Length cm" required/>
                    </div>
                    <label htmlFor="sepal_width">Sepal Width</label>
                    <div className="input-group form-group">

                        <input type="number" id="sepal_width" className="form-control"  name="Sepal_Width" placeholder="Width cm" required/>
                    </div>
                    <label htmlFor="petal_length">Petal Length</label>
                    <div className="input-group form-group">

                        <input type="number" id="petal_length" className="form-control"  name="Petal_Length" placeholder="Length cm" required/>
                    </div>
                    <label htmlFor="petal_width">Petal Width</label>
                    <div className="input-group form-group">

                        <input type="number" id="petal_width" className="form-control"  name="Petal_Width" placeholder="Width cm" required/>
                    </div>


                    <div className="form-group text-center">
                        <button type="submit " value="Predict" className="btn btn-dark button justify-content-center">Submit</button>
                    </div>
                </form>
            </div>
            <div className="card-body">
                  <h3>Prediction: <b>{result}</b></h3>
                </div>
        </div>
        
    </div>
</div>
  );
}

export default App;
