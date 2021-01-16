
  
/*
   RABEARIVELO Jonathan Mattheus ISAIA 5 N°1
   ABDALAH Sey Mine Shayhane N°
   
   Explication : Ilay Mediator Pattern zany karazana classe intermediaire entre ny samy objet, mba hanamora sy anamaivana ny complexité sy ny controle
   an communication sy interraction an ilay objets be dia be. io class io no mi controle sy migere ny interraction an' ireo objet. Tsy mifandray direct 
   izany ny objet fa mila mandalo amin'ilay classe io dia izy no migerer ny routing an'reo amzay.
   
   Exemple : Resaka chatroom izay misy membre maromaro.
             Rehefa mandefa message ny olona iray dia tsy direct any amin'ilay destinataire fa mila mandalo an'ilay classe"Mediator"(eto izy chatroom) 
             ny message zay vao makany am destinataire.
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
  send: function(message, fromMember, toMember) // ity ilay fonction, mi transferer an'ilay message avy any am mpanoratra makany am destinataire(routing)
  {
    toMember.receive(message, fromMember)
  }
}

const chat = new Chatroom()

const jonathan = new Member("Jonathan")
const seymine = new Member("Seymine")
const ramose = new Member("Ramose")

chat.addMember(jonathan)
chat.addMember(seymine)
chat.addMember(ramose)

jonathan.send("On a combien comme note Seymine", seymine)
seymine.send("Demande à Monsieur", jonathan)
jonathan.send("On a combien comme note Monsieur?", ramose)
ramose.send("Vous avez eu 20/20! haha", jonathan)

