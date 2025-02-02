import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Fetch all items from the database
    this.itemService.getItems().subscribe(data => {
      this.items = data;

      // Get filter values from the route parameters
      this.route.params.subscribe(params => {
        const filterType = params['filterType'];  // 'category' or 'type'
        const filterValue = params['filterValue'];  // 'Casual', 'Tops', etc.
        
        if (!filterType || !filterValue) {
          this.filteredItems = this.items;  // Show all items
        } else {
          this.filteredItems = this.items.filter(item =>
            item[filterType] === filterValue  // Dynamically match category or type
          );
        }
      });
    });
  }

  viewItem(itemId: string): void {
    this.router.navigate(['/items', itemId]);
  }

}