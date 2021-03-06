import { Matrix } from '..';

export namespace Maths{
    export function randomInt(min: number, max: number){
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
    export function random(min: number, max: number){
        return Math.random() * (max - min) + min;
    }
    export function argmax(args: number[]){
        let record = {};
        args.forEach(a => record[a] = record[a] + 1 || 1);
        
        let max = record[args[0]];
        let arg = args[0];

        for(let key of args){
            if(record[key] > max){
                max = record[key];
                arg = key;
            }
        }

        return arg;
        
    }

    export function randomBool(){
        return Math.random() > 0.5 ? true : false;
    }
    export function round(value: number, decimals = 1){
        let f = Math.pow(10, decimals);
        return Math.round(value * f) / f;
    }
    export function sum(c: number[] | Matrix){
        let M = c instanceof Matrix ? c.getColumnAsRowVector(0).getArray()[0] : c;
        return M.reduce((s, x) => s + x, 0);
    }
}