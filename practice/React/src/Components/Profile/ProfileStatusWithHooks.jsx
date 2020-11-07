import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activeEditMode = (e) => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <>
      {!editMode &&
        <p onClick={activeEditMode}>{props.status || '------kim status------'}</p>
      }
      {editMode &&
        <input autoFocus={true}
               value={status}
               onBlur={deactivateEditMode}
               onChange={onStatusChange}
        />
      }
    </>
  )
}

export default ProfileStatusWithHooks;