import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, Route } from "react-router-dom";
export default function RouterProtect(){
    const TokenUser = localStorage.getItem('@token')
    const IdUser = localStorage.getItem('@id')

    if(TokenUser && IdUser){
        return true
    }else{
        return false
    }


}