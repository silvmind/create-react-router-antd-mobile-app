import { Badge, Card, ResultPage, TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

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
  return (
    <>
      <ResultPage
        title="演示DEMO"
        status="success"
        icon={<AppOutline fontSize={48} />}
      >
        <Card style={{ height: 'calc(100vh - 160px)' }}>{children}</Card>
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
