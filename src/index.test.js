import{suma, div, resta,mult} from './operaciones'
test ('suma', ()=>{
    const value = suma('25','5');
    expect(value).toBe(30)
}) 

test ('division', ()=>{
    const value = div('25','5');
    expect(value).toBe(5)
})

test ('multiplicacion', ()=>{
    const value = mult('30','5');
    expect(value).toBe(150)
})

test ('resta', ()=>{
    const value = resta('30','5');
    expect(value).toBe(25)
})