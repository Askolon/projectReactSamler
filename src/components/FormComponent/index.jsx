import React from 'react'
import "./style.css"
import FormSamler from '../FormSamler'

let storedArr = localStorage.getItem("myArray");
    let myArr = JSON.parse(storedArr);
    
export default function FormComponent() {
  return (
    <div className='formContent'>
        <div >
            <p>Operation</p>
            <input type="text" className='value1' id='inpval1'/>
        </div>
        <div>
            <p>Date</p>
            <input type="text" className='value2' id='inpval2'/> 
        </div>
        <div>
           <p>Price</p>
           <input type="text" className='value2' id='inpval3'/> 
        </div>
        <button type="button" className='button' onClick={()=> { 

                let inpval1 = document.getElementById('inpval1');
                let input1 = inpval1.value;

                let inpval2 = document.getElementById('inpval2');
                let input2 = inpval2.value;

                let inpval3 = document.getElementById('inpval2');
                let input3 = inpval3.value;

                <FormSamler value1={input1} value2={input2} value3={input3} myArr={myArr}/>


        }}>Add</button>


        
    </div>
  )
}

