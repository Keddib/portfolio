import Dashboard from 'src/components/layout/dashborad';
import Logo from 'src/components/layout/logo';
import Hint from 'src/components/micro/hint';


export default function Header({ setDarkTheme, darkMode }) {

  return (
    <header className='fixed top-0 left-0  w-full z-[10000]'>
      <div className='relative w-full'>
        <Hint />
        <Logo />
        <Dashboard setDarkTheme={setDarkTheme} darkMode={darkMode} />
      </div>
    </header>
  );
}
