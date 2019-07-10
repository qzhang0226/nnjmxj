import React from 'react'

export default function Title({title}) {
    return (
        <div className="my-2 text-center text-title">
            <h1 className="text-capitalize font-weight-bold">
                <strong className="text-blue">{title}</strong>
            </h1>
        </div>
    )
}
