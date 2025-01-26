import errorMap from "zod/lib/locales/en";
import useData from "./useData";
import genres from "../data/genres";
export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

interface FetchGenresResponse{
    count: number;
    results:Genre[];
}

const useGenres=()=>({data:genres, isLoading:false, error:null})
export default useGenres;