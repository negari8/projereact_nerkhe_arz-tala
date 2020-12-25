import React, { useState }  from 'react'

const api = "https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json";


function App() {
 
  const [data, setdata] =useState({});

  fetch(`${api}`)
  .then(res=>res.json())
  .then(result=>{setdata(result);console.log(result);});
  
  return (
    <div className="app">
      
     <main>
       <div className="arz">نرخ ارز ها
       
       
       <div className="arz_box">دلار آمریکا
         <div className="kharid">:خرید
         {data.p}
         </div>
         <div className="forosh">:فروش</div>
         {data.p}

       </div>
       <div className="arz_box">دلار استرلیا
       <div className="kharid">:خرید
       {data.p}

       </div>
         <div className="forosh">:فروش</div>

         </div>
       

       <div className="arz_box">دلار کانادا
       <div className="kharid">:خرید</div>
         <div className="forosh">:فروش</div>

       </div>
       <div className="arz_box">یورو
       <div className="kharid">:خرید</div>
         <div className="forosh">:فروش</div>

       </div>
       <div className="arz_box">پوند انگلیس
       <div className="kharid">:خرید</div>
         <div className="forosh">:فروش</div>

       </div>
       <div className="arz_box">لیر ترکیه
       <div className="kharid">:خرید</div>
         <div className="forosh">:فروش</div>

       </div>
       <div className="arz_box">درهم امارات
       <div className="kharid">:خرید</div>
         <div className="forosh">:فروش</div>

       </div>

       
       
       
       
       
       
       
       </div>
       

       
       
       
     
       <div className="date">آخرین زمان آپدیت اطلاعات
       
       
       
       
       </div>  



       
     </main>
    </div>
  );
}

export default App;
