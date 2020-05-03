import React, { Component } from 'react'


export class Upcoming extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            upcoming:[]
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=1`)
            .then(response => response.json()).then(data => {
            console.log("isbjbdwjb");
            console.log(data);
            console.log("gehwijh")
            var arr=[];
            for(var i=0;i<6;i++)
            {
                arr.push(data.results[i]);
            }
            this.setState({upcoming: [...arr] })
            })
    }
    
    render() {
        const ratingStyle={
            bottom: 0,
            position: 'absolute',
            paddingBottom: '10px',
            textDecoration:'none',
            color:'grey'
        }
        const cardStyle= {
            minHeight:'400px' ,
            border:'none'

        }
        const startBorder={
            borderLeft:'8px solid yellow',
            
        }
        return (
            <div style={{paddingTop:'20px'}} id="upcoming">
                <h2 class="ml-3 pl-2  text-white" style={startBorder}>Upcoming </h2>
                {
                    this.state.upcoming.length==0?<>
                        <div >NO DATA AVAILABLE</div>
                    </>:<>
                    {
                        
                    }
                 
                    </>
                }
                <div  class="p-3">

                    <div class="row">
                        {
                            this.state.upcoming.map(temp => {
                                return (
                                    <div class="col-md-2" >
                                        <a href={"movie/"+temp.id} style={{textDecoration: 'none',fontSize: 'inherit',color: 'inherit'}} >
                                        <div class="card m-2" style={cardStyle}>
                                            
                                            <img src={`https://image.tmdb.org/t/p/w185${temp.poster_path}`}/>
                                            
                                            <div class="card-body text-white" style={{background:'#1a1a1a'}}>
                                                <h6 class="card-title"> {temp.title} </h6>
                                                
                                                <a href={"/movie/"+temp.id} style={ratingStyle} class="stretched-link">⭐ {temp.vote_average} </a>
                                            </div>
                                           
                                        </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
                
                
            </div>
        )
    }
    
}

export default Upcoming
