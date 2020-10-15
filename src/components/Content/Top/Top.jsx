import React, {useState} from "react";
import s from "./Top.module.scss";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faEdit} from '@fortawesome/free-solid-svg-icons'
// import {faImages} from '@fortawesome/free-solid-svg-icons'
// import {faVideo} from '@fortawesome/free-solid-svg-icons'
// import {faMap} from '@fortawesome/free-solid-svg-icons'
import {Field, Form} from "react-final-form";
import {Textarea} from "../../commonComponents/FormControls/FormControls";
import {composeValidators, required} from "../../../utils/validators";

const Top = props => {
    const [editMode, setEditMode] = useState(false);
    const onEdit = () => { setTimeout(() => setEditMode(!editMode), 50) };

    const FinalStatusForm = props => {
        return (
            <Form onSubmit={props.onSubmit}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit} className={s.top}>
                        <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>

                        {/*{editMode && <textarea
                            ref={newRef}
                            onChange={() => {onValueChange(newRef.current.value)}}
                            value={props.status} autoFocus onBlur={onEdit}
                            className={s.text}/>}
                        {!editMode && <span
                            onClick={onEdit}
                            className={s.text}>{props.status}</span>}*/}
                        {editMode && <Field component={Textarea} onBlur={onEdit}
                                            placeholder="Type here your status..."
                                            autoFocus className={s.text} name="newStatus"/>}

                        {!editMode && <span onClick={onEdit} className={s.text}>{props.status}</span>}

                        {/*<div className={s.icons}>
                            <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faEdit}/></span>
                            <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faImages}/></span>
                            <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faVideo}/></span>
                            <span className={s.link}><FontAwesomeIcon className={s.icon} icon={faMap}/></span>
                        </div>*/}
                        <button type="submit" className={s.submit}>Publish</button>
                    </form>
                )}
            </Form>
        )
    };
    const onSubmit = formObj => props.updateProfileStatus(formObj.newStatus);
    return <FinalStatusForm onSubmit={onSubmit} {...props} />
};

export default Top;