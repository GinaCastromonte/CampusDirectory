import React from "react";

const Main = () => {
  return (
    <div>
      <main id="main">
        <div className="h-[93vh] w-full bg-[url('/images/homebg.webp')] bg-cover bg-center">
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
            <h1 className="text-white font-bold text-5xl w-1/2 text-center">
              Welcome to the Pennsylvania State University Directory
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
