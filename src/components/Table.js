import React from "react";
import './Table.css'

const Table = ({users}, isMobile) =>{
    const FullName = (name, lastName) => {
        return `${name} ${lastName}`
    }

    return (
        <>
            {
                users.map(({picture, name, phone, id, email}) => {
                    return (
                        <div key={id.value} className="User">
                            <img src={picture.medium} alt="Pic"/>
                            <div className="Info">
                                <span>Name: {FullName(name.first, name.last)}</span>
                                <span>Email: {email}</span>
                                <span>Phone: {phone}</span>
                            </div>
                        </div>
                        )
                    })
                }
        </>
    )
}

export default Table