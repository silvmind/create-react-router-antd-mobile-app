import type { Route } from './+types/home';
import { Result } from 'antd-mobile';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return <Result status="success" title="index" />;
}
