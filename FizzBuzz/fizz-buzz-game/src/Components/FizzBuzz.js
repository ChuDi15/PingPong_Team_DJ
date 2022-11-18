import React from 'react'

function FizzBuzz(props) {
    for (let i = 0; i < props.inputNum; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Fizz Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }

    return (
        <div>

        </div>
    )
}

export default FizzBuzz