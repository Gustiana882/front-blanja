import axios from "axios";
import { Component } from "react";

class Modal extends Component {

    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            categoriList: [],
            formData: {}
        }
    }

    getOption = (props = '') => {
        axios({
            method: 'get',
            url: `http://localhost:9000/product/category`,
        })
            .then((response) => {
                // console.log(response)
                this.setState({
                    categoriList: response.data.data
                })
            });
    }

    handleChange = (value, name) => {
        const dataInput = { [name]: value }
        this.setState({
            formData: { ...this.state.formData, ...dataInput }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZW1haWxUZXN0QGdtYWlsLmNvbSIsInJvbGVzIjoiYWRtaW4iLCJpYXQiOjE2Mjc4NjY3MTQsImV4cCI6MTYyNzk1MzExNH0.89qpvgksqwrVGUXdFnpVGK5Sz3CNlogbqyALbbWkum8';

        axios({
            method: 'post',
            url: `http://localhost:9000/${this.props.action}`,
            headers: { "token": token },
            data: this.state.formData,

        })
            .then((response) => {
                const res = response.data;
                console.log(res)
                this.props.callback(res)
            })
            .catch((error) => console.log(error))

    }

    render() {
        return (
            <div>
                <div id={this.props.buttonId} className="modal fade" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog">
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fw-bolder">{this.props.title}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    {this.props.input.split(',').map((val, i) => {
                                        const form      = val.split('=')[0]
                                        const formName  = val.split('=')[1]
                                        return (<div className="mb-3" key={i}>
                                            
                                            {(form.match('form')) ?
                                                <input
                                                    type={(formName === 'file') ? 'file' : 'text'}
                                                    className="form-control"
                                                    id={formName || ''}
                                                    placeholder={formName || ''}
                                                    name={formName.toLowerCase() || ''}
                                                    onChange={(el) => {
                                                        const value = el.target.value;
                                                        const name = formName.toLowerCase();
                                                        this.handleChange(value, name)
                                                    }}
                                                />
                                                : // else
                                                <select
                                                    className="form-select"
                                                    onClick={this.getOption}
                                                    onChange={(el) => {
                                                        const value = el.target.value;
                                                        const name = formName.toLowerCase();
                                                        this.handleChange(value, name)
                                                    }}>
                                                    <option selected>{formName || ''}</option>

                                                    {this.state.categoriList.map((val, i) =>
                                                        <option key={i} value={val.id}>{val.name}</option>
                                                    )}
                                                </select>

                                            }
                                        </div>
                                        )}
                                    )}

                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div>
        )
    }
}


export default Modal