const fs = require('fs')
const fsPromises = require('fs/promises')

const oneSync = fs.readFileSync('./one.txt', {encoding:'utf8'})
const twoSync = fs.readFileSync('./two.txt', {encoding:'utf8'})
const threeSync = fs.readFileSync('./three.txt', {encoding:'utf8'})

console.log(`Sync:  ${oneSync} ${twoSync} ${threeSync}`)

async function testAsyncReadFile() {
    const oneAsync = await fsPromises.readFile('./one.txt', {encoding:'utf8'})
    const twoAsync = await fsPromises.readFile('./two.txt', {encoding:'utf8'})
    const threeAsync = await fsPromises.readFile('./three.txt', {encoding:'utf8'})
    console.log(`testAsyncReadFile: ${oneAsync} ${twoAsync} ${threeAsync}`)
}

testAsyncReadFile()


async function readFile(path) {
    return await fsPromises.readFile(path, {encoding:'utf8'})
}

function testAsyncReadFileOptimized() {
    Promise.all([readFile('./one.txt'), readFile('./two.txt'), readFile('./three.txt')]).then(
        ([oneAsync, twoAsync, threeAsync]) => console.log(`testAsyncReadFileOptimized: ${oneAsync} ${twoAsync} ${threeAsync}`)
    )
}

testAsyncReadFileOptimized()

async function testAwaitPromiseAll() {
    try {
        const [oneAsync, twoAsync, threeAsync] = await Promise.all([readFile('./one.txt'), readFile('./two.txt'), readFile('./three.txt')])
        console.log(`testAwaitPromiseAll: ${oneAsync} ${twoAsync} ${threeAsync}`)
    } catch (error) {
        console.log(error)
    }
}

testAwaitPromiseAll()


function writeInOutputFile() {
    const readable = fs.createReadStream('./one.txt', {encoding: 'utf8'})
    const readable2 = fs.createReadStream('./two.txt', {encoding: 'utf8'})
    const readable3 = fs.createReadStream('./three.txt', {encoding: 'utf8'})


    const writable = fs.createWriteStream('./output.txt', {encoding: 'utf8'})
    readable.pipe(writable)
    readable2.pipe(writable)
    readable3.pipe(writable)

}

writeInOutputFile()



