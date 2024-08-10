
export class loginDt{
    name!: string;
    fullName!:string;
    email!: string;
    phone!: number;
    password!: string;
    designation!:string[];
    organization!:string;
    orgId!:string;
    city!:string[];

    constructor(){
        this.name='Raj',
        this.fullName='Raj Kumar'
        this.email='raj123@gmail.com',
        this.phone=8877665544,
        this.password='raj123',
        this.designation=['Doctor','Actor','Lawyer','Engineer'],
        this.organization="SoftTeckSolution",
        this.orgId="org-4",
        this.city=['Mumbai','Pune','Delhi']
    }
}

export let obj:loginDt=new loginDt();


