import Dashboard from 'src/components/dashborad';
import Logo from 'src/components/logo';
import Hint from 'src/components/hint';


export default function Header({ setDarkTheme, darkMode }) {

  return (
    <header className='relative w-full z-10'>
      <Hint />
      <Logo />
      <Dashboard setDarkTheme={setDarkTheme} darkMode={darkMode} />
    </header>
  );
}
