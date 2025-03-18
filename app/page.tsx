import {Dashboard} from "@/app/components/Dashboard/Dashboard";
import {Sidebar} from '@/app/components/Sidebar/Sidebar';
import UserDetails from "./components/UserDetails/UserDetails";
import Nav from "./components/NavBar/Nav";





export default function Home() {
  return <main className="pt-16 bg-stone-200 grid gap-4 p-4 grid-cols-[220px,_1fr]">
    
    <Nav/>
    <Sidebar />
    <Dashboard />
    <UserDetails/>
    
  </main>
};