import { CatService} from '../cat-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cat: any | undefined;
  catList : string[] | undefined
  constructor(private catService: CatService) { }


  ngOnInit(): void {
    this.catService.getCats().subscribe((data :any) => {
      this.cat = data
    //console.log(this.cat)
  });
  }

callCats(){
  var outputArray = [];  
  for (let i = 0 ; i < this.cat.length; i++) {  
      outputArray.push(this.cat[i].id);  
    }
    this.catList = outputArray
   //console.log(this.catList)
  }  
}
