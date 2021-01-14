Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Jonathan982 
pkellz
/
devsage
3
5341
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
devsage/DesignPatterns/Mediator.js /
@pkellz
pkellz Mediator
Latest commit dd81e04 on 18 Nov 2019
 History
 1 contributor
53 lines (44 sloc)  989 Bytes
  
/*
    Mediator Design Pattern -> https://youtu.be/ZuhgOu-DGA4
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/


function Member(name)
{
  this.name = name
  this.chatroom = null
}

Member.prototype = {
  send: function(message, toMember)
  {
    this.chatroom.send(message, this, toMember)
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
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
