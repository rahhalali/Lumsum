import React from 'react';
import './Repositories.css';
import Profile from "./Profile/Profile";
import Stats from "./Stats/Stats";

interface Data{
    data:any
}

function Repositories({data}:Data) {
    console.log("DATA" , data);
    return (
        <div className='Repositories'>
            {
                data && data.items.map((item,index)=>{
                    return (
                        <div className="frame" key={index}>
                            <div className="center">
                                <Profile repo_name={item.name} author={item.owner.login} image={item.owner.avatar_url}/>
                                <Stats stars={item.stargazers_count} forks_count={item.forks_count}
                                       watchers_count={item.watchers_count} open_issues_count={item.open_issues_count}/>
                            </div>
                        </div>
                    );
                })
            }

        </div>

    );
}

export default Repositories;