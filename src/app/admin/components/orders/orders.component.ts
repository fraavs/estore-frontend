import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/home/services/orders/orders.service';




@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];
  updatedStatus: string = '';

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.ordersService.getOrders().subscribe(data => {
      this.orders = data;
    })
  }

  updateStatus(orderId: number) {
    if (this.updatedStatus) {
      this.ordersService.updateOrderStatus(orderId, this.updatedStatus).subscribe(response => {
        alert(response.message);
        this.loadOrders();
        this.updatedStatus = '';
      });
    } else { 
      alert('Please entiry a status.')
    }
  }

}
