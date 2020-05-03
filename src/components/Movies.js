import React, { Component } from 'react'
import Navbar from './Navbar';

export class Movies extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movie:{},
            
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`)
        .then(response => response.json()).then(data => {
        console.log("check123");
        console.log(data);
        console.log(data.videos.results[0].key);
        this.setState({movie:data })
        });
        
    }
    
    render() {
        return (
            <div class="container-fluid" style={{background: 'black',color: 'white'}}>
                <Navbar/>
                {
                    this.state.movie?<>
                        <div class="row  mb-3">

                    {/* <iframe height="400" width="100%" class="" src={"https://www.youtube.com/embed/"+this.state.movie.videos.results[0].key}></iframe> */}
                    { 
                        
                        this.state.movie.videos?<>
                           <iframe height="400" width="100%" class="" src={"https://www.youtube.com/embed/"+this.state.movie.videos.results[0].key}></iframe> 
                        </>:<>no trailer</> 
                    }
                </div>
                <div class="row">
                    <div class="col-md-4 col-12">
                        <div class="imgContainer " >
                            <img src={`https://image.tmdb.org/t/p/w185${this.state.movie.poster_path}`} class="mx-auto d-block" style={{height:300,width:300,border: '1px solid white'}}/>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-12" >
                        <div class="row">
                            <div class="col-md-12 mb-3 mt-3">
                                <h3>{this.state.movie.original_title} { this.state.movie.adult?<>(A)</>:<>(U/A)</> } </h3>
                            </div>
                            <div class="col-md-12 mb-3" >
                            
                               {this.state.movie.overview}
                            </div>
                            <div class="col-md-12 mb-3" >
                            
                                Runtime : {this.state.movie.runtime} min
                            </div>
                            <div class="col-md-12 mb-3" >
                            
                                Genres : 
                                {
                                    this.state.movie.genres?<>

                                        {
                                            this.state.movie.genres.map(temp => {
                                                return (
                                                    <span class="badge badge-danger m-1">{ temp.name }</span>  
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    <></>
                                }    
                            </div>
                            <div class="col-md-12 mb-3" >
                            
                                Rating : {this.state.movie.vote_average}
                            </div>
                            <div class="col-md-12 mb-3" >
                                 Released on  :  
                                {
                                    this.state.movie.status?<> {this.state.movie.release_date}</>:<>To be released</>
                                }
                               
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                    </>:
                    <>
                        <h1>No data found</h1>
                    </>
                }
                
                
                
            </div>
        )
    }
}

export default Movies
