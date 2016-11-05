import {Message} from "./message.model";
import {Http, Response} from "@angular/http";
import {Injectable, Inject} from "@angular/core";
import {IAppConfig, APP_CONFIG} from "../app.config";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http,@Inject(APP_CONFIG) private config: IAppConfig) {}

    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        return this.http.post(this.config.apiEndpoint, body)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}