/* eslint-disable react/prop-types */

function Button(props) {
    return (
    <>
      <button className={`btn ${props.className}`}>{props.children}</button>
      
    </>
    )
  }
  
  export default Button