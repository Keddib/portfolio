export default function DashOptions({ darkMode, setDarkTheme }) {
  return (
    <div className="text-primary dark:text-primary-dark mt-4" >
      <button
        onClick={() => { setDarkTheme(false) }}
        onTouchStart={() => { setDarkTheme(false) }}
        className="flex items-center gap-2"
      >
        <span className="w-6 h-6 border rounded-full flex justify-center items-center">
          <span className={`w-3 h-3 rounded-full ${!darkMode ? 'bg-tertiary dark:bg-tertiary-dark' : ''}`}></span>
        </span>
        <span className="text-xs font-semibold">LIGHT</span>
      </button>
      <button
        onClick={() => { setDarkTheme(true) }}
        onTouchStart={() => { setDarkTheme(true) }}
        className="flex items-center gap-2 mt-2"
      >
        <span className="w-6 h-6 border rounded-full flex justify-center items-center">
          <span className={`w-3 h-3 rounded-full ${darkMode ? 'bg-tertiary dark:bg-tertiary-dark' : ''}`}></span>
        </span>
        <span className="text-xs font-semibold">DARK</span>
      </button>
    </div>
  );
}
