import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { APIService } from '../API.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  user: any;
  todoItems: any;

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private apiService: APIService
    ) {
    this.authService.getUser().subscribe(user => {
      if (!user) {
        console.log('User not logged in')
        this.navCtrl.navigateRoot('/login');
      }

      this.user = user;
      console.log({user})

      this.getItems();

      this.apiService.OnCreateTodoListener(this.user.attributes.sub).subscribe({
        next: todoData => {
          const newTodo = todoData.value.data;
          this.todoItems.push(newTodo["onCreateTodo"])
          console.log(newTodo)
        }
      }      )

      this.apiService.OnDeleteTodoListener(this.user.attributes.sub).subscribe({
        next: todoItem => {
          const deletedItem = todoItem.value.data["onDeleteTodo"]
          console.log(deletedItem)
          this.todoItems = this.todoItems.filter(item => item.id !== deletedItem.id)
        }
      })

      this.apiService.OnUpdateTodoListener(this.user.attributes.sub).subscribe({
        next: todoItem => {
          const updatedItem = todoItem.value.data["onUpdateTodo"]

          console.log(updatedItem)

          const index = this.todoItems.findIndex(item => item.id === updatedItem.id)

          if(index !== -1) {
            this.todoItems[index] = updatedItem
          } else {
            this.todoItems.push(updatedItem)
          }


        }
      })

      this.apiService.OnCreateTaskListener(this.user.attributes.sub).subscribe({
        next: task => {
          console.log({task})
        }
      })
    })

  }

  getItems() {
    if(this.user) {
      this.apiService.ListTodos().then(res => {
        this.todoItems = res.items;

        console.log(this.todoItems)
      })
    }
  }

  delete(item, index) {
    if(this.user) {
      const input = {
        id: item.id
      }
      this.apiService.DeleteTodo(input).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }

  }

  complete(index) {

  }

}
