import React, {Component} from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        },
    }

    state = {
        editing: false,
        name: '',
        phone: '',
        // 수정버튼 눌렀을 때 editing을 true 설정
        // 기존에 text 형태가 input 형태로 보여지게 됨
        // input 값을 담기 위한 필드들 설정
    }
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
        // 삭제버튼이 클릭되면 onRemove에 id를 넣어서 호출
    }
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
        // editing의 값을 반전시키는 함수
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        // input에서 onChange 이벤트가 발생될때 호출되는 함수
    }

    componentDidUpdate(prevProps, prevState) {
        // 수정을 눌렀을 때는 기존의 값이 input에 나타남
        // 수정을 적용할 때는 input의 값이 부모에게 전달
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing 값이 false -> true로 전환될 때
            this.setState({
                name: info.name,
                phone: info.phone
            })
            // info의 값을 state에 넣어줌
        }
        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false로 전환될 때
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 수정 상태가 아니고, info값이 같다면 리렌더링 안함
        if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }
        // 나머지 경우엔 리렌더링 함
        return true;
    }

    render() {
        console.log('render PhoneInfo' + + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        // 수정 모드
        const { editing } = this.state;

        if (editing) {
            return(
                <div style={style}>
                    <div>
                        <input
                        value={this.state.name}
                        name="name"
                        placeholder='이름'
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                        value={this.state.phone}
                        name="phone"
                        placeholder='전화번호'
                        onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        // 일반 모드
        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}
export default PhoneInfo;