import { Badge, Card, Divider, ResultPage, Space, TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { Link } from 'react-router';

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'message',
      title: '消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ];
  const linkList = [
    { title: '首页', to: '/' },
    { title: '普通路由', to: '/demo' },
    { title: '动态参数', to: '/good/t-3d5244' },
    { title: '多层嵌套', to: '/layout/about' },
    { title: '表单', to: '/form' },
  ];
  return (
    <>
      <ResultPage
        title="演示DEMO"
        status="success"
        icon={<AppOutline fontSize={48} />}
      >
        <Card style={{ height: 'calc(100vh - 160px)' }}>
          <Space>
            {linkList.map((item) => (
              <>
                <Link key={item.title} color="primary" to={item.to}>
                  {item.title}
                </Link>
                <Divider direction="vertical" />
              </>
            ))}
          </Space>
          {children}
        </Card>
      </ResultPage>
      <TabBar
        safeArea
        style={{
          position: 'fixed',
          bottom: 0,
          zIndex: 111,
          width: '100%',
          background: '#fff',
          boxShadow: '0 0 100px #ccc',
        }}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
}
