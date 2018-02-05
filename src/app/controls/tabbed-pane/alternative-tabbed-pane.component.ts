import { Component, ContentChildren, AfterViewInit, QueryList, ViewChild, AfterContentInit } from '@angular/core';
import { AlternativeTabComponent } from './alternative-tab.component';
import { PagerComponent } from './pager.component';

@Component({
    selector: 'flight-tabbed-pane-alt',
    styles: [`
        .tabbed-pane {
            background-color:#f7ecb5;
            padding:20px;
        }

        a {
            cursor:pointer;
            text-decoration: underline;
        }
    `],

    // template: `
    //     <div class="tabbed-pane">
    //         <span *ngFor="let tab of tabs.toArray()" style="padding-right:20px;">
    //             <a (click)="activate(tab)">{{tab.title}}</a>
    //         </span>
    //
    //         <ng-content></ng-content>
    //
    //         <flight-pager
    //             #pager
    //             (currentPageChange)="activatePage($event)"
    //             [pageCount]="tabsArray.length">
    //         </flight-pager>
    //
    //     </div>
    // `

    template: `
        <div class="tabbed-pane">
            
            

            <span *ngFor="let tab of tabsArray" style="padding-right:20px;">
                <a (click)="activate(tab)">{{tab.title}}</a>
            </span>
            
           
   
            <ng-content></ng-content>

        

        </div>
    `
})
export class AlternativeTabbedPaneComponent implements AfterViewInit, AfterContentInit {

    @ContentChildren(AlternativeTabComponent)
    tabs: QueryList<AlternativeTabComponent>;


    currentPage: number = 0;

    // Use this Getter to get an array with all TabComponents
    get tabsArray(): AlternativeTabComponent[] {
        return this.tabs.toArray();
    }

    get tabsCount() {
        if (!this.tabs) {
            return 0;
        }

        const array: Array<AlternativeTabComponent> = this.tabs.toArray();

        if (!array) {
            return 0;
        }

        return array.length;
    }

    constructor() {
    }

    ngAfterContentInit() {
        if (this.tabsArray.length === 0) {
            return;
        }
        this.activate(this.tabsArray[0]);
    }

    ngAfterViewInit() {
        
    }

    public activate(active: AlternativeTabComponent) {
        for (const tab of this.tabsArray) {
            tab.visible = (tab === active);
        }

        this.currentPage = this.tabsArray.indexOf(active);
    }

    public activatePage(pageNumber: number) {
        this.currentPage = pageNumber;
        this.activate(this.tabsArray[pageNumber]);
    }
}
