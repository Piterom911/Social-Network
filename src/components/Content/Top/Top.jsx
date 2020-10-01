import React from "react";
import s from "./Top.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'

class Top extends React.Component{
    constructor(props) {
        super(props);
        this.newRef = React.createRef();
    }

    state = {
        editMode: false,
        defaultValue: "Write what you wish",
    };

    onValueChange = (newValue) => {
        this.setState({
            defaultValue: newValue
        })
    };

    onEdit = () => {
        this.setState({
            editMode: true
        });
    };

    onBlur = () => {
        this.setState({
            editMode: false
        });
    };

    render() {
        return (
            <div className={s.top}>
                <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
                {this.state.editMode && <textarea ref={this.newRef} onChange={() => {this.onValueChange(this.newRef.current.value)}} value={this.state.defaultValue} autoFocus onBlur={this.onBlur} className={s.text}/>}
                {!this.state.editMode && <span onClick={this.onEdit} className={s.text}>{this.state.defaultValue}</span>}
                <div className={s.icons}>
                    <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faEdit}/></span>
                    <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faImages}/></span>
                    <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faVideo}/></span>
                    <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faMap}/></span>
                </div>
                <button className={s.submit}>Publish</button>
            </div>
        )
    }
}

export default Top;