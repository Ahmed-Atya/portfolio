import React from 'react'
import './portfolioList.scss'
const PortfolioList = ({title,selected,setSelected,id}) => {
  return (
    <li key={id} className={(selected ? "portfolioList active":"portfolioList")}onClick={()=>{setSelected(id)}}>
     {title}
    </li>
  )
}

export default PortfolioList
