import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CVData } from '../models/cv.model';
import { CV_DATA } from '../constants/cv.constant';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvDataSubject = new BehaviorSubject<CVData>(CV_DATA);
  public cvData$: Observable<CVData> = this.cvDataSubject.asObservable();

  getCvData(): CVData {
    return this.cvDataSubject.value;
  }

  getPersonalInfo() {
    return this.cvData$.pipe();
  }

  getSkills() {
    return this.cvData$.pipe();
  }

  getExperience() {
    return this.cvData$.pipe();
  }

  getProjects() {
    return this.cvData$.pipe();
  }
}
