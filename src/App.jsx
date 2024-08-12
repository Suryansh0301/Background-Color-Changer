import { useState } from "react"

export default function App() {
  const [bgColor,setBgColor]=useState("rgb(241, 239, 153)");
  return (
    <div className="w-full h-screen duration-100" style={{backgroundColor : bgColor}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2 ">
          <div className="bg-white rounded-full ">
            <button onClick={()=>setBgColor("rgb(239, 75, 75)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(239, 75, 75)'}}>Red</button>
            <button onClick={()=>setBgColor("rgb(187, 233, 255)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(187, 233, 255)'}}>Blue</button>
            <button onClick={()=>setBgColor("rgb(17, 50, 77)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(17, 50, 77)'}}>Navy</button>
            <button onClick={()=>setBgColor("rgb(172, 215, 147)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(172, 215, 147)'}}>Green</button>
            <button onClick={()=>setBgColor("rgb(178, 164, 255)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(178, 164, 255)'}}>violet</button>
            <button onClick={()=>setBgColor("rgb(239, 156, 102)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(239, 156, 102)'}}>Orange</button>
            <button onClick={()=>setBgColor("rgb(241, 239, 153)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-sm shadow-slate-400" style={{backgroundColor : 'rgb(241, 239, 153)' }}>Yellow</button>
            <button onClick={()=>setBgColor("rgb(185, 148, 112)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(185, 148, 112)'}}>Brown</button>
            <button onClick={()=>setBgColor("rgb(255, 255, 255)")} className="p-2 m-2 rounded-3xl text-black border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(255, 255, 255)'}}>White</button>
            <button onClick={()=>setBgColor("rgb(0,0,0)")} className="p-2 m-2 rounded-3xl text-white border-collapse font-bold w-20 shadow-md shadow-slate-400" style={{backgroundColor : 'rgb(0, 0, 0)'}}>Black</button>
          </div>
      </div>







    </div>
  )
}