import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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';

  constructor(private http: HttpClient) { }

  getOpenAi(url: string){
    // return this.http.post(`${this.apiUrl}?api_key=${this.apiKey}`);
  }

  async generarRespuesta(): {
    
  }

}
