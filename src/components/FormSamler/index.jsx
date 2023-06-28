import React from 'react'

export default function FormSamler({value1, value2, value3, myArr}) {
  return (
    <div>
        {
            myArr.push({value1, value2, value3})
        }
        {
            localStorage.setItem("myArr", JSON.stringify(myArr))
        }
    </div>
  )
}
