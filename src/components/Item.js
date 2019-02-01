import React,{Component} from 'react';

export default class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            num:props.num,
            isSaved :false
        }
    }
    saveNum=(ev)=>{
        let numbers = localStorage.getItem('numbers');
        let array = []
        if (numbers) {
            array= JSON.parse(numbers);
            array.push(this.state.num);
            array = Array.from(new Set(array));
            localStorage.setItem('numbers',JSON.stringify(array));
        }
        else{
            array=[];
            array.push(this.state.num);
            localStorage.setItem('numbers',JSON.stringify(array));
        }
        this.setState({isSaved:true});
    }
    componentDidMount(){
        let numbers = localStorage.getItem('numbers');
        let array = [];
        if(numbers){
            array = JSON.parse(numbers);
            if (array.includes(this.state.num)) {
                this.setState({isSaved:true});
            }
        }
    }
    render(){
        return(
            <p className={this.state.isSaved?"saved":""}> Hi!, My number is {this.state.num} 
                <button onClick={this.saveNum}>Remember me</button>
            </p>
        )
    }
}