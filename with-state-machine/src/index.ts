console.log("I am from TypeScript");

console.log("I am from TypeScript again");

class SpecificAnimationPlayer extends StateMachince {
  constructor() {
    const initial = "intro";
    const events = [{ name: "respin", from: ["intro", "respin"], to: "outro" }];
    const callbacks = [];
    super(initial, events, callbacks);
  }
}
