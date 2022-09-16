import React from 'react'

export default function Greeting(props) {

    return (
        <div>
            <h2>Welcome {props.firstName}!</h2>
            <ul>User info:
                <li>{props.email}</li>
                <li>{props.firstName} {props.lastName}</li>
            </ul>
        </div>
    )
}
