import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/UserAction'
import AddReview from './AddReview';


class ProductViewByCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product:{},
            renderPage: "PRODUCT_VIEW_BY_CATEGORY",
        }
        this.category = React.createRef()
    }

    search() {
        this.props.onSeacrhByCategory(this.category.current.value)
        console.log(this.props)
    }

    componentDidMount() {
        this.props.clearState()
    }

    review = (product) => {
        this.setState({
            product,
            renderPage: "ADD_REVIEW"

        })
      
    }

    render() {
        console.log(this.props)
        const renderComponent = this.state.renderPage;
        if (renderComponent === "PRODUCT_VIEW_BY_CATEGORY") {
        let productList = this.props.productList.map((product, index) => {
            return (
                <tr key={index}>
                           
                    <td>{product.productName}</td>
                    <td>{product.category}</td>
                    <td>{product.sellerName}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    {/* <td>{product.review}</td> */}
                    <td >
                        <button onClick={this.review.bind(this,product)} className="btn btn-primary">Review</button>
                </td>
                </tr>
            )
        })
        return (
            <div className="search-product-category">
                <div className="mb-3 input-search-category ">
                    <br/>
                    <input
                        type="text"
                        ref={this.category}
                        className="form-control"
                        id="category"
                        placeholder="Product Catgory" />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
                </div>
                <div className="tra-table-div" id="productViewByCategory">
                    <table className="table table-info trainee-table">
                        <thead>
                            <tr>
                               
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Seller</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {productList}
                        </tbody>
                    </table>
                </div>
            </div>
        )
        }
        else if(this.state.renderPage === "ADD_REVIEW"){
            return (
                <div>
                    <AddReview product={this.state.product} ></AddReview>
                </div>
            );
        }

    }

}

const mapStateToProps = (state) => {
    console.log(state.UserViewReducer.productList)
    return {
        productList: state.UserViewReducer.productList,
        returnedMessage: state.UserViewReducer.returnedMessage
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        //onSeacrhByCategory: (category) => dispatch(actionCreators.getProductByCategory(category)),
        onSeacrhByCategory: (category) => {
            let response =  dispatch(actionCreators.getProductByCategory(category))
            console.log(response)
            return response
        },
        clearState: () => dispatch(actionCreators.clearState())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewByCategory)
