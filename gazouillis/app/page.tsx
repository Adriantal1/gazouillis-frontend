import React from 'react'

const getData = async() => {
    return await fetch("https://gazouillis-b.up.railway.app/tweets").then(response => response.json())
}

const page = async() => {
  const tweets = await getData()
  console.log(tweets)
  return (
    <div>page</div>
  )
}

export default page