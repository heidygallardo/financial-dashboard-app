import SideNav from '@/app/ui/dashboard/sidenav';
/* 
- This layout will be applied to the dashboard page and 
all pages inside dashboard folder 
- the Layout component receives children prop 
- this child can either be a page or another layout 

Benefit of using layouts in Next.js 

- is that on navigation --> only the page components update 
while the layout won't re-render. 
This is called partial rendering 
- partial rendering --> preserves client-side React state 
in the layout when transitioning between pages.

Why is this useful?
Preserves State: If your layout has client-side state (like an open/closed sidebar, input values, or scroll position), that state is preserved when you navigate between pages. The layout doesn’t reset or lose its state.
Performance: It’s more efficient because React doesn’t have to re-render the layout or re-fetch data for it on every navigation—just the page content updates.
*/
 
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