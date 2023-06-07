import React, { useState } from "react";
import Button from "./Button/Button";
import Count from "./count"
const UseCallbackComp = () => {
    const [salary, setSalary] = useState(1000)
    const [age, setAge] = useState(25)

    const handleSalaryChange = () => {
        setSalary((s) => s + 500)
    }
    const handleAgeChange = () => {
        setAge((s) => s + 1)
    }
    return (
        <><div>
            {salary}
        </div>
            <Count lable="salary" count={salary} />
            <Button handleClick={handleSalaryChange}>Increment Salary</Button>
            <div>{age}</div>
            <Count lable="age" count={age} />
            <Button handleClick={handleAgeChange}>Increment Salary</Button>
        </>
    )
}
export default UseCallbackComp;
