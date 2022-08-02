export class Product {
    constructor(
        public pid : number,
        public sku : string,
        public pname : string,
        public description : string,
        public unitprice : number,
        public imageurl : string,
        public unitsinstock : number,
        public datecreated : Date | null,
        public lastupdated : Date | null,
        public categoryid : number


    ){}
}
