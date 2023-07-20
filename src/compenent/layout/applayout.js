
import Sidebar from "./sidebar";

const AppLayout = ({children}) => {
  return (
<div className="flex">
 <Sidebar/>
  <div className="flex flex-col flex-1">
  <main className="p-6">
      {children}
  </main>
  </div>
</div>

  );
};
export default AppLayout