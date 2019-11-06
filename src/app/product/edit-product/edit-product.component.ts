import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product;
  id;

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.getAll('id');
    const data = this.productService.getById(this.id);
    this.product = this.fb.group({
      name: [data.name],
      desc: [data.desc],
      status: [data.status],
      price: [data.price]
    });
  }

  onSubmit() {
    this.productService.update(this.id, this.product.value);
    this.router.navigate(['products']);
  }
}
