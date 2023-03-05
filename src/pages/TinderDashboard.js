import React from 'react'
import QuickSearch from '../sections/tinDashboard/QuickSearch'
import NewMembers from '../sections/tinDashboard/NewMembers'
import RecentActivities from '../sections/tinDashboard/RecentActivities'

function TinderDashboard() {
    return (
        <>
            <QuickSearch />
            <NewMembers />
            <RecentActivities />
        </>
    )
}

export default TinderDashboard