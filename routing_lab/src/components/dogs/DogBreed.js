import React, { Component } from 'react'
import axios from 'axios'
import Dog from './Dog'

class DogBreed extends Component{

    state = { 
        listOfBreeds : []
    }

    allBreeds = async() =>{
        let url = `https://dog.ceo/api/breeds/list/all`
        try{
            
            let res = await axios.get(url)
            this.setState({ listOfBreeds :res.data.message})
            debugger
            console.log(res.data)
        }catch(error){
            console.log(error);
            
        }
        }
        componentDidMount(){
            this.allBreeds()
        }
        
        // getBreed = async() =>{
        //     let breed = this.props.match.params.breed
        //     let url = `https://dog.ceo/api/breed/${breed}/images/random`
        //     try{
        //         let res = await axios.get(url)
        //     }catch(error){
        //         console.log(error);
                
        //     }
        // }


    render(){
        const options = this.state.listOfBreeds.map(breedList => {
            return <option value={breedList} key={breedList}> {breedList}></option> 
        })
        return(
            <div>
            <select>
                {options}
            </select>
            
                random dog based on breeed
            </div>
        )
    }
}

export default DogBreed;