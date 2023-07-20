function Auth({ children }) {
  return (
    <div className="flex items-center h-screen">
      <div className="w-1/3 h-full">
        <img src="image/store.jpeg" alt="Image"className="w-full h-full object-cover"/>
      </div>
      <div className="w-2/3 p-4">
       {children}
      </div>
    </div>
  );

}
export default Auth;
  