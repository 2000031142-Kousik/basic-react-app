import { Component } from "react";
class Count extends Component
{
    constructor()
    {
        super();
        this.state={count:0}
        this.countInc=this.countInc.bind(this)
    }
    countInc()
    {
        this.setState({
            count:this.state.count+1
        })
    }
    countDec()
    {
        this.setState({
            count:this.state.count-1
        })
    }
    render()
    {
        return(
            <div>
                <button onClick={this.countInc} style={{color:'green'}}>INCREMENT</button>
                <button onClick={()=>this.countDec()} style={{color:'red'}}>DECREMENT</button>
                <h2 style={{color:'blue'}}>{this.state.count}</h2>
            </div>
        )
    }

}
export default Count