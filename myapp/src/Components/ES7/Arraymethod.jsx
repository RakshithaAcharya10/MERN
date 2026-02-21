import React from 'react'

export default function Arraymethod() {
    const Student = [
        { name: "user", email: "user@gmail.com", phone: 7845568525, address: "Mangalore" },
        { name: "array", email: "array@gmail.com", phone: 7845568525, address: "Mangalore" },
        { name: "tester", email: "tester@gmail.com", phone: 7845568525, address: "Mangalore" },
        { name: "people", email: "people@gmail.com", phone: 7845568525, address: "Mangalore" }
    ]

    console.log(Student)

    const num = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <div>
                {num.map((data) => (
                    <h3>{data}</h3>
                ))}

            </div>

            {/* <div>
                {Student.map((data) => (
                    <>
                            <h3>{data.name}</h3>
                            <h3>{data.email}</h3>
                            <h3>{data.phone}</h3>
                            <h3>{data.address}</h3>
                        
                    </>
                ))}
            </div> */}

            
            <div>
                <table border="2">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>ADDRESS</th>
                        </tr>
                    </thead>
                    <tbody >
                        {Student.map((data) => (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.address}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>

            </div>
        </>
    )
}








