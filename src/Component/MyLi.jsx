

function MyLi(props) {
  return (
     <li className={`${props.className}`}>{props.children} </li>
  )
}

export default MyLi