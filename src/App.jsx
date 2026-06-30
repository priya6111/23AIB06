import {useMemo} from 'react'
import {useRoutes} from 'react-router-dom'

import {useState,useEffect} from 'react'

const notifications = [
    {
        "ID" : "b283218f-ea5a-4b7c-93a9-1f2f240d64b0",
        "Type" : "Placement",
        "Message" : "CSX Corporation hiring",
        "Timestamp" : "2026-04-22 17:51:18"
    },
    {
        "ID" : "81589ada-0ad3-4f77-9554-f52fb558e09d" ,
        "Type" : "Event",
    "Message" : "farewell",
    "Timestamp" : "2026-04-22 17:51:06"
    },
    {
        "ID" : "0005513a-142b-4bbc-8678-eefec65e1ede",
        "Type" : "Result",
        "Message" : "mid-sem",
        "Timestamp" : "2026-04-22 17:50:54"
    },

    {
        "ID" : "ea836726-c25e-4f21-a72f-544a6af8a37f",
        "Type" : "Result",
        "Message" : "project-review",
        "Timestamp" : "2026-04-22 17:50:42"
    },{
        "ID" : "003cb427-8fc6-47f7-bb00-be228f6b0d2c",
        "Type" : "Result",
        "Message" : "external",
        "Timestamp" : "2026-04-22 17:50:30"
    }
]


const[notificationsList, setNotificationsList] = useState([]);

const[loading, setLoading] = useState(true);

useEffect(() => {
    setNotificationsList(notifications);
    setLoading(false);
}, []);

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

function Notification({ notification }) {
    return (
        <div>
            <h2>{notification.Type}</h2>
            <p>{notification.Message}</p>
            <small>{formatTimestamp(notification.Timestamp)}</small>
        </div>
    );
}

function NotificationsList({ notifications }) {
    return (
        <div>
            {notifications.map(notification => (
                <Notification key={notification.ID} notification={notification} />
            ))}
        </div>
    );
}

function App(){
    notificationsList.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
    notificationsList.forEach(notification => {
        notification.formattedTimestamp = formatTimestamp(notification.Timestamp);
    });
} ;
return (
    <div>
        <h1>Notifications</h1>
        <App />

</div>)


export default App;