import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/action'
import '../CSS/Admin/Admin.css'

class AdminUpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.productId = React.createRef();
        this.productName = React.createRef();
        this.category = React.createRef();
        this.sellerName = React.createRef();
        this.description = React.createRef();
        this.price = React.createRef();
        this.state = {
            productId: props.product.productId,
            productName: props.product.productName,
            category: props.product.category,
            sellerName: props.product.sellerName,
            description: props.product.description,
            price: props.product.price
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {
        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'After') {
            setTimeout(() => {
                this.props.history.push('/viewFeedback')
            }, 200)
        }
    }
    update() {
        let product = {
            productId: this.productId.current.value,
            productName: this.productName.current.value,
            category: this.category.current.value,
            sellerName: this.sellerName.current.value,
            description: this.description.current.value,
            price: this.price.current.value,
        }
        this.props.onUpdateProduct(product)
    }

    onChangeHandler(e, name) {
        console.log(e, name)
        this.setState(
            {
                [name]: e.target.value
            }
        )
    }
    render() {
        return (
            <div>
               
                <div className="container mt-5" >
                    <div className="conntainer row">
                        <div className="col">
                            <form encType="multipart/form-data">
                                <div className="mb-3 row">
                                    <div className="col-sm-5" >
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Enter Product Id"
                                            ref={this.productId}
                                            name="productId"
                                            value={this.state.productId}
                                            // onChange={(e)=>{this.onChangeHandler(e,"productId")}} 
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Product Name"
                                            ref={this.productName}
                                            name="productName"
                                            value={this.state.productName}
                                            onChange={(e) => { this.onChangeHandler(e, "productName") }}
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5 ">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Enter Product Category"
                                            ref={this.category}
                                            name="category"
                                            value={this.state.category}
                                            onChange={(e) => { this.onChangeHandler(e, "category") }}
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5 ">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Enter Seller Name"
                                            ref={this.sellerName}
                                            name="sellerName"
                                            value={this.state.sellerName}
                                            onChange={(e) => { this.onChangeHandler(e, "sellerName") }}
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5 ">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Description"
                                            ref={this.description}
                                            name="description"
                                            value={this.state.description}
                                            onChange={(e) => { this.onChangeHandler(e, "description") }}
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5 ">
                                        <input type="text" className="form-control" placeholder="Enter Price" ref={this.price} value={this.state.price} onChange={(e) => { this.onChangeHandler(e, "price") }} name="price" required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-sm-5" id="addButton">
                                        <button type="button" onClick={this.update.bind(this)} className="btn btn-primary add-button">Update Product</button>
                                    </div>
                                    {/* <div className="mb-3 row">
                                        <input type="button" value="Back" onclick="history.back(-1)" />
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
                        {this.props.returnedMessage}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.Adminreducer.returnedMessage)
    return {
        returnedMessage: state.Adminreducer.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateProduct: (productId, newProductObject) => {
            dispatch(actionCreators.updateProduct(productId, newProductObject))
        },

        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminUpdateProduct))
