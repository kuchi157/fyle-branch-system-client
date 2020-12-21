 import React,{Fragment} from 'react';


class ListBranch extends React.Component{
    constructor(props){
        super(props);
        this.state={favorite: []};
        

    };
    componentDidMount(){
        console.log(localStorage.getItem('favourites'));
        let fav = [];
        if(localStorage.getItem('favourites')){
            fav=JSON.parse(localStorage.getItem('favourites'));
  
        }

        this.setState({favorite: fav});

        
        
        
    }



    favUpdate=(ifsc)=>{
        let fav = [];
        console.log('ifsc: '+ifsc);
        if(localStorage.getItem('favourites')){
            fav=JSON.parse(localStorage.getItem('favourites'));
            if (fav.indexOf(ifsc) === -1) {
                fav.push(ifsc);
            } else {
                fav = fav.filter((f) => f !== ifsc); 
            }
        }
        else{
            fav.push(ifsc);
        }

       localStorage.setItem('favourites',JSON.stringify(fav));
       this.setState({favorite : fav});
        
    }
    render(){
        
        return(<Fragment>
            

            <table className="table">
    <thead>
      <tr>
        <th>IFSC</th>
        <th>Bank_ID</th>
        <th>Branch</th>
        <th>Address</th>
        <th>City</th>
        <th>District</th>
        <th>State</th>
        <th>Favourite</th>
      </tr>
    </thead>
    <tbody>
        
            {this.props.branch.map( branch =>{
                return(<tr key={branch.ifsc}>
                    <td>{branch.ifsc}</td>
                    <td>{branch.bank_id}</td>
                    <td>{branch.branch}</td>
                    <td>{branch.address}</td>
                    <td>{branch.city}</td>
                    <td>{branch.district}</td>
                    <td>{branch.state}</td>
                    <td><button onClick={() => this.favUpdate(branch.ifsc)}>{this.state.favorite.indexOf(branch.ifsc) > -1 ? 'Yes' : 'No'}</button></td>

                </tr>)
            })}
            
             
    </tbody>
  </table>
  
        </Fragment>);
    }
}
export default ListBranch;