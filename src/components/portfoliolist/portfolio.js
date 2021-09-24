import React from 'react'
import "./portfolio.scss"
export default function portfolio(title,active,setSelected,selected,id) {

    return (
        <li className={ active ? "portfolioList":"portfolioList"}  >
          {title.title}
        </li>
    )
}


/*
        <li className={ active ? "portfolioList active":"portfolioList"}  >
          {title.title}
        </li>

*/