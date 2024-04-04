import { Link, useNavigate } from "react-router-dom";

const Header = ({name , highlight}) => {
  let navigate = useNavigate();

  const pathRoute = () =>{
    switch(name) {
      case "Register":
        navigate('/studentsignup')
        break;
      case "Login":
        navigate('/signin')
        break;
      default:
        // code block
    }
  }

  return (

    <header class="relative flex w-screen max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-violet-900 md:mx-auto md:flex-row md:items-center">

    <img
          className="h-[60.5px] w-[180px] relative object-cover"
          loading="lazy"
          alt=""
          src="/readingeupheuslogo-1@2x.png"
        />
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class={`${highlight == 'home'? 'font-bold':''} md:mr-12`}><Link to="/">Home</Link></li>
        <li class={`${highlight == 'studreg'? 'font-bold':''} md:mr-12`}><Link to="/studentsignup">Student Registration</Link></li>
        {/* <li class={`${highlight == 'schlreg'? 'font-bold':''} md:mr-12`}><Link to="/schoolsignup">School Registration</Link></li> */}
        <li class="md:mr-12">
        <Link to="/signin">
          <button class={`${highlight == 'login'? 'bg-violet-500 text-white':'text-violet-900'} rounded-full border-2 border-violet-900 px-6 py-1  transition-colors hover:bg-violet-500 hover:text-white`}>Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;
