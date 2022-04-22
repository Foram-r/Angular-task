import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiInterfaceService {
  constructor(private http: HttpClient) {}
  /**
   * Sends a HTTP GET to the API at the given end point path.
   *
   * @param path - The end point path to send the request to.
   * @param [requireAuth=false] - If the call should have the auth headers attached.
   * @param [params] - Optional query params for the request.
   * @param withCredentials - Optional if the request should attach http cookie for auth.
   * @param [responseType=false] -Set response type flag for file type.
   *
   */
  get(
    path: string,
    requireAuth = false,
    params?: any,
    withCredentials?: boolean,
    responseType = false
  ) {
    // check if responseType = true then set response type arraybuffer
    const options: {
      headers?: HttpHeaders;
      params?: HttpParams;
      responseType: any;
      withCredentials?: boolean;
    } = {
      params,
      headers: this.generateHeaders(requireAuth) as HttpHeaders,
      responseType: responseType ? ('arraybuffer' as const) : 'json',
      withCredentials,
    };
    return this.http.get(environment.baseUrl + path);
  }
  /**
   * Add Authorization Token and API key to the request.
   *
   * @param authHeaderRequired - If the call should have the auth
   * headers attached.
   */
  generateHeaders(authHeaderRequired: boolean): HttpHeaders {
    // append our api key
    let header = new HttpHeaders({ 'X-API-KEY': environment.apiKey });

    // add our auth header if required
    if (authHeaderRequired) {
      const unparsedToken = window.localStorage.getItem('auth');
      if (unparsedToken) {
        const token = JSON.parse(unparsedToken)?.custom?.authentication_token;

        if (token) {
          header = header.set('Authorization', `Bearer ${token}`);
        }
      }
    }

    // add the isWeb header (used for analytics)
    header = header.set('isWeb', 'true');

    return header;
  }
}
