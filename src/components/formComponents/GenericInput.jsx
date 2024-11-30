import {useState} from 'react'

export default function GenericInput({constante, callback, title, type}) {
  return (
    <div>
          <label htmlFor={constante} className="mb-2 block">
            {title} :{" "}
          </label>
          <input
            type={type}
            id={constante}
            value={constante}
            onChange={(e) => callback(e.target.value)}
            required
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
        </div>
  )
}
