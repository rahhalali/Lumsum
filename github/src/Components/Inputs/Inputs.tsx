import React, {useEffect, useState} from 'react';
import debounce from 'lodash.debounce';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../Schema/Schema";
import './Inputs.css';
import {useAppSelector ,useAppDispatch} from "../Redux/hooks";
import {GitHubRepo, GitHubUser} from "../Redux/Fetch";
import {toggle} from "../Redux/Fetch";


function Inputs(props) {
    const dispatch=useAppDispatch();
    const user = useAppSelector((state)=>state.Info.status);
    const [selected, setSelected] = useState<string>('users');

    useEffect(()=>{
        dispatch(toggle(selected));
    },[dispatch,selected]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });


    const submitForm = (data) => {
        console.log("data");
        if(user === 'users'){
            dispatch(GitHubUser({ name:data.name, type: selected }))
        }else{
            dispatch(GitHubRepo({ name:data.name, type: selected }))
        }
    };

    const debounce_function = debounce(handleSubmit(submitForm),2000);



    const handleType = (event:React.ChangeEvent<any>) => {
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const optionElementValue = optionElement.getAttribute("value");
        setSelected(optionElementValue);
        dispatch(toggle ( optionElementValue  ));
    }

    const nameRegister = register("name");
    return (
        <div className='body'>
            <form onChange={debounce_function}>
                <div className='inputs'>
                    <input
                        type="text"
                        id='input'
                        {...nameRegister}
                        onChange={e=>{
                            nameRegister.onChange(e);
                            props.onChange(e.target.value)}}
                        placeholder='Start typing to search ..'/>
                </div>
                <div className='dropdown'>
                    <select className="fas" onChange={handleType}>
                            <option value="users">User &#xf0d7;</option>
                            <option value='repositories'> Repository &#xf0d7;</option>
                    </select>
                </div>
            </form>
            <p className='error'> {errors.name?.message}</p>
        </div>
    );
}

export default Inputs;