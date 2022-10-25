import * as Blueshell from 'blueshell';
declare class AppState implements Blueshell.BlueshellState {
    value: number;
    alarm: boolean;
    errorReason?: Error;
    __blueshell: any;
}
declare class AppEvent {
    desc: string;
    constructor(desc?: string);
}
export declare class ConsolePublisher implements Blueshell.TreePublisher<AppState, AppEvent> {
    private lastAlarm;
    publishResult(_state: AppState, _event: AppEvent, _topLevel: boolean): void;
    configure(_options: object): void;
}
export declare class PostPublisher implements Blueshell.TreePublisher<AppState, AppEvent> {
    private lastAlarm;
    publishResult(_state: AppState, _event: AppEvent, _topLevel: boolean): void;
    configure(_options: object): void;
}
export declare class BehaviorTreeRunner {
    private state;
    private behavior;
    constructor(publisher?: Blueshell.TreePublisher<AppState, AppEvent>);
    dataReceived(data: number): void;
}
export {};
