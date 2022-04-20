import React from 'react'
import './dashboard.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import Sidebar from './dashboard/Sidebar';
export default function Dashboard() {
  return (
 <div className="maindashboard">
   <div className="topbarwrapper">
     <div className="leftbar">
       <img src='./logo.png'/>
       </div>
       <div className="right">
         <div className="notificationicon">
         <NotificationsNoneIcon/>
         <span className="badge">
           <div className="badgenumber">
             2
           </div>
         </span>
         </div>
         <div className="notificationicon">
         <LanguageIcon/>
         </div>  
         <div className="notificationicon">
         <SettingsIcon/>
         </div> 
         <img src="./it.jpg" alt="" className="avatar" />
       </div>
     </div>
     <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Admin's portal</strong> has been now successfully updated. 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
     <Sidebar/>
   </div>
  )
}
