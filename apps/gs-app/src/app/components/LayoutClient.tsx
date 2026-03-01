'use client';

import { Toaster, toast } from 'react-hot-toast';
import { NavbarWrapper } from './NavbarWrapper';
import { AppFooter } from '@gs-app/ui';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const handleMenuClick = (menu: string) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Fitur Belum Tersedia
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Menu ini masih dalam pengembangan. Nantikan update selanjutnya!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <NavbarWrapper onMenuClick={handleMenuClick} />
      <main className="flex-grow min-w-0 overflow-x-hidden">{children}</main>
      <AppFooter />
      <Toaster />
    </>
  );
}
