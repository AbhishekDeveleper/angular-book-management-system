import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key:string,value:string){
    try{
      localStorage.setItem(key,value);
    }catch(err){
      throw new Error('facing error in using localStorage')
    }
        
  }

  getItem<T>(key:string):T|null{
    try{
      const value = localStorage.getItem(key);
      if(value){
       return JSON.parse(value) as T
      }
      return null;
    }catch(err){
      console.log("geeting Error !")
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error('Error removing from localStorage', err);
    }
  }

  clearItem(): void {
    try {
      localStorage.clear();
    } catch (err) {
      console.error('Error clearing localStorage', err);
    }
  }

}
