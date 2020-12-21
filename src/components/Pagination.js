import React,{Fragment} from 'react';
class Pagination extends React.Component{
    constructor(props){
        super(props);
        this.state={ };
        

    };

    render(){
        
        return(<Fragment >
            <div className="d-flex justify-content-center">

<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="mx-5 page-item">
      <button className="page-link"  aria-label="Previous" onClick={this.props.prevpage}>
        Prev
        <span aria-hidden="true">&laquo;</span>
        
      </button>
    </li>
    
    
    <li className="mx-5 page-item">
      <button className="page-link"  aria-label="Next" onClick={this.props.nextpage}>
        <span aria-hidden="true">&raquo;</span>
        
        Next
      </button>
    </li>
  </ul>
</nav>
</div>

        </Fragment>);
    }
    }

    export default Pagination;