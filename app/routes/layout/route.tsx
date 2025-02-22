import { Outlet } from 'react-router';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      layout
      <div>
        <Outlet />
      </div>
    </div>
  );
}
