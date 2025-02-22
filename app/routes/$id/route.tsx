import { Button, Result } from 'antd-mobile';
import { useLoaderData } from 'react-router';
import type { Route } from '../+types/_index';

export const loader = async ({ params }: Route.ClientLoaderArgs) => {
  return { id: params.id };
};
export default function Demo() {
  const data = useLoaderData();
  return (
    <Result status="success" title={<code>{JSON.stringify(data)}</code>} />
  );
}
