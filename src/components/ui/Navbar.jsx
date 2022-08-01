import { useAuthStore } from "../../hooks/useAuthStore"

export const Navbar = () => {

const { user, startLogout} = useAuthStore();

  return (
    <nav className='navbar'>
        <span className="navbar-user">
          <span class="material-symbols-outlined">
            face_6
          </span>
          {user.name}
        </span>
        <button className="navbar-logout-container ">
        <span className="material-symbols-outlined">
            exit_to_app
        </span>
        <span onClick={startLogout}> Log Out</span>
        </button>
    </nav>
  )
}
