import React from "react";
import classes from "./FormsControls.module.css";

export const FormConntrol = ({input, meta, child,...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? classes.error : ''}>
      {props.children}
      <div>
        {hasError && <span className={classes.error}>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormConntrol {...props}><textarea {...input} {...restProps} /></FormConntrol>
}
export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormConntrol {...props}><input {...input} {...restProps} /></FormConntrol>
}

////////////////

// export const Textarea = (props) => {
//   return (
//     <div>
//       <textarea {...props} />
//     </div>
//   )
// }

// export const Textarea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={hasError ? classes.error : ''}>
//       <textarea {...input} {...props} />
//       <div>
//         {hasError && <span className={classes.error}>{meta.error}</span>}
//       </div>
//     </div>
//   )
// }
//
// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={hasError ? classes.error : ''}>
//       <textarea {...input} {...props} />
//       <div>
//         {hasError && <span className={classes.error}>{meta.error}</span>}
//       </div>
//     </div>
//   )
// }