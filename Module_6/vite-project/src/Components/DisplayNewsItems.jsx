import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function DisplayNewsItems() {

    const newsItems = ['morning...', 'midday...', 'evening...', 'night...', 'Goodnight...']
    const [index, setIndex] = useState(0)

    useEffect(() => {
    console.log("use Effect called")
    setTimeout(() => {
        if (index >= newsItems.length - 1)
            setIndex(0)
        else
        setIndex(index + 2)

    }, 1000)

    }, [index])
  return (
    <div>News:: {newsItems[index]}</div>
  )
}

export default DisplayNewsItems