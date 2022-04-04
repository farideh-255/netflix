import React from 'react'
import './featuredInfo.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featured-item">
            <span className="featured-title">
                Sales
            </span>
            <div className="featured-money-container">
                <span className="featuredMoney">$2.415</span>
                <span className="featureMoneyRate">-11.4 <ArrowDownwardIcon  className="featured-icon" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featured-item">
            <span className="featured-title">
                Revenue
            </span>
            <div className="featured-money-container">
                <span className="featuredMoney">$2.415</span>
                <span className="featureMoneyRate">-11.4 <ArrowDownwardIcon  className="featured-icon negative" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featured-item">
            <span className="featured-title">
                Costs
            </span>
            <div className="featured-money-container">
                <span className="featuredMoney">$2.415</span>
                <span className="featureMoneyRate">+11.4 <ArrowUpwardIcon  className="featured-icon negative" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
