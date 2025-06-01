/**
 * chain of responsibility
 *
 * The Chain of Responsibility pattern is a behavioral design pattern that lets you pass requests along a chain of handlers.
 * Each handler decides either to process the request or to pass it to the next handler in the chain.
 *
 */

// Example 1

class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(10).sum);




// Example 2

class SupportHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return handler; // For chaining
  }

  handleRequest(request) {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log("End of chain: Request cannot be handled.");
    }
  }
}

class Tier1Support extends SupportHandler {
  handleRequest(request) {
    if (request.type === "basic") {
      console.log("Tier 1 Support handling basic request: " + request.description);
    } else {
      console.log("Tier 1 Support passing request to next level.");
      super.handleRequest(request);
    }
  }
}

class Tier2Support extends SupportHandler {
  handleRequest(request) {
    if (request.type === "intermediate") {
      console.log("Tier 2 Support handling intermediate request: " + request.description);
    } else {
      console.log("Tier 2 Support passing request to next level.");
      super.handleRequest(request);
    }
  }
}

class Tier3Support extends SupportHandler {
  handleRequest(request) {
    if (request.type === "advanced") {
      console.log("Tier 3 Support handling advanced request: " + request.description);
    } else {
      console.log("Tier 3 Support cannot handle this request.");
      super.handleRequest(request);
    }
  }
}

// Client code
const tier1 = new Tier1Support();
const tier2 = new Tier2Support();
const tier3 = new Tier3Support();

tier1.setNext(tier2).setNext(tier3); // Build the chain

// Create requests
const request1 = { type: "basic", description: "Basic setup issue" };
const request2 = { type: "intermediate", description: "Configuration problem" };
const request3 = { type: "advanced", description: "Complex system failure" };
const request4 = { type: "unknown", description: "Unrecognized issue" };

// Send requests
tier1.handleRequest(request1);
tier1.handleRequest(request2);
tier1.handleRequest(request3);
tier1.handleRequest(request4);
