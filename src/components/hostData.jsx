import {useState, useEffect} from "react";


export default function HostData() {

    const [hosts, setHosts] = useState([]);

    useEffect(() => {
      const getHosts = async () => {
        try {
          const response = await fetch('http://localhost:8888/api/hosts');
          const data = await response.json();
          setHosts(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      getHosts();
    }, []);
    
    console.log(hosts);

}
