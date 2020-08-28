// export class PublisherSubscriber {
//   internal = {};
//   external = {};

//   _on = (event, callback) => {
//     if (!this.internal[event]) this.internal[event] = [];
//     this.internal[event].push(callback);
//   };

//   _publish = (event, params) => {
//     if (this.external[event]) {
//       for (i in this.internal[event]) this.external[event][i](params);
//     }
//   };

//   on = (event, callback) => {
//     if (!this.external[event]) this.external[event] = [];
//     this.external[event].push(callback);
//   };

//   publish = (event, params) => {
//     if (this.internal[event]) {
//       for (i in this.internal[event]) this.internal[event][i](params);
//     }
//   };
// }

// new PublisherSubscriber()._on("UiSpin", () => {
//   new PublisherSubscriber()._publish("GameSpin");
// });

// export default new PublisherSubscriber();
