"use strict";
class Company {
    /**
     *
     */
    constructor(total) {
        this.totalEmployees = total;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Company(200);
        return this.instance;
    }
}
const company1 = Company.getInstance();
console.log(company1);
const company2 = Company.getInstance();
console.log(company2);
