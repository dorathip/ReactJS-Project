import React,{Component} from "react";




export default class Course extends Component{
    state = {
        course:this.props.course
    }

    render(){
        //console.log(this.props);
        return(
        <div className=".col-lg-6">
            <div className="card m-2">
                <div className="card-body">
                    <div className="text-muted">
                        #{this.state.course.id}
                    </div>
                     <h5>
                         {this.state.course.courseName}
                     </h5>
                    <div>
                         ${this.state.course.price}
                    </div>

                    </div>
                    <div className="card-footer">
                        <div>
                            <span>{this.state.course.quantity}</span>
                        </div>
                        <div className="btn-group">
                           <button className="btn btn-outline-success"
                            onClick={()=>{
                                this.props.onIncrement(this.state.course,25);
                            }}>
                             + 
                           </button>

                           <button className="btn btn-outline-success"
                            onClick={()=>{
                                this.props.onDecrement(this.state.course,0);
                            }}>
                             - 
                           </button>
                        </div>


                </div>
            </div>
        </div>
        );
    }
}