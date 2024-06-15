import dynamic from 'next/dynamic';
import Link from 'next/link';
import CustomersList from './components/customers';

const Leaf = dynamic(() => import('./components/map'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link href={""} className="btn btn-ghost text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href={""}>Customers</Link></li>
          </ul>
          <ul className="menu menu-horizontal px-1">
            <li><Link href={"#"}>Map</Link></li>
          </ul>
        </div>
      </div>
      <main className="p-5 bg-primary">
        <h1 className="p-5">hi</h1>
        <CustomersList/>
        <Leaf />
      </main>
    </>
  );
}
