import { Space } from 'antd-mobile';
import { Link, Outlet } from 'react-router';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Space>
        {[
          { title: '多层嵌套', to: '/layout/about' },
          { title: '多层嵌套2', to: '/layout/about2' },
        ].map((x) => (
          <Link key={x.title} to={x.to}>
            {x.title}
          </Link>
        ))}
      </Space>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
