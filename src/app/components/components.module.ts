import { NgModule } from "@angular/core";

import { BeerListComponent } from './../components/beer-list/beer-list.component';
import { BeerItemComponent } from './../components/beer-item/beer-item.component';
import { SearchComponent } from './../components/search/search.component';
import { BeerComponent } from './../components/beer/beer.component';
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [BeerListComponent, BeerItemComponent, SearchComponent, BeerComponent],
    exports: [BeerListComponent, BeerItemComponent, SearchComponent, BeerComponent],
    imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}