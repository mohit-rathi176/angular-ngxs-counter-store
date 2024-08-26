export class Init {
	static readonly type = '[Counter] Init';
}

export class Set {
	static readonly type = '[Counter] Set';

	constructor(public value: number) { }
}

export class Increment {
	static readonly type = '[Counter] Increment';

	constructor(public value: number) { }
}

export class Decrement {
	static readonly type = '[Counter] Decrement';

	constructor(public value: number) { }
}

export class Save {
	static readonly type = '[Counter] Save';
}