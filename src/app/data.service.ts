import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(public http:HttpClient) { }


  // option= {
  //   method:'Get',
  //   Headers:{
  //     'X-RapidAPI-Key': '7abefb4a54mshbc33f7670bff1f1p1c68e6jsn319a26b8c09e',
  //      'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
  //   }
  // }

//  headers= new HttpHeaders().set( 'X-RapidAPI-Key': '7abefb4a54mshbc33f7670bff1f1p1c68e6jsn319a26b8c09e').set( 'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com')

// httpUrl= 'https://f1-live-motorsport-data.p.rapidapi.com/session/2757'

// async dataGet()
// {
//  let headers = new HttpHeaders().set( 'X-RapidAPI-Key', '7abefb4a54mshbc33f7670bff1f1p1c68e6jsn319a26b8c09e').set( 'X-RapidAPI-Host', 'f1-live-motorsport-data.p.rapidapi.com')

//  let  httpUrl= 'https://f1-live-motorsport-data.p.rapidapi.com/session/2757'
//   console.log("this is service ",this.http)
// return this.http.get(this.httpUrl,{headers}).subscribe(data=>{
//   console.log(data)
// })
// }

httpUrl= '/assets/data.json'
async dataGet(){
let objtosend=[{data:[], error:''}]
let resp= this.http.get(this.httpUrl).toPromise().then((data)=>{
return data
})
return resp
}




}
