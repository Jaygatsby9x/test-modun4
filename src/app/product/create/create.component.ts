import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product;

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.product = this.fb.group({
      name: [''],
      desc: [''],
      status: [''],
      price: ['']
    });
  }

  onSubmit() {
    this.productService.create(this.product.value);
    this.router.navigate(['products']);
  }
}
