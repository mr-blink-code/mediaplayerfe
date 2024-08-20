import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";

export const uploadVideo =async(reqBody)=> {
    return await commonApi('POST',`${serverURL}/videos`,reqBody)
}

export const viewVideo =async()=> {
    return await commonApi('GET',`${serverURL}/videos`)
}

export const getVideobyId =async(id)=>{
    return await commonApi('GET',`${serverURL}/videos/${id}`)
}

export const deleteVideo =async(id)=>{
    return await commonApi('DELETE',`${serverURL}/videos/${id}`)
}

export const addToHistory = async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/history`,reqBody)
}

export const loadHistory =async()=> {
    return await commonApi('GET',`${serverURL}/history`)
}

export const deleteHistory =async(id)=>{
    return await commonApi('DELETE',`${serverURL}/history/${id}`)
}

export const addToCategory =async(reqBody)=> {
    return await commonApi('POST',`${serverURL}/categroy`,reqBody)
}

export const fetchCategory =async()=> {
    return await commonApi('GET',`${serverURL}/categroy`)
}

export const deleteCategory =async(id)=>{
    return await commonApi('DELETE',`${serverURL}/categroy/${id}`)
}

export const updateCategoryById =async(id,data)=>{
    return await commonApi('PUT',`${serverURL}/categroy/${id}`,data)
}