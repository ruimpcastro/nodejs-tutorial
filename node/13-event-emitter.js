const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data recieved from ${name} with id ${id}`);
});
customEmitter.on("response", () => {
  console.log("Other data recieved");
});

customEmitter.emit("response", 'Rui', 12);
