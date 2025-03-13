const Error = ({ message }) => (
    <div className="bg-red-100 text-red-700 p-4 rounded-md text-center">
      {message || "An unexpected error occurred."}
    </div>
  );
  
  export default Error;
  