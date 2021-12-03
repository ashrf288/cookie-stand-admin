import React,{ useState ,useEffect} from 'react'
import useResource  from '../hooks.js/useResource'; 
export default function Footer(props) {
  const [len, setlen] = useState(0)
  const{fetchResource}=useResource()
  const getLen=async()=>{
    let data=await fetchResource(process.env.NEXT_PUBLIC_API_URL+'/api/v1/cookie_stands/')
    data && setlen(data.length)
    
  }
  useEffect(async() => {
    await getLen()
    console.log(len);
  }, )
    return (
        <footer className="bottom-0 flex items-start w-screen h-12 p-0 font-bold bg-green-500 ">
        {" "}
        
        <h4 className="p-3 m-auto text-center">{len} Locations World Wide</h4>
      </footer>
    )
}
