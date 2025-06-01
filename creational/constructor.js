

function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function() {
  return `http://${this.ip}:80`
}

const aws = new Server('AWS', '11.11.11.11')
console.log(aws.getUrl())
