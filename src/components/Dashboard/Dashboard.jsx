import React from "react";


import DashboardContent from "./DashboardContent";
import "../../stylesheets/_main.scss";

const Dashboard = () => {
    const [tabs, settabs] = React.useState({
        isDashboard: true,
        isWorkOrders: false,
        isAssets: false,
        isInspections: false,
        isProjects: false,
        isInvoices: false,
        isPersonnel: false,
        isWorkOrders: false,
        isInventory: false,
        isReports: false
    });
    

    const toggleTabs = (tabName) => {
        const tempTabs = { ...tabs };
        const tbsMap = Object.keys(tempTabs);
        tbsMap.forEach(tb => {
            if (tb === tabName) {
                tempTabs[tb] = true;
            }
            else tempTabs[tb] = false;
        })
        settabs({ ...tabs, ...tempTabs });
    };


    let activeTab;
    for (let tab in tabs) {

      if(tabs[tab] === true){
        activeTab = tab; 
      }
    }

    return (
        <div className="container__of-dashboard" >
           
        <div className="content">
            
            <nav className="sidebar">
              <div className='top-nav'>
                <a href="#" className='active'> <i className='fa fa-cog' /></a>
                <a href="#"> <i className='fa fa-cog' /></a>
                <a href="#"> <i className='fa fa-cog' /></a>
                <a href="#"> <i className='fa fa-cog' /></a>
                <a href="#"> <i className='fa fa-cog' /></a>
              </div>
                <ul className="side-nav">
                    <li
                        className={tabs.isDashboard ?
                            "side-nav__item side-nav__item--active" :
                            " side-nav__item"}
                        onClick={() => toggleTabs('isDashboard')}>
                        <a href="#" className="side-nav__link">
                            <div className='side-nav__icon'>
                                <i className='fa fa-cog'></i>
                           </div>
                            <span className="side-nav__text">Dashboard</span>
                        </a>
                    </li>

                    <li
                        className={tabs.isWorkOrders ?
                            "side-nav__item side-nav__item--active" :
                            " side-nav__item"}
                        onClick={() => toggleTabs('isWorkOrders')}>
                        <a href="#" className="side-nav__link">
                            <div className='side-nav__icon'>
                                <i className='fa fa-cog'></i>
                           </div>
                            <span className="side-nav__text">WorkOrders</span>
                        </a>
                    </li>


                    <li
                        className={tabs.isInspections ?
                            "side-nav__item side-nav__item--active" :
                            " side-nav__item"}
                        onClick={() => toggleTabs('isInspections')}>
                        <a href="#" className="side-nav__link">
                             <div className='side-nav__icon'>
                                <i className='fa fa-cog'></i>
                           </div>
                            <span className="side-nav__text">Inspections</span>
                        </a>
                    </li>

                    <li
                        className={tabs.isProjects ?
                            "side-nav__item side-nav__item--active" :
                            " side-nav__item"}
                        onClick={() => toggleTabs('isProjects')}>
                        <a href="#" className="side-nav__link">
                             <div className='side-nav__icon'>
                                <i className='fa fa-cog'></i>
                           </div>
                            <span className="side-nav__text">Projects</span>
                        </a>
                    </li>



                    <li
                        className={tabs.isInvoices ?
                            "side-nav__item side-nav__item--active" :
                            " side-nav__item"}
                        onClick={() => toggleTabs('isInvoices')}>
                        <a href="#" className="side-nav__link">
                             <div className='side-nav__icon'>
                                <i className='fa fa-cog'></i>
                           </div>
                            <span className="side-nav__text">Invoices</span>
                        </a>
                    </li>

                    <li
                        className={tabs.isPersonnel ?
                            "side-nav__item side-nav__item--active" :
                            " side-nav__item"}
                        onClick={() => toggleTabs('isPersonnel')}>
                        <a href="#" className="side-nav__link">
                             <div className='side-nav__icon'>
                                <i className='fa fa-cog'></i>
                           </div>
                            <span className="side-nav__text">Personnel</span>
                        </a>
                    </li>

                    <li
                        className={tabs.isReports ?
                            "side-nav__item side-nav__item--active" :
                            " side-nav__item"}
                        onClick={() => toggleTabs('isReports')}>
                        <a href="#" className="side-nav__link">
                             <div className='side-nav__icon'>
                                <i className='fa fa-cog'></i>
                           </div>
                            <span className="side-nav__text">Reports</span>
                        </a>
                    </li>


                    <li
                        className={tabs.isInventory ?
                            "side-nav__item side-nav__item--active" :
                            " side-nav__item"}
                        onClick={() => toggleTabs('isInventory')}>
                        <a href="#" className="side-nav__link">
                             <div className='side-nav__icon'>
                                <i className='fa fa-cog'></i>
                           </div>
                            <span className="side-nav__text">Inventory</span>
                        </a>
                    </li>
                   

                    
                </ul>
            </nav>
            <main className="dashboard__main-content">
            <div className='header'>
                  
                    <div className='header__dashboardActiveItem'>
                        <a href="#" className=''>{activeTab.substring(2)}</a>
                    </div>
            </div>
                {tabs.isDashboard ? <DashboardContent />  : ""}
                {tabs.isInspections ? <div className='DashboardContent'>Inspections</div> : ""}
                {tabs.isProjects ? <div className='DashboardContent'>Projects</div> : ""}
                {tabs.isInvoices ? <div className='DashboardContent'>Invoices</div> : ""}
                {tabs.isPersonnel ? <div className='DashboardContent'>Personnel</div> : ""}
                {tabs.isInventory ? <div className='DashboardContent'>Inventory</div> : ""}
                {tabs.isReports ? <div className='DashboardContent'>Reports</div> : ""}
    
            </main>
        </div>
    </div>
    )
}



export default Dashboard; 