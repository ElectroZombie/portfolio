import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../../core/services/cv.service';
import { ContactInfo } from '../../core/models/cv.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact!: ContactInfo;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.contact = this.cvService.getCvData().contact;
  }
}
