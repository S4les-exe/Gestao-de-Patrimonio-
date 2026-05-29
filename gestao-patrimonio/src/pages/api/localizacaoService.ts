import secureLocalStorage from "react-secure-storage";
import {api} from "./api";

export async function listarLocalizacao(){
    try{
        console.log("buscando localizacao")

        const response = await api.get("Localizacao");
        console.log(secureLocalStorage.getItem("Token"));
        console.log("dakljflkçasjfdklçsajfçklsjafçl");
        return response.data;
    }catch(error : any){
        throw new Error(error.response.data);
    }
}