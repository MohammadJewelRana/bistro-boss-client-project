import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

//custom hook
//data load and pass using array return
//also use loading for waiting the loading time and always its true initially...after completion it becomes false

const useMenu=()=>{
    // const [menu, setMenu] = useState([]);
    // const [loading,setLoading]=useState(true);



    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         })
    // }, [])


    const {data:menu=[],isLoading:loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/menu');
            return res.json();
        }
    })
    return [menu,loading,refetch]
}
export default useMenu;







