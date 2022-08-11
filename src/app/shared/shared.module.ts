import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, PokeListComponent],
  exports: [HeaderComponent, SearchComponent, PokeListComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
