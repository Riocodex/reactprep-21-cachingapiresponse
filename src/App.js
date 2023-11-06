import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NormalCall } from './NormalCall';
import { CachedCall } from './CachedCall';
import { Navbar } from './Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  let queryClient = new QueryClient();
  return (
   <QueryClientProvider client={queryClient}>
     <div className='App'>
      <Navbar/>
      <Routes>
      <Route path ='/'element={<NormalCall/>}></Route>
      <Route path ='/cachedcall'element={<CachedCall/>}></Route>
    </Routes>
    </div>
   </QueryClientProvider>
   
  );
}

export default App;
