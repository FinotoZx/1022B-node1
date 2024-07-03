import {expect, test} from 'vitest';

import { soma } from './index';

import { subtrair } from './index';

import { isPar } from './index';

//test("",()=>{})
test("Teste 1 + 1 =2",()=> {
    //GIVEN -> DADO
    let a = 1
    let b = 1
    //WHEN -> QUANDO
    let resultado = a+b
    //THEN -> Espero
    expect(resultado).toBe(2)
})


//Função soma test
test("Deve somar 2+5 e retornar 7", ()=>{
    let a = 2
    let b = 5

    let res = soma(a,b)
    
    expect(res).toBe(7)
})

//Deve subtrair
test("Deve subtrair 2-5 e retornar -3", ()=>{
    let a = 2
    let b = 5

    let res = subtrair(a,b)
    
    expect(res).toBe(-3)
})

test("Deve verificar se um numero é par",()=>{
    expect(isPar(5)).toBe(false)
    expect(isPar(1)).toBe(false)
    expect(isPar(2)).toBe(true)
    expect(isPar(6)).toBe(true)

})