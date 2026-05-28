import {api} from "./api";

export async function listarLocalizacao(){
    try{
        const response = await api.get("Localizacao");
        return response.data;
    }catch(error : any){
        throw new Error(error.response.data);
    }
}