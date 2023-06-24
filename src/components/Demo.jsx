import { useState,useEffect } from "react"
import {copy,linkIcon,loader,tick} from '../assets/assets';
import TikAPI from 'tikapi';

// const Demo = () => {

//   const [name, setName] = useState("");

//   //replace API_KEY with API key, or if u don't wanna test tikAPI rn just comment out line 10
//   // const api = TikAPI(API_KEY);

//   (async function(){
//       try{
//           // let response = await api.public.check({
//           //     username: "lilyachty"
//           // });
//           // console.log(response.json);
//           console.log("slayyy");
//       }
//       catch(err){
//           console.log(err?.statusCode, err?.message, err?.json)
//       }	
//   })();

//   return (
//     <section className="mt-16 w-full max-w-xl">
//       {/* Search
//       <div className="flex flex-col w-full gap-2">

//         <form
//           className="relative flex justify-center items-center" onSubmit={() => {}}>

//             <img
//               src={linkIcon}
//               alt="link_icon"
//               className="absolute left-0 my-2 ml-3 w-5"
//               />

//               <input
//               type="text"
//               placeholder="Enter a destination"
//               value={name}
//               onChange={(e)=> setName(e.target.value)}
//               required
//               className="url_input peer"
//               />

//               <button
//               type="submit"
//               className="submit_btn
//               peer-focus:border-gray-700
//               peer-focus:border-gray-700">
//                  <p>💼</p>
//               </button>
//         </form>
//       </div> */}

//     </section>
//   )
// }

export default Demo