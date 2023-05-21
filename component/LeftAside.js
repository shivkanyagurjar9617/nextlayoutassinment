import React from 'react'

export default function LeftAside() {
  return (
    <aside>
        <ul className="nav flex-column">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">The Flight</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">The City</a>
            
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">The Island</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">The Food</a>
            </li>
        </ul>
</aside>
  )
}
