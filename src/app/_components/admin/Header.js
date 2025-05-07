
import { signOut } from 'next-auth/react';
import { useState } from 'react';

const Header = ({ toggleSidebar, toggleTheme, sidebar }) => {
  //const router = useRouter(); // useRouter is used properly here inside the component


    const [notifications, setNotification] = useState(false)
    const toggleNotification = () => {
        setNotification((prevState) => !prevState)
    };


    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    
    const handleLogout = () => {
        // Sign out and clear session cookies
        signOut({ redirect: false }).then(() => {
          // Clear 'next-auth.session-token' cookie manually
          document.cookie = 'next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
          
          // Clear any other custom cookies or state if needed
          document.cookie = 'your-custom-cookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
          document.cookie = 'another-cookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
      
          // If you want to clear all cookies (optional):
          document.cookie.split(';').forEach(cookie => {
            const cookieName = cookie.split('=')[0];
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
          });
      
          // Redirect after logout (to the home page or login page)
          window.location.href = '/admin/login'; // Or any other page you prefer
        });
      };

    return (
        <>
            <header className="main-header">
                <div className="d-flex align-items-center logo-box justify-content-start">
                    {/* <!-- Logo --> */}
                    <a href="#" className="logo">
                        {/* <!-- logo--> */}
                        <div className={`logo-mini w-40 ${!sidebar?"d-none":""}`}>
                            <span className="light-logo"><img src="/assets/admin/images/mini-logo.png" alt="logo" /></span>
                            <span className="dark-logo"><img src="/assets/admin/images/mini-logo.png" alt="logo" /></span>
                        </div>
                        <div className="logo-lg 2-10">
                            <span className="light-logo"><img src="/assets/admin/images/logo-2.png" alt="logo" /></span>
                            <span className="dark-logo"><img src="/assets/admin/images/logo-2.png" alt="logo" /></span>
                        </div>
                    </a>
                </div>
                {/* <!-- Header Navbar --> */}
                <nav className="navbar navbar-static-top">
                    {/* <!-- Sidebar toggle button--> */}
                    <div className="app-menu">
                        <ul className="header-megamenu nav">
                            <li className="btn-group nav-item" onClick={toggleSidebar}>
                                <a href="#" className="waves-effect waves-light nav-link push-btn btn-primary-light ms-0" data-toggle="push-menu" role="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                </a>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="navbar-custom-menu r-side">
                        <ul className="nav navbar-nav">
                            
                            <li className="dropdown user user-menu">
                                <a
                                    className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow"
                                    title="User"
                                    onClick={toggleDropdown}
                                >
                                    <div className="d-flex pt-1  align-items-center">
                                        <img src="/assets/admin/images/avatar/avatar-13.png"
                                            className="avatar rounded-circle bg-primary-light h-40 w-40"
                                            alt="" />
                                        <div className="text-end me-10 ">
                                            <p className="pt-5 fs-14 mb-1 fw-700"> Admin </p>
                                        </div>

                                    </div>
                                </a>
                                {isOpen && (
                                    <ul className="dropdown-menu dropdown-menu-end show">
                                        <li>
                                            <button className="dropdown-item" onClick={handleLogout}>
                                                <i className="fas fa-sign-out-alt me-2"></i> Logout
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Header;