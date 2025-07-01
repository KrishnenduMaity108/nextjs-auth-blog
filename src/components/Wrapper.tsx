import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Wrapper({ children }: Props) {
  return <div className="border p-4 rounded shadow">{children}</div>;
}