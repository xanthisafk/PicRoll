import React from 'react'

const LogoSmall = ({ height, width }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 500 500">
            <defs>
                <linearGradient id="a" x1="426.8" x2="73.2" y1="73.2" y2="426.8" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#f05123" />
                    <stop offset=".1" stopColor="#ee6322" />
                    <stop offset=".3" stopColor="#ed7d22" />
                    <stop offset=".5" stopColor="#eb9022" />
                    <stop offset=".8" stopColor="#eb9c22" />
                    <stop offset="1" stopColor="#eba022" />
                </linearGradient>
            </defs>
            <path fill="url(#a)" d="M500 250v9L283 133l128-74a251 251 0 0 1 89 191ZM250 0c-29 0-57 5-85 15v148L383 38C343 13 297 0 250 0ZM133 29A250 250 0 0 0 4 206l129 74V29ZM0 241v9a248 248 0 0 0 89 191l128-74L0 241Zm250 259c29 0 57-5 85-15V337L118 462c39 25 85 38 132 38Zm117-200v171a250 250 0 0 0 129-177l-129-74v80Z" />
        </svg>

    )
}

export default LogoSmall