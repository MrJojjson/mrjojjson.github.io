import{filter as e,propEq as o}from"../../../_snowpack/pkg/ramda.js";export const getArtboardState=({artboards:t})=>t,getArtboardDefinedState=t=>getArtboardState(t).defined,getPageArtboards=({state:t,pageId:r})=>e(o("pageId",r),getArtboardDefinedState(t));