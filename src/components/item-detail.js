import React from 'react'

export default ({item})=>{
	return (
		<li classMame="account-item">
			<div className="item-name blue">{item.acounntNumb}</div>
			<div className="item-info">
				<div className="acounnt-money">
					{"$"+item.AvailableCash}
				</div>
				<div className="acounnt-vol">
					<div className={
						item["DayChange%"]<0?"red percentage":item["DayChange%"]>0?"green percentage":"black percentage"
					}>{item["DayChange%"] + "%"}</div>
					<div className={
						item["DayChange%"]<0?"red money-change":item["DayChange%"]>0?"green money-change":"black money-change"
					}>{"/$"+item.DayChangeMondy}</div>
				</div>
			</div>
		</li>
	)
}
