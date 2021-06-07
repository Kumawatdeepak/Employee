const initialData = {
    list:[]
}

const employeeReducers = (state=initialData, action)=>{

    switch (action.type) {
        case "ADD_EMP": 
        const {id, name, company, email, pwd} = action.payload;
        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    name:name,
                    company:company,
                    email:email,
                    pwd:pwd
                }
            ]
        } 
       
        case "DEL_EMP": 
        const newlist = state.list.filter((elem)=> elem.id !== action.id);
                    return{
                        ...state,
                        list:newlist
                    }
        case "UP_EMP": 
        const {ids, names, companys, emails} = action.payload;
        const index = state.list.findIndex(emp => emp.id === ids); //finding index of the item                                                                       action.payload); //finding index of the item
        const newArray = [...state.list]; //making a new array
        newArray[index].name = names//changing value in the new array
        newArray[index].company = companys//changing value in the new array
        newArray[index].email = emails//changing value in the new array
        return { 
         ...state, //copying the orignal state
         list: newArray, //reassingning list to new array
        }                                

        default: return state;
    }
}
export default employeeReducers;