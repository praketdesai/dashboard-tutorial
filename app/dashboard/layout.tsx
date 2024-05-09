// The layout here will inheirted by 
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}


// One benefit here is that the layout is preserved when navigating, at least among pages that inherit from that layout
// So if we switch from the customer page to the invoice page, only the page part is rerendered, the layour part just stays there.