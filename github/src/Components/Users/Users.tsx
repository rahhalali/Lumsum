import React from 'react';
import './Users.css'
import ImageComponent from "./ImageComponenet/ImageComponent";
import Info from "./Info/Info";
import SpecificInfo from "./SpecificInfo/SpecificInfo";
import SocialMedia from "./SocialMedia/SocialMedia";

interface Data{
    data: any
}

function Users(props:Data) {
    return (
        <div className='users'>
            {
                props.data && props.data.map((item,index)=>(
                    <div className="wrapper" key={index}>
                        <ImageComponent image={item.avatar_url} username={item.login}/>
                        <div className="right">
                            <Info email={item.email} company={item.company} />
                            <SpecificInfo location={item.location} followers={item.followers}/>
                            <SocialMedia  profile={item.profile}/>
                        </div>
                    </div>
                ))
            }



        </div>
    );
}

export default Users;