//what is interfaces => named shape for objects 

interface User333 {
    id : string;
    name : string;
    email ?: string;
    readonly createdAt : Date;
}

const user333 : User333 = {
    id:"1",
    name : "anirudh",
    createdAt : new Date(),
    email : "xyz@gmail.com"
}

interface Admin333 extends User333 {
    permission : string[]
}

const admin333 : Admin333 = {
    id : "4",
    name : "Admin",
    createdAt : new Date(),
    permission : ["admin"]
}

interface WithMeta {
    meta : {
        active : boolean
    }
}

interface AdminWithMeta extends Admin333,WithMeta {

}

const adminWithmeta : AdminWithMeta =  {
    id : "4",
    name : "Admin",
    createdAt : new Date(),
    permission : ["admin"],
    meta : {
        active : false
    }
}

