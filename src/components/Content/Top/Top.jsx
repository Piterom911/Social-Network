import React, {useState} from "react";
import s from "./Top.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faImages} from '@fortawesome/free-solid-svg-icons'
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import {faMap} from '@fortawesome/free-solid-svg-icons'

const Top = props => {
    const newRef = React.createRef();

    const [editMode, setEditMode] = useState(false);
    const [defaultValue, setDefaultValue] = useState(props.status);

    const onValueChange = (newValue) => { setDefaultValue(newValue) };
    const onEdit = () => { setEditMode(!editMode) };
    const updateStatus =() => { props.updateProfileStatus(defaultValue) };

    return (
        <div className={s.top}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>

            {editMode && <textarea
                ref={newRef}
                onChange={() => {onValueChange(newRef.current.value)}}
                value={props.status} autoFocus onBlur={onEdit}
                className={s.text}/>}
            {!editMode && <span
                onClick={onEdit}
                className={s.text}>{props.status}</span>}

            <div className={s.icons}>
                <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faEdit}/></span>
                <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faImages}/></span>
                <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faVideo}/></span>
                <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faMap}/></span>
            </div>
            <button
                className={s.submit}
                onClick={updateStatus}>Publish</button>
        </div>
    )
};

export default Top;