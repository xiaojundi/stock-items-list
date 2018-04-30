import React, {Component} from 'react'

export default class AccountTitle extends Component{
	constructor(props){
		super(props)
		this.state={
			callBack: this.props.callBack,
			color_type_left: false,
			color_type_right: false
		}
	}
	render(){
		let color_type_left = this.state.color_type_left ? "#EFEFEF" : "#F7F7F7"
		let color_type_right = this.state.color_type_right ? "#EFEFEF" : "#F7F7F7"
		return(
			<div className="account-title">
				<div className="left" style={{backgroundColor: color_type_left}}>
					<div style={{visibility: "hidden"}}>hide</div>
					<div onClick={()=>{this.state.callBack("left"); this.setState({color_type_left:true, color_type_right:false})}}>Account</div>
				</div>
				<div className="right" style={{backgroundColor: color_type_right}} onClick={()=>{this.state.callBack("right"); this.setState({color_type_left:false, color_type_right:true})}}>
					<div className="top">Available Cash</div>
					<div className="bottom">Today's change</div>
				</div>
			</div>
		)
	}
}