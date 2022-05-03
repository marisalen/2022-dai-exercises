export const data = {
    op1:false,
    op2:true,
    op3:false
  }

  export function ChangeData(key, val){
      data[key] = val;
      console.log(data);
  }