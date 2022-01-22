import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {toast} from "react-toastify";


interface initialStates {
    users: any,
    repos: any,
    status: string
}


export const GitHubUser = createAsyncThunk(
    "Info/GitHubUser",
    async (payload:any):Promise<any> => {
        const response = await fetch(`http://localhost:5000/fetching/searches`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 Accept:"*/*"
            },
            body: JSON.stringify({
                q: payload.name,
                type:payload.type
            }),
        });
        const result = await response.json();
        return { result: result };
    }
);

export const GitHubRepo = createAsyncThunk(
    "Info/GitHubRepositories",
    async (payload:any):Promise<any> => {
        const response = await fetch(`http://localhost:5000/fetching/searches`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept:"*/*"
            },
            body: JSON.stringify({
                q: payload.name,
                type:payload.type
            }),
        });
        const result = await response.json();
        console.log("repo result" , result);
        return { result: result };
    }
);



const GitHubSlice = createSlice({
    name: "Info",
    initialState:{users:[],repos:[],status:"users"} as initialStates,
    reducers:{
        toggle:(state,action:PayloadAction<any>):void=>{
            state.status = action.payload;
        }
    },
    extraReducers:(builder)=> {
        builder.addCase(GitHubUser.fulfilled, (state, action:PayloadAction<any>):void => {
               if(action.payload.result.status === 201){
                   state.users = action.payload.result.messages;
               } else if(action.payload.result.status === 404){
                   toast(action.payload.result.messages, {
                       position: "top-right",
                       autoClose: 5000,
                       hideProgressBar: false,
                       closeOnClick: true,
                       pauseOnHover: true,
                       draggable: true,
                       progress: undefined,
                   });
               } else {
                   toast(action.payload.result.messages, {
                       position: "top-right",
                       autoClose: 5000,
                       hideProgressBar: false,
                       closeOnClick: true,
                       pauseOnHover: true,
                       draggable: true,
                       progress: undefined,
                   });
               }
        })
            builder.addCase(GitHubRepo.fulfilled,(state, action:PayloadAction<any>):void=>{
            if(action.payload.result.status === 201 ){
                state.repos = action.payload.result.messages;
            }
            else{
                toast('Sorry no data To Show', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })
    },
});
export const { toggle } = GitHubSlice.actions;
export default GitHubSlice.reducer;