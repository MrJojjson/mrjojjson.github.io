import{isEmpty as a}from"../../../_snowpack/pkg/ramda.js";import{USER_LOADING as t,SET_CURRENT_USER as n,REGISTER_USER as i,LOGIN_USER as o}from"../types/authTypes.js";const u={isAuthenticated:!1,user:null,loading:!1,messages:{},errors:{}};export const AuthReducer=(e=u,r)=>{const{payload:s}=r;switch(r.type){case i:return{...e,messages:{registration:s}};case o:return{...e,messages:{login:s}};case n:return{...e,isAuthenticated:!a(s),user:s,loading:!1};case t:return{...e,loading:s};default:return e}};