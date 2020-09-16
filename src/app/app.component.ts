import { Component } from '@angular/core';
import { AppService } from './app.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'contact';
  contactData;  
  columnDefs;
  editContact = "";

  constructor(private appService:AppService)
  { 

  }

  ngOnInit() {
    this.columnDefs = [
        {field: 'name' },
        {field: 'phone' },
        {field: 'email'},
        {
          field: 'actions',
          cellRenderer: function(params) {
              let keyData = params.data.key;
              let valData = params.data.value;
              let newHtml = '<button (click)="editContact = 1">Edit</button> <button (click)="deleteContact()">Delete</button>';
              return newHtml;
          }
        }
    ];

    this.contactData = [
        { name: 'ABC', phone: '123-456-100', email: 'abc@test.com' },
        { name: 'EFG', phone: '111-456-100', email: 'efg@test.com' },
        { name: 'HIJ', phone: '222-456-100', email: 'hij@test.com' }
    ];
    }

}

function editContact()
{
    this.editContact = 1;
    console.log("edit contact")
}


function deleteContact()
{
    console.log("delete contact")
}