import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm, FormControl } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  @ViewChild('editForm') editForm: NgForm
  user: User;
  created:string;
  age:string;
  options = {weekday : 'long' , year :'numeric' , month : 'long',day:'numeric'};
  photoUrl:string;
  countfollwers:string;
  countfollwing:string;
 @HostListener('window:beforeunload',['$event'])
 unLoadNotification($event:any){
   if(this.editForm.dirty){
     $event.returnValue=true;
   }
 }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  
  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private userService:UserService,private authService:AuthService) { }

  ngOnInit() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));

    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl=>this.photoUrl=photoUrl);
    this.userService.userFollowering(this.authService.decodedToken.nameid).
      subscribe(
        res=>{this.authService.firstfollower.next(res.toString());
        this.authService.latestfollowercount.subscribe(res=>{this.countfollwers=res;});
        }
      );
      this.userService.getnumberofollwers(this.authService.decodedToken.nameid).subscribe(
        res=>{this.authService.firstfollwering.next(res.toString());
        this.authService.latestfolloweringcount.subscribe(res=>{this.countfollwing=res;});}
      );
    this.created = new Date(this.user.created).toLocaleString('ar-EG',this.options).replace('،','');
    this.age = this.user.age.toLocaleString('ar-EG');
  }

  updateUser() {
   this.userService.updateUser(this.authService.decodedToken.nameid,this.user).subscribe(()=>{
    this.alertify.success('updated Is Done ');
    this.editForm.reset(this.user);
   },error=>this.alertify.error(error))

  }

  updateMainPhoto(photoUrl){
    this.user.photoURL=photoUrl;
  }



}
