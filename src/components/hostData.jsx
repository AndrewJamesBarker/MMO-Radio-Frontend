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

// console.log(hosts);

return (

    <div className="basic-container">
        <h2 className="hostTitle">Meet Your <span className="orange-text">HOSTS!</span></h2>
    {hosts.map(item => (
        <div key={item.id}>
            <div className="basic-item">
                <h2>{item.name}</h2>
                <img  src={`http://localhost:8888/storage/${item.profile_pic}`} className="hostImage" width="300"></img>
                <p>'{item.bio}'</p>
            </div>
        </div>
))}
    </div>


)
}
