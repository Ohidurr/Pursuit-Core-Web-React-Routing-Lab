import React, { Component } from 'react'
import axios from 'axios'
import Dog from './Dog'

class SingleDog extends Component{
    state= {
        dogImg: null
    }

    getDogPic = async () => {
        const url = 'https://dog.ceo/api/breeds/image/random'
        try{
            let res = await axios.get(url)
            debugger
            this.setState({dogImg: res.data.message})

            
        }catch(error){
            console.log(error);
            
        }
    }
    handleButton = (e) => {
      this.getDogPic()
    }

    render(){
        
        return(
            <div>
            <Dog img={this.state.dogImg}/>
                SingleDog Div 
                <button onClick={this.handleButton}>Get random dog</button>
            </div>
        )
    }
}

export default SingleDog