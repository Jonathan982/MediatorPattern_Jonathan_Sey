
  
/*
   RABEARIVELO Jonathan Mattheus ISAIA 5 N°1
   ABDALAH Sey Mine Shayhane N°
*/


function Member(name)
{
  this.name = name
  this.chatroom = null 
}

Member.prototype = {
  send: function(message, toMember)// fonction rehefa handefa message
  {
    this.chatroom.send(message, this, toMember) // Tsy direct any @ ilay destinataire izy no mandeha fa mbola mandalo an'ilay mediator(chatroom)
  },
  receive: function(message, fromMember)
  {
    console.log(`${fromMember.name} to ${this.name}: ${message}`)
  }
}

function Chatroom()
{
  this.members = {}
}

Chatroom.prototype = {
  addMember: function(member)
  {
    this.members[member.name] = member
    member.chatroom = this
  },
  send: function(message, fromMember, toMember)
  {
    toMember.receive(message, fromMember)
  }
}

const chat = new Chatroom()

const bob = new Member("Bob")
const john = new Member("John")
const tim = new Member("Tim")

chat.addMember(bob)
chat.addMember(john)
chat.addMember(tim)

bob.send("Hey, John", john)
john.send("What's up, Bob", bob)
tim.send("John, are you ok?", john)

