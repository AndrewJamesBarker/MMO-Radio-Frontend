import {useState, useEffect} from "react";

// retrieve and display host data from reporter cms backend

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
            <div className="host-container">
                <h2 className="host-name">{item.name}</h2>
                <img className="hostImage" src={`http://localhost:8888/storage/${item.profile_pic}`} width="300"></img>
                <p className="host-bio">'{item.bio}'</p>
            </div>
        </div>
))}
    </div>


)
}
