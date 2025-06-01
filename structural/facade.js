

// facade
// (jQuery)

class Complains {
  constructor() {
    this.complains = [];
  }

  reply(complain) {}

  add(complain) {
    this.complains.push(complain);
    return this.reply(complain);
  }
}

class ProductComplaints extends Complains {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complains {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplainRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({ id, customer, details })
  }
}

const registry = new ComplainRegistry();

console.log(registry.register('Roman', 'service', 'unavailable'))
console.log(registry.register('Oleg', 'product', 'available'))
