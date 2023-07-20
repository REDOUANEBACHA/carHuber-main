export function usedata(data)
{
    console.log(data.data)
    return { user : { id:data.data.data.id , nam:data.data.data.name , email:data.data.data.email  } , achat : {data : data.data.data.Achat } }
}