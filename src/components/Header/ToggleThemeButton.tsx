import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes';
import { cn } from '~/utils';

const themes = [
  {
    name: 'Light',
    icon: <SunIcon className='h-5 w-5 fill-black dark:fill-white' />,
  },
  {
    name: 'Dark',
    icon: <MoonIcon className='h-5 w-5 fill-black dark:fill-white' />,
  },
  {
    name: 'System',
    icon: (
      <ComputerDesktopIcon className='h-5 w-5 fill-black dark:fill-white' />
    ),
  },
];

const ToggleThemeButton = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div className='relative inline-block text-left'>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button
            className={cn(
              'flex h-10 w-10 items-center justify-center border border-zinc-300 bg-zinc-200 transition-colors',
              'dark:border-zinc-700 dark:bg-zinc-800',
              'hover:border-zinc-400 hover:bg-zinc-300',
              'dark:hover:border-zinc-600 dark:hover:bg-zinc-700',
              'outline-2 outline-offset-1 outline-current',
              'focus:outline'
            )}
          >
            {theme === 'dark' || resolvedTheme === 'dark'
              ? themes[0]?.icon
              : themes[1]?.icon}
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align='end'
            sideOffset={5}
            className={cn(
              'w-32 border border-zinc-300 bg-zinc-200 p-1 shadow-md md:w-36',
              'dark:border-zinc-700 dark:bg-zinc-800',
              'radix-side-top:animate-slide-up radix-side-bottom:animate-side-down'
            )}
          >
            {themes.map(({ name, icon }) => (
              <DropdownMenuPrimitive.Item key={name} asChild>
                <button
                  className={cn(
                    'flex w-full cursor-pointer select-none items-center space-x-2 p-2 text-xs transition-colors',
                    'hover:bg-zinc-300 focus:bg-zinc-300',
                    'dark:hover:bg-zinc-700 dark:focus:bg-zinc-700',
                    'outline-none'
                  )}
                  onClick={() => setTheme(name.toLowerCase())}
                >
                  {icon} <span>{name}</span>
                </button>
              </DropdownMenuPrimitive.Item>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default ToggleThemeButton;
