import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  // 0. initializing the data from localStorage
  // ngOnInit -> a lifecycle hook
  ngOnInit(): void {
    // console.log("loaded")
    let savedAppointments = localStorage.getItem('appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
    this.appointments.map((a) => (a.date = new Date(a.date)));
  }

  // methods

  // 1. add an appointment
  addAppointment() {
    // alert(this.newAppointmentDate + ' ' + this.newAppointmentTitle);

    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointMent: Appointment = {
        id: crypto.randomUUID(),
        date: this.newAppointmentDate,
        title: this.newAppointmentTitle,
      };

      this.appointments.push(newAppointMent);

      // reset fields
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      console.log(this.appointments);

      // localstorage persistence
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  // 2. remove an appointment
  removeAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
