import React, {useEffect, useRef} from 'react'
import { useField} from '@unform/core'

export default function Input({name, cidade}) {

    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue, error} = useField(name, cidade)




useEffect(() => {

    console.log(inputRef.current) // current valor atual

}, [inputRef])


    return (
<div>
<input ref={inputRef}></input>

<input ref={inputRef}></input>
</div>
    )
}