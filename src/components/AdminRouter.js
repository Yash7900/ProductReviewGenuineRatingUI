import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route,Redirect} from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { BiLogOut } from "react-icons/bi"
import AddProduct from './AddProduct';
import AdminProductView from './AdminProductView';
import ViewFeedback from './ViewFeedback';
import ViewUsers from './ViewUsers';
import Logout from './Logout'
//import '../CSS/Admin.css'

// function AdminRouter() {
//     return (
//         <Router>
//             <div>
//                 <div>
//                     <br></br>
//                     <h1 index="main-heading">PRODUCT REVIEW GENUINE RATING
//                     <FaUserCircle id="icon" />
//                      </h1>
//                 </div>
//                 <div>
//                     <nav class="navbar navbar-light">
//                         <Link className="navbar-brand" to="viewUser">View User</Link>
//                         <Link className="navbar-brand" to="viewProduct">View Product</Link>
//                         <Link className="navbar-brand" to="viewFeedback">View FeedBack</Link>
//                         <Link className="navbar-brand" to="addProduct">Add Product</Link>
//                     </nav>
//                 </div>

//                 <div class="footer">

//                     <p> All Rights Reserved.
//                     Product Review is Powered by Group 4</p>
//                 </div>


//                 < Switch >
//                     <Route exact path="/viewUser" >
//                             <ViewUsers/>
//                     </Route >
//                     <Route exact path="/viewProduct" >
//                     <AdminProductView></AdminProductView>
//                     </Route >
//                     <Route exact path="/viewFeedback" >
//                             <ViewFeedback/>
//                     </Route >
//                     <Route exact path="/addProduct" >
//                         <AddProduct></AddProduct>
//                     </Route >
//                 </Switch >
//             </div>
//         </Router >
//     )
// }
// export default AdminRouter
export class AdminRouter extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token');
    
        console.log("token is",token);
        let loggedIn = true

        if(token === null)
        {
            loggedIn = false
        }

        this.state = {
             loggedIn
        }

        
    }
    render() {
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/" />
        }
        return (
            <Router>
            <div>
                <div>
                    <br></br>
                    <h1 index="main-heading">PRODUCT REVIEW GENUINE RATING
                    <Link className="navbar-brand" to="/logout"><BiLogOut id="user" /></Link>
                     </h1>
                </div>
                <div>
                    <nav class="nav navbar-light">
                        <Link className="navbar-brand" to="viewUser">View User</Link>
                        <Link className="navbar-brand" to="viewProduct">View Product</Link>
                        <Link className="navbar-brand" to="viewFeedback">View FeedBack</Link>
                        <Link className="navbar-brand" to="addProduct">Add Product</Link>
                    </nav>
                </div>

                <div class="footer">

                    <p> All Rights Reserved.
                    Product Review is Powered by Group 4</p>
                </div>


                < Switch >
                    <Route exact path="/viewUser" >
                            <ViewUsers/>
                    </Route >
                    <Route  path="/viewProduct" >
                    <AdminProductView></AdminProductView>
                    </Route >
                    <Route  path="/viewFeedback" >
                            <ViewFeedback/>
                    </Route >
                    <Route  path="/addProduct" >
                        <AddProduct></AddProduct>
                    </Route >
                    <Route  path="/logout" >
                        <Logout/>
                    </Route >
                </Switch >
            </div>
        </Router >
        )
    }
}

export default AdminRouter

