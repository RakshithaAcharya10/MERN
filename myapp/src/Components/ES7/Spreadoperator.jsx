import React from 'react'

export default function Spreadoperator() {
    const Student1 = [
        { name: "user", email: "user@gmail.com" },

    ]
    const Student2 = [
        { phone: 7845568525, address: "Mangalore" },

    ]
    // const array1=[1,2,3,4,5]
    // const array2=[6,7,8,9,10]
    // const combinedarray = [...array1,...array2]
    const combinedarray2 = [...Student1, ...Student2]

    console.log(combinedarray2)
    return (
        <div>
            {combinedarray2.map((data) => (
                <>
                <h3>{data.name}</h3>
                <h3>{data.email}</h3>
                <h3>{data.phone}</h3>
                <h3>{data.address}</h3>
                </>
            ))}
    </div>
    )
}
