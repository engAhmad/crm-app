import {Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: 'breadcrumbs.component.html'

})
export class BreadcrumbsComponent implements OnInit {
    breadcrumbs: Array<Object>;
    heading: string;

    constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {
        this.translate.use(this.getUserLang());
    }

    ngOnInit() {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {  // note, we don't use event
                this.breadcrumbs = [];
                let currentRoute = this.route.root,
                    url = '';
                do {
                    let childrenRoutes = currentRoute.children;
                    currentRoute = null;
                    childrenRoutes.forEach(route => {
                        if (route.outlet === 'primary') {
                            let routeSnapshot = route.snapshot;
                            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                            this.breadcrumbs.push({
                                label: this.getPageHeading(route.snapshot.data.breadcrumb),
                                url: url
                            });
                            currentRoute = route;
                        }
                    })
                } while (currentRoute);
            });

    }

    getPageHeading(key: string) {
        this.translate.get(key).subscribe((res: string) => {
            this.heading = res;
        });
        return this.heading;
    }

    getUserLang() {
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            return currentUser.language;
        } else {
            return this.translate.getDefaultLang();
        }
    }
}