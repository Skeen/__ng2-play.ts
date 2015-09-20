import {Component, View, bootstrap, Injectable, NgIf} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {HTTP_BINDINGS} from 'angular2/http';

@Component({
    selector: 'hello'
})
@View({
    template: `<span ng-if="name">Hello, {{name}}!</span>`
})
@Injectable()
export class Hello {
    name: string = 'World';
    constructor(http:Http) {
        http.get('./http_request.txt').toRx().subscribe(res => alert(res.text()));
        setTimeout(() => {
            this.name = 'NEW World'
        }, 2000);
    }
}

bootstrap(Hello, [HTTP_BINDINGS]);
