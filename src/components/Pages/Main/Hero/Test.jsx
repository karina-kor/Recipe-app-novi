import React, { useState } from 'react'

export default function Test() {
    const [projectKey, setProjectKey] = useState("");

    if (projectKey === "") {
        <Previews onClick={(key) => setProjectKey(key)} />
    }

    if (projectKey === 'scifi') {
        return <>
        <button onClick={() => setProjectKey("")}>back</button>
        <Scifinder/>      
        </>
    }

    if (projectKey === 'test2') {
        return <>
        <button onClick={() => setProjectKey("")}>back</button>
        <Test2/>      
        </>     
    }

    if (projectKey === 'test3') {
        return <>
        <button onClick={() => setProjectKey("")}>back</button>
        <Test3/>      
        </>      
    }

    if (projectKey === 'test4') {
        return<>
        <button onClick={() => setProjectKey("")}>back</button>
        <Test4/>      
        </>     
    }

}
