class person{
    constructor(name,team){
        this.name = name;
        this.team = team;
    }
    win(){
        console.log(`Congratulations ${this.name} and ${this.team} for Winning Ipl.`)
    }
}
module.exports = person;
