

const NavBar = ({user}) => {


    return ( 
        <div className="navbar_container">
            <div className="nav_bar">
            <div className="navbar_title">
                { user ? `Hi,${user.name}` : null }
            </div>
            <div className="navbar_btn">
                <button> Activities </button>
                <button> Login </button>
                <button> Bucket List </button>
            </div>
            </div>
      
        </div>
     );
}
 
export default NavBar;