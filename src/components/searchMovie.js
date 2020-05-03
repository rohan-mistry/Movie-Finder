import React, { Component } from 'react'
import Navbar from './Navbar';

export class searchMovie extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movies:[]
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.term}&api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json()).then(data => {
            console.log("isbjbdwjb");
            console.log(data);
            console.log("gehwijh")
            this.setState({movies: [...data.results] })
            })
    }
    
    render() {
        const textStyle = {
            fontSize:'20px'
        }
        const cardBody ={
            background: '#1a1a1a',
            color: 'white'
        }
        const card = {
            border : 'none'
        }
        const startBorder={
            borderLeft:'8px solid yellow',
            
        }
        return (
            <div style={{background:'black'}}>
                <Navbar/>
                <div>
                    {
                        this.state.movies.length==0?
                        <>
                               <h2 class="ml-3 pl-2 mt-3 mb-5 text-white" style={startBorder}>No results found ! </h2>
                        </>:<>

                        
                        <h2 class="ml-3 pl-2 mt-3 mb-5 text-white" style={startBorder}>Search Results </h2>
                        {
                            this.state.movies.map(temp => {
                                return (
                                    <div class="card m-3 shadow-lg" style={card}>
                                        <div class="card-body" style={cardBody}>
                                            <a href={"/movie/"+temp.id} style={{textDecoration: 'none',fontSize: 'inherit',color: 'inherit'}} >
                                                <div class="row">
                                                    <div class="col-md-4 col-12">
                                                        <div class="imgContainer " >
                                                        {
                                                                temp.poster_path==null ? <img class="mx-auto d-block"  src={`https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`}  style={{maxHeight:300,maxWidth:300}}/> : <img class="mx-auto d-block"  src={`https://image.tmdb.org/t/p/w185${temp.poster_path}`} style={{maxHeight:300,maxWidth:300}} />
                                                        }
                                                            {/* <img src="download.jpg" class="mx-auto d-block" style={{height:300,width:300}}/> */}
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-sm-12" >
                                                        <div class="row">
                                                            <div class="col-md-12 mb-3 mt-3">
                                                                <h3 style={{color:'#01e8ff'}}> {temp.original_title} </h3>
                                                            </div>
                                                            <div class="col-md-12 mb-3" style={textStyle} >
                                                            
                                                                { temp.overview }
                                                            </div>
                                                            
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </a>
                                            
                                        </div>
                                    </div>  
                                )
                            })
                        }
                        </>
                    }    
                    
                             
                </div>
                
            </div>
        )
    }
}

export default searchMovie
