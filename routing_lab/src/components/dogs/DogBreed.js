import React, { Component } from 'react'
import axios from 'axios'

class DogBreed extends Component{

    state = { 
        randomBreed : null
    }

    allBreeds = async() =>{
        let url = `https://dog.ceo/api/breeds/list/all
        `
        try{
            
            let res = await axios.get(url)
            this.setState({ randomBreed:res.data.message})
            console.log(res.data)
        }catch(error){
            console.log(error);
            
        }
        }
        
        getBreed = async() =>{
            let url = 'https://dog.ceo/api/breed/${breed}/images/random'
        }

        componentDidMount(){
            this.allBreeds()
        }

    render(){
        return(
            <div>
            <select>
                <optin>

                </optin>
            </select>
            
                random dog based on breeed
            </div>
        )
    }
}

export default DogBreed;