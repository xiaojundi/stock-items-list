import React, {Component} from 'react'
import Item from './item-detail'
import axios from 'axios'
import AccountTitle from './account-title'


class AccountContent extends Component{
	constructor(props){
		super(props)
		this.state={
			items: [],
			limit: 3,
			sorted: ""
		}

	}
	componentDidMount(){
		axios.get("./account-data.json").then((res)=>{
			this.setState({items: res.data})
		})
	}
	callBackFunction=(value)=>{
		const sortItem = this.state.items
		if(value=="left"){
			sortItem.sort((a, b)=>{
				return parseFloat(a.acounntNumb.split("-")[1])>parseFloat(b.acounntNumb.split("-")[1])
			})
				this.setState({items: sortItem})
		}
		if(value="right"){
			if(this.state.sorted==""){
				sortItem.sort((a, b)=>{
				return parseFloat(a.AvailableCash)>parseFloat(b.AvailableCash)
			})
				this.setState({items: sortItem, sorted:"ascending"})
			}else if(this.state.sorted=="ascending"){
				sortItem.sort((a, b)=>{
				return parseFloat(a.AvailableCash)<parseFloat(b.AvailableCash)
			})
				this.setState({items: sortItem, sorted:"descending"})
			} else if(this.state.sorted=="descending"){
				sortItem.sort((a, b)=>{
				return parseFloat(a.AvailableCash)>parseFloat(b.AvailableCash)
			})
				this.setState({items: sortItem, sorted:"ascending"})
			}
		}
	}
	render(){
		return (
			<div className="Content">
			 	<AccountTitle callBack={this.callBackFunction}/>
				<ul>
					{this.state.items.slice(0, this.state.limit).map((value)=>{
						return <Item key={value.id} item={value} />
					})}
				</ul>
				<button className={this.state.limit==this.state.items.length?"visible loadMore":"loadMore"}
				onClick={()=>{this.setState({limit: this.state.limit + 3})}}>Load More</button>
			</div>
		)
	}
}

export default AccountContent