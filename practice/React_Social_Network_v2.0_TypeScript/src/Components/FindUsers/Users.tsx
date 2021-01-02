import React, { useEffect } from 'react'
import classes from "./FindUser.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../all/Paginator/Paginator";
import { Field, Formik } from 'formik';
import { initialStateFilterType, getUsersThunkCreater, unfollow, follow } from './../../Redux/findUser_reducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers } from './../../Redux/users_selectors';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from "../../Redux/findUser_reducer";


const Users: React.FC = (props) => {
  const totalItemsCount = useSelector(getTotalUsersCount)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const users = useSelector(getUsers)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunkCreater(currentPage, pageSize, ''))
  }, [])

  const onPageChanged = (pageNumber: number) => {
    dispatch(actions.setCurrentPage(pageNumber))
    dispatch(getUsersThunkCreater(pageNumber, pageSize, ''))
  }

  const onFilterChanged = (filter: initialStateFilterType) => {
    // kim err
    dispatch(getUsersThunkCreater(1, 4, filter.term))
  }


  return (
    <div>

      <h1>Users</h1>

      <UsersSearchForm onFilterChanged={onFilterChanged} />

      <Paginator currentPage={currentPage}
                 onPageChanged={onPageChanged}
                 totalItemsCount={totalItemsCount}
                 pageSize={pageSize}
      />

      {users.map(el=>(
        <div key={el.id} className={classes.user_wrapper}>
          <div className={classes.user_box_left}>
            <NavLink to={'/profile/' + el.id}>
              <img src={el.photos.small || 'https://source.unsplash.com/random'} alt="" className={classes.user_img}/>
            </NavLink>
            {el.followBtn ?

              <button disabled={followingInProgress.some(ell => ell === el.id)}
                      onClick={() => {dispatch(follow(el.id))}}
                      // onClick={() => {dispatch(actions.followBtn(el.id))}}
                      className={classes.user_follow_btn}>UnFollow</button>

            : <button disabled={followingInProgress.some(ell => ell === el.id)}
                      onClick={() => {dispatch(unfollow(el.id))}}
                      // onClick={() => {dispatch(actions.unfollowBtn(el.id))}}
                      className={classes.user_follow_btn}>Follow</button>
            }
 
          </div>
          <div className={classes.user_box_right}>
            <div className={classes.user_box_right_1}>
              <h2 className={classes.user_fullname}>{el.name}</h2>
              <h3 className={classes.user_text}>{el.status}</h3>
            </div>
            <div className={classes.user_box_right_2}>
              <h3 className={classes.user_country}>{'el.location.country'}</h3>
              <h3 className={classes.user_city}>{'el.location.city'}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users;


const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

// const usersSearchFormValidate = (values: any) => {
//   const errors = {};
//   return errors;
// };

type UsersSearchFormType = {
  term: string,
}
type UsersSearchFormPropsType = {
  onFilterChanged: (filter: initialStateFilterType) => void,
}
const UsersSearchForm: React.FC<UsersSearchFormPropsType> = (props) => {

  const submitForm = (values: UsersSearchFormType, { setSubmitting }: {setSubmitting: (setSubmitting: boolean) => void}) => {
    props.onFilterChanged(values)
  };

  return (
    <Formik
    initialValues={{ term: ''}}
    // validate={usersSearchFormValidate}
    onSubmit={submitForm}
  >
    {({
      values,
      // errors,
      // touched,
      // handleChange,
      // handleBlur,
      handleSubmit,
      isSubmitting
    }) => (
      <form onSubmit={handleSubmit}>
      {/* <form> */}
        <input
          type="text"
          name="term"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.term}
        />
        <Field name="friend" as="select">
          <option value="all">All</option>
          <option value="green">Only followed</option>
          <option value="blue">Only unfollowed</option>
        </Field>
        <button type="submit" disabled={isSubmitting}>Find</button>
      </form>
    )}
  </Formik>
  );
}