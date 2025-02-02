import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];

  constructor(private itemService: ItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch all items from database
    this.itemService.getItems().subscribe(data => {
      this.items = data;

      // Apply filtering based on query param
      this.route.queryParams.subscribe(params => {
        const filter = params['filter'];
        if (!filter || filter === 'all') {
          this.filteredItems = this.items; // Show all items
        } else {
          this.filteredItems = this.items.filter(item =>
            item.category === filter || item.type === filter
          );
        }
      });
    });
  }
}