import chalk from 'chalk';

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
        this.favoriteShow = favoriteShow;
    }
    speak() {
        console.log(chalk.hex(this.favoriteColor)(this.name)(this.favoriteShow));
    }
}

export default Person;