import React,{Fragment} from 'react';
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={};

    }

    render(){
        return(
            <Fragment>
                <div>
                <input type="text" onInput={ this.props.search} className="mx-1"/>
                <i className="fa fa-search" aria-hidden="true"></i>
                </div>

            </Fragment>
            
            
            
            
            
        );
    }
}
export default SearchBar;