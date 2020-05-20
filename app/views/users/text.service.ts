import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  uri = 'http://localhost:4000/text';
  constructor(private http: HttpClient) { }

    addText(headline, htmlContent){
     const obj = {
       headline: headline,
       htmlContent: htmlContent

     };
     console.log(obj);
     this.http.post(`${this.uri}/add`, obj)
         .subscribe(res => console.log('Done'));
   }

   getText() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getUserText(id){
    return this
            .http
            .get(`${this.uri}/getUserText/${id}`);
  }

  editText(id) {
  return this
          .http
          .get(`${this.uri}/edit/${id}`);
  }

  updateText(headline, htmlContent, id, german, english) {

        const standard_obj = {
            headline: headline,
            htmlContent: htmlContent
          };

        this
          .http
          .post(`${this.uri}/update/${id}`, standard_obj)
          .subscribe(res => console.log('Done'));



  }



    wordMiddle(front_index, back_index){
      return Math.ceil((back_index - front_index) / 2);
    }

    deleteText(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
