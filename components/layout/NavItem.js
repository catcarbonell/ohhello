
const NavItem = (props) => {
    return(
    <div className="m-2 p-2 uppercase cursor-pointer hover:text-custom-airplant hover:bg-custom-shadow">
        <p>{props.text}</p>
    </div>
    )
}

export default NavItem

