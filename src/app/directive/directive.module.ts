import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectiveIfComponent } from "./directive-if/directive-if.component";
import { DirectiveIfElseComponent } from "./directive-if-else/directive-if-else.component";
import { DirectiveSwitchComponent } from "./directive-switch/directive-switch.component";
import { DirectiveForComponent } from './directive-for/directive-for.component';
import { MydirectiveModule } from '../mydirective/mydirective.module';

@NgModule({
  declarations: [
    DirectiveIfComponent,
    DirectiveIfElseComponent,
    DirectiveSwitchComponent,
    DirectiveForComponent
  ],
  exports: [
    DirectiveIfComponent,
    DirectiveIfElseComponent,
    DirectiveSwitchComponent,
    DirectiveForComponent
  ],
  imports: [CommonModule,MydirectiveModule]
})
export class DirectiveModule {}
