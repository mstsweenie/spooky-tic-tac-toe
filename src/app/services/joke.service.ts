import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke(): Promise<any> {
    const jokeFilter = ["witch", "skeleton", "ghost"];
    // pull a random string from the jokeFilter array
    let jokeSearchString = Math.floor(Math.random() * jokeFilter.length);
    const apiUrl = `https://icanhazdadjoke.com/search?term=${ jokeFilter[jokeSearchString] }`;
    const headers = { 'Accept': 'application/json' }

    return this.http.get<any>(apiUrl, { headers }).toPromise();

    //let resultPromise = fetch(apiUrl, {
    //  headers: {
    //    'Accept': 'application/json'
    //  },
    //})
    //  .then (response => response.json())
    //  .then(response => {
    //      if(response.Response == "False") {
    //          alert(response.Error);
    //      } else {
    //        this.dadJokeResult = response['results'][0].joke;
    //          console.log(response['results'][0].joke);
    //      }
    //  });
    //return resultPromise;
  }
}
