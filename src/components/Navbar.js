import React, { Component } from 'react';

 class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            searchTerm:''
        }
    } 
    handleChange= (e) =>{
        this.setState({searchTerm:e.target.value});
    }
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{margin:'24 0'}}>
                    <a class="navbar-brand" href="javascript:void(0)">Popcorns-&-Cinema</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navb">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Trending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Upcoming</a>
                            </li>
                            
                       
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" onChange={this.handleChange}  type="text" placeholder="Search"/>
                            
                            <a class="btn btn-success my-2 my-sm-0" href={"/search/"+this.state.searchTerm}>Search</a>
                        </form>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar