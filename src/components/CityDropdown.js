import React,{Fragment} from 'react';
import ListBranch from './ListBranch';
import SearchBar from './SearchBar';
import Pagination from './Pagination';


class CityDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'BANGALORE',branches:[],limit:10,offset:0, lastLimitCheck:false, isSearch: false};
  
      this.handleChange = this.handleChange.bind(this);
      this.getBranch = this.getBranch.bind(this);
    }
    componentDidMount(){
        this.getBranch(this.state.value);
    }
    getBranch= async(query = '', limit =10, offset= 0)=>{
      const url_api='https://fyle-branch-system-server.herokuapp.com/api/branches';
        const response= await fetch(`${url_api}?q=${query}&limit=${limit}&offset=${offset}`);
        const jsonData= await response.json();
        if(jsonData.length<limit){
          this.setState({lastLimitCheck:true});
        }
       
        localStorage.setItem('branches',JSON.stringify(jsonData));
        this.setState({branches: jsonData || []});

   };
  
    handleChange(event) {
        
      this.setState({value: event.target.value || ''});
      this.getBranch(event.target.value);
    }

     prevPage=(event)=>{
       let newOffset=this.state.offset-this.state.limit;
       console.log('prev newoffset first'+newOffset);
       if(newOffset<0){
         newOffset=0;
         this.setState({lastLimitCheck:false});
       }
       console.log('prev newoffset second'+newOffset);
      
        this.getBranch(this.state.value,this.state.limit,newOffset);

       
      
      this.setState({offset:newOffset});

     }
     nextPage=(event)=>{
       let newOffset;
        newOffset=this.state.offset+this.state.limit;
        console.log('check: '+this.state.lastLimitCheck);
      
      console.log('next newoffset first'+newOffset);
      if(!this.state.lastLimitCheck){
        this.getBranch(this.state.value,this.state.limit,newOffset);
      this.setState({offset:newOffset});
      }
      
      

     }
    searchBranch=(event)=>{
      
      let branches = [];
      if (localStorage.getItem('branches')) {
        branches = JSON.parse(localStorage.getItem('branches'));
      } else {
        branches = this.state.branches;
      }

      
      let q=event.target.value;
      q=q.toUpperCase()

      if (q) {
        this.setState({isSearch: true})
      } else {
        this.setState({isSearch: false})
      }
      
      const filterBranches= branches.filter((branch)=>{
        for (const key in branch) {
          
          if(branch[key].includes(q)){
            return true;
          }
        }
        return false;
       

      })
     
      this.setState({branches:filterBranches || []});
        

    }
  

  
    render() {
      const {isSearch} = this.state;
      return (
          <Fragment>
            <div className="d-flex justify-content-around">
              <form >
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="MUMBAI">Mumbai</option>
                        <option value="NEW DELHI">New Delhi</option>
                        
                        <option value="BANGALORE">Bangalore</option>
                        <option value="KOLKATA">Kolkata</option>
                        <option value="CHENNAI">Chennai</option>
                    </select>
            
                </label>
          
          
            </form>
            <SearchBar search={this.searchBranch}></SearchBar></div>

            <ListBranch branch={this.state.branches}></ListBranch>
            {!isSearch && <Pagination nextpage={this.nextPage} prevpage={this.prevPage}></Pagination>}
            
          </Fragment>

        
      );
    }
  }



export default CityDropdown;