import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, JsonpClientBackend } from '@angular/common/http';
import {SearchResponse,Gif} from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[]=[];
  private _tagsHistory: string[] = [];
  private apiKey:string='ZZWF8t8RCOMToJnKb3tCGKj664YjMLIV'
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  organizeHistory(tag:string){

    tag=tag.toLowerCase();
    if  (this._tagsHistory.includes(tag))
    {
      this._tagsHistory=this._tagsHistory.filter((oldTag)=>oldTag!==tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory =this._tagsHistory.splice(0,10);
    this.setLocalStorage();
  }

  setLocalStorage(){
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));
  }

  loadLocalStorage(){
    if(!localStorage.getItem('history')) return;

    this._tagsHistory=JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length==0) return;

    this.searchTag(this._tagsHistory[0].toString())
  }

  searchTag(tag:string):void{

    if(tag.length===0)return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit','10')
    .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe(resp=> {

      this.gifList = resp.data;
      console.log({gifs:this.gifList})

  });


  }
}