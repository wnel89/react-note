import React, {Component} from "react";

class PhoneForm extends Component{
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // 페이지 리로딩 방지
        this.props.onCreate(this.state);
        // 상태값을 onCreate를 통하여 부모에게 전달
        this.setState({
            name: '',
            phone:''
        })
        // 상태 초기화
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}   
                    name="name"               
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}   
                    name="phone"               
                />
                <button type="submit">등록</button>
            </form>
            
        )
    }
}
export default PhoneForm;