import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher, TeachersService } from '../teachers.service';
import { TeachersListComponent } from '../teachers-list/teachers-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TeachersListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  showDialog: boolean = false;
  selectedID: number | null = null;

  teachers: Teacher[] = [];

  constructor(
    private readonly router: Router,
    private readonly teacherService: TeachersService
  ) {}

  ngOnInit(): void {
    this.teachers = this.teacherService.findAll();
  }

  onPageButtonClick(id: number) {
    this.showDialog = true;
    this.selectedID = id;
  }

  onDialogClose() {
    this.showDialog = false;
    this.selectedID = null;
  }

  onNavigation() {
    this.router.navigate(['/detail', this.selectedID]);
  }
}
