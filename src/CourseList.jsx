import React,{Component} from "react";
import Course from "./Course";


export default class CourseList extends Component{
    constructor(props){
        super(props);
        this.state ={
            
        }
    }

    
    render(){
        return(
            <div>
                <h4>Courses List</h4>
                <div>
                    {
                        this.state.courses.map((cour)=>{
                            return(
                                <Course 
                                key={cour.id} 
                                course={cour} 
                                onIncrement = {this.handleIncrement}
                                onDecrement = {this.handleDecrement}
                                />
                                );
                            })

                            
                    }
                </div>
            </div>


        );
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps,prevState){
        console.log(
            prevProps,prevProps,this.props,this.state

        );

    }

    handleIncrement = (course,maxValue) => {
        let allCourses = [...this.state.courses];
        let index = allCourses.indexOf(course);

        if(allCourses[index].quantity<maxValue){
            allCourses[index].quantity++;
            this.setState({courses:allCourses});
        }
    }
    handleDecrement = (course,minValue) => {
        let allCourses = [...this.state.courses];
        let index = allCourses.indexOf(course);

        if(allCourses[index].quantity>minValue){
            allCourses[index].quantity--;
            this.setState({courses:allCourses});
        }
    }

}