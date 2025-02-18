import { Injectable } from '@angular/core';

export type Teacher = {
  name: string;
  subject: 'Archi' | 'Web' | 'Réseaux' | 'Système' | 'BDD';
  id: number;
};

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  private readonly teachers: Teacher[] = [
    {
      id: 1,
      name: 'John Doe',
      subject: 'Archi',
    },
    {
      id: 2,
      name: 'Jane Doe',
      subject: 'Web',
    },
    {
      id: 3,
      name: 'Ben Dover',
      subject: 'Réseaux',
    },
    {
      id: 4,
      name: 'Justin Sane',
      subject: 'Système',
    },
  ];

  findAll(): Teacher[] {
    return this.teachers;
  }

  findOne(id: number): Teacher | null {
    return this.teachers.find((t) => t.id === id) ?? null;
  }
}
