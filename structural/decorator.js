
// decorator
// new behaviour or functionality for existing classes

class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function() {
    return server.url;
  }
  return server;
}

function asure(server) {
  server.isAsure = true;
  server.port += 500;
  return server;
}

const s1 = aws(new Server('11.1.1.11', 8080));
console.log('isAws: ' + s1.isAWS);
console.log(s1.awsInfo());
const s2 = asure(new Server('22.22.22.22', 1000));
console.log('isAsure: ' + s2.isAsure);
console.log('url: ' + s2.url)
