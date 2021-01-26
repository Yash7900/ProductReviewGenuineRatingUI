import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/UserAction'

class ProfileUpdate extends React.Component{
    constructor(props){
        super(props)
        const user = localStorage.getItem('User');
        console.log(user)
        console.log(JSON.parse(user)[0].personId)
        this.state={
            personId:JSON.parse(user)[0].personId,
            firstName:JSON.parse(user)[0].firstName,
            lastName:JSON.parse(user)[0].lastName,
            address:JSON.parse(user)[0].address,
            phoneNumber:JSON.parse(user)[0].phoneNumber,
            emailId:JSON.parse(user)[0].emailId,
            password:JSON.parse(user)[0].password
        }
    }
  // componentDidMount(){
  //     this.props.onGetUser(this.state.personId);
  //      let UserData=this.props.User;
  //         this.setState({
  //           personId: UserData.personId,
  //           firstName:UserData.firstName,
  //           lastName:UserData.lastName,
  //           address:UserData.address,
  //           phoneNumber:UserData.phoneNumber,
  //           emailId:UserData.emailId,
  //          password:UserData.password
  //         })
  // }
  Update(){
    let User={
          personId: this.state.personId,
         firstName: this.state.firstName,
         lastName: this.state.lastName,
         address:this.state.address,
         phoneNumber: this.state.phoneNumber,
         emailId:this.state.emailId,
         password:this.state.password
      };
      console.log(JSON.stringify(User));
    this.props.onUpdate(User)
  }
  changePersonIdHandler = (event) =>{
    this.setState({personId: event.target.value});
  }
  changefirstNameHandler = (event) =>{
    this.setState({firstName: event.target.value});
  }
  changelastNameHandler = (event) =>{
    this.setState({lastName: event.target.value});
  }
  changeAddressHandler = (event) =>{
    this.setState({address: event.target.value});
  }
  changePhoneNumberHandler = (event) =>{
    this.setState({phoneNumber: event.target.value});
  }
  changeEmailIdHandler = (event) =>{
    this.setState({emailId: event.target.value});
  }
  changePasswordHandler = (event) =>{
    this.setState({password: event.target.value});
  }
  Cancel(){
    this.props.history.push('/user');
  }
    render(){
      //const{personId,firstName,lastName,address,phoneNumber,emailId,password}=this.state
        return(
            <div className="container mt-5">
            <div className="row">
              <div className="col">
                <form>
                <div className="mb-3 row">
                    <label htmlFor="id" className="col-sm-4 col-form-label">
                      User ID
                    </label>
                    <div className="col-sm-5 ">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        ref={this.personId}
                        name="id"
                        value={this.state.personId}
                        //onChange={this.changePersonIdHandler}
                        disabled={true}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="firstName" className="col-sm-4 col-form-label">
                      First Name
                    </label>
                    <div className="col-sm-5 ">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.firstName}
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.changefirstNameHandler}
                        required
                      />
                    </div>
                  </div>
    
                  <div className="mb-3 row">
                    <label htmlFor="lastname" className="col-sm-4 col-form-label">
                      Last Name
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.lastName}
                        name="lastname"
                        value={this.state.lastName}
                        onChange={this.changelastNameHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="address" className="col-sm-4 col-form-label">
                      Address
                    </label>
                    <div className="col-sm-5">
                      <textarea
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.address}
                        name="address"
                        value={this.state.address}
                        onChange={this.changeAddressHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">
                      Phone Number
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        ref={this.phoneNumber}
                        name="phoneNumber"
                        maxLength="10"
                        value={this.state.phoneNumber}
                        onChange={this.changePhoneNumberHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="emailId" className="col-sm-4 col-form-label">
                     Email ID
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.emailId}
                        name="emailId"
                        value={this.state.emailId}
                        onChange={this.changeEmailIdHandler}
                        disabled={true}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-4 col-form-label">
                      Password
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        ref={this.password}
                        name="password"
                        value={this.state.password}
                        onChange={this.changePasswordHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <button
                        className="btn btn-success"
                        onClick={this.Update.bind(this)}
                      >
                        Update
                      </button>
                      <button 
                      className = "btn btn-danger" 
                      onClick = {this.Cancel.bind(this)} 
                      style = {{marginLeft: "10px"}}
                      >
                        Cancel
                        </button>
                    </div>
                   </div>
                </form>
            </div>
        </div>
        </div>     
        )
    }
}
const mapStateToProps = (state) => {
  return {
      User:state.User,
      returnedMessage: state.returnedMessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onUpdate: (User) => {
          dispatch(actionCreators.updateUser(User))
      },
    //   onGetUser: (personId,personObj) => {
    //     dispatch(actionCreators.getUser(personId,personObj))
    // },
      clearState: () => {
          dispatch(actionCreators.clearState())

      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileUpdate))