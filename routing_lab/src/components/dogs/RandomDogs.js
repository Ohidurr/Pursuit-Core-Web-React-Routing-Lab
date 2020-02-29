import React, { Component } from 'react'
import axios from 'axios'
import Dog from './Dog'

class RandomDogs extends Component {
    
    state = {
        randomDogPics: []
    }

    getRandomDog = async() => {
        let number = this.props.match.params.num
        let url = `https://dog.ceo/api/breeds/image/random/${number}`
        debugger

        try{
            let res = await axios.get(url)
            this.setState({randomDogPics:res.data.message});
            console.log(res.data)
            
            
        }catch(error){
            console.log(error);
            
        }

    }
    
componentDidMount(){
    this.getRandomDog()
    
}


    render(){
        let dogMap = this.state.randomDogPics.map(img =>{
         return  <Dog img={img} key={img} />
         
        })

        return(
            <div>
                hi
                {dogMap}

            </div>
        )
    }
}

export default RandomDogs