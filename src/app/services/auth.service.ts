import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 
  baseurl = "https://localhost:7228/api/" 
  jobFormUrl = "https://localhost:7228/Job/"
  jwtHelperService = new JwtHelperService();
 

  postJobForm(job: any) { 
    debugger
    return this.http.post(this.jobFormUrl,{JobTitle: job.jobTitle,
      Expiry: job.expiry,
      JobDuration: job.jobDuration,
      JobDescriptions: job.jobDescriptions
      });
  }

  getJobForm() { 
    return this.http.get<any>(this.jobFormUrl)
  }
 

}



