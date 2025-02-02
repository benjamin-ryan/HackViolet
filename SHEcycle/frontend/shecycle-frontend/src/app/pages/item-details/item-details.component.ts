import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-details',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsComponent implements OnInit {
  item: any = null;

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.itemService.getItemById(itemId).subscribe(data => {
        this.item = data;
      });
    }
  }

  requestSwap(): void {
    alert('Request to swap sent!');
  }

  requestDonation(): void {
    alert('Request for donation sent!');
  }
}
