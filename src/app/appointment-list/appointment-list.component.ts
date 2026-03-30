import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: string = new Date().toISOString(); // use string for input[type="date"]
  appointments: Appointment[] = [];

  // Load from localStorage
  ngOnInit(): void {
    const savedAppointments = localStorage.getItem('appointments');

    if (savedAppointments) {
      try {
        const parsed = JSON.parse(savedAppointments);

        this.appointments = parsed.map((a: any) => ({
          ...a,
          date: new Date(a.date), // restore Date object
        }));
      } catch (e) {
        console.error('Invalid data in localStorage', e);
        this.appointments = [];
      }
    }
  }

  // Add appointment
  addAppointment() {
    if (!this.newAppointmentTitle.trim() || !this.newAppointmentDate) return;

    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      title: this.newAppointmentTitle.trim(),
      date: new Date(this.newAppointmentDate), // convert string → Date
    };

    this.appointments.push(newAppointment);

    this.saveToLocalStorage();

    // reset fields
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date().toISOString();
  }

  // Remove appointment
  removeAppointment(index: number) {
    this.appointments.splice(index, 1);
    this.saveToLocalStorage();
  }

  // Centralized storage logic
  private saveToLocalStorage() {
    const data = this.appointments.map((a) => ({
      ...a,
      date: a.date.toISOString(), // Date → string
    }));

    localStorage.setItem('appointments', JSON.stringify(data));
  }
}
