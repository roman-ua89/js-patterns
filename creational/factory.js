

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 100;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type];
    const member = new Membership(name)
    member.type = type;
    member.define = function () {
      console.log(`Name: ${this.name}, type: ${this.type}, cost: ${this.cost}`)
    }
    return member;
  }
}

const factory = new MemberFactory();
const simpleMember = factory.create('user1');
const standardMember = factory.create('user2', 'standard');
const premiumMember = factory.create('user3', 'premium');

simpleMember.define();
standardMember.define();
premiumMember.define();
