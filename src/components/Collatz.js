import React, {Component} from 'react';

class Collatz extends Component {

    state={
        numeros:[]
    }
    realizarCollatz=()=>{

        let num=this.props.numero;
        let aux=[]

        while (num !== 1) {


            if (num % 2 === 0) {
                num = num / 2


            } else {
                num = num * 3 + 1

            }
            aux.push(num)
            console.log(num);
        }

        this.setState(
            {numeros:aux}
        );

    }

    componentDidMount() {
        this.realizarCollatz();
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <ul>
                {
                    this.state.numeros.map((val,index)=>{
                        return(<li key={index}>{val}</li>)
                    })
                }
                </ul>
            </div>
        );
    }
}

export default Collatz;