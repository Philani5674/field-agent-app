import dynamic from 'next/dynamic';
import Link from 'next/link';
import CustomersList from './components/customers';

const Leaf = dynamic(() => import('./components/map'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-box">
        <div className="flex-1">
          <Link href={""} className="btn btn-ghost text-xl">Field Agents</Link>
        </div>
      </div>
      <main className="mt-2">
        <section role="tablist" className="tabs tabs-bordered w-full">
          <input type="radio" name="customers_list" role="tab" className="tab" aria-label="Customers List"/>
          <div role="tabpanel" className="tab-content w-full"><div><CustomersList/></div></div>

          <input type="radio" name="customers_map" role="tab" className="tab" aria-label="Customers Map"/>
          <div role="tabpanel" className="tab-content"><div><Leaf/></div></div>
        </section>
      </main>
    </>
  );
}
