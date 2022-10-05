import React,{Component} from "react";

export default class TraineeList extends Component{

    state = {
        pageTitle:"Trainees List",
        traineeCount:60,
        trainees:[
            {id:1,name:"Dora",age:null,address:{city:"Ny"},photo:"https://picsum.photos/id/237/200/300"},
            {id:2,name:"Raja",age:43,address:{city:"Boston"},photo:"https://picsum.photos/id/237/200/400"},
            {id:3,name:"Rena",age:17,address:{city:"NJ"},photo:"https://picsum.photos/id/237/200/500"},
            {id:4,name:"Anna",age:13,address:{city:"NH"},photo:"https://picsum.photos/id/237/200/600"}
        ]
    };

    render(){

        return (<div>
            <h4 className="border-bottom m-1 p-1">
                {this.state.pageTitle}
                <span className="badge bg-secondary">{this.state.traineeCount}</span>
                <button className="btn btn-info" onClick={this.onRefresh}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Display Picture</th>
                        <th>Trainee Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                
                <tbody>
                    {this.getTraineeRow()}
                
                </tbody>
            </table>

        </div>
    
        );
    }
    onRefresh = ()=>{
        console.log("You clicked me!");
        this.setState({
            traineeCount:100

        });
    }
    getTraineeRow = () => {
        return this.state.trainees.map((trai)=>{
            return(
                <tr key={trai.id}>
                    <td> {trai.id}  </td>
                    <td> <img src={trai.photo}/> </td>
                    <td> {trai.name}  </td>
                    <td> { (trai.phone==null)?(<div className="bg-warning">"No Phone"</div>):trai.phone} </td>
                    <td> {trai.address.city} </td>
                </tr>
            );

        })
    }
        

 

}