import React, { Component } from 'react'
import axios from 'axios'
import Dog from './Dog'

class SingleDog extends Component{
    state= {
        DogImg: null
    }

    getDogPic = async () => {
        const url = 'https://dog.ceo/api/breeds/image/random'
        try{
            let res = await axios.get(url)
            debugger
            this.setState({DogImg: res.data.message})

            
        }catch(error){
            console.log(error);
            
        }
    }

    handleButton = (e) => {
      
    }
    render(){
        
        return(
            <div>
            {Dog}
                SingleDog Div 
                <button onClick={this.getDogPic}>Get random dog</button>
            </div>
        )
    }
}

export default SingleDog