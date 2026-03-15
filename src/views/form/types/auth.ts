export interface UserAuth{
	fio:string
	email: string
	age?: number | null
	stage?:number | null
	password:string
}