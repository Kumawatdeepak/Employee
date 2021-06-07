export const  addEmployee = (newName,newCompany,newEmail,newPwd)=>{

          return {
              type:"ADD_EMP",
              payload:{
                  id:new Date().getTime().toString(),
                  name:newName,
                  company:newCompany,
                  email:newEmail,
                  pwd:newPwd
              }
          }
}

export const delEmployee=(id)=>{
    return{
        type:"DEL_EMP",
        id :id
    }

}

export const updateEmployee=(newId,newName,newCompany,newEmail)=>{
    return{
        type:"UP_EMP",
        payload :{
            ids:newId,
            names:newName,
            companys:newCompany,
            emails:newEmail,
        }
    }
}

