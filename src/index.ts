enum NatureTypes {
	Human = 'human',
	Robot = 'robot',
	Animal = 'animal'
}

interface Entity {
	natureType: NatureTypes;
	name: string;
	code?: number;
	birthdate?: number;
}

const person: Entity = {
	natureType: NatureTypes.Human,
	name: 'Lara',
	birthdate: 14081997
}

const android: Entity = {
	natureType: NatureTypes.Robot,
	name: 'JSBot',
	code: 1111
}

function analyzer2(receiver: Entity = person): string {
	return `Hello, ${receiver.name}. You are ${receiver.natureType}.`;
}

console.log(analyzer2());



//************************************** */
//Dado as variáveis abaixo, informe a tipagem de cada um para que o código fique correto.
const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['passaro', 'gato', 'cachorro', 'coelho'];
const stringsAndNumbers: (string | number)[] = [1, 'one', 2, 'two', 3, 'three'];


//Crie uma Interface Book para que a função abaixo funcione corretamente. Adicione o parâmetro opcional "author".

interface Book {
	title: string;
	author?: string;
}

const book: Book = { title: 'Teste', }
function addToLibrary(item: Book) {
	const response = `Adicionado o livro ${item.title} à sua biblioteca.`;
	console.log(response);
}

console.log(addToLibrary(book));

//Crie uma Função que adicione dinheiro a uma conta de banco. A função deverá receber dois argumentos: 
//o argumento obrigatório money e o argumento opcional message. Caso message esteja presente, 
//mostre uma mensagem avisando que o dinheiro foi adicionado à conta.
function addMoney(cash: number, msg?: string): void {
	msg ? console.log('foi adicionado ' + cash) : console.log(cash);

}
addMoney(1000, "ey")

//Modifique a função baixo para que ela possa receber vários tipos de dados utilizando seu conhecimento de Generics.


function passValue<Z>(value: Z): Z {
	return value;
}

console.log(passValue<number>(12));



//****ASSINCRONIA */

// async function getUserAwait() {
// 	const githubReponse = await fetch(`https://api.github.com/users/laracarvalho`);

// 	const githubUser = await githubReponse.json();

// 	console.log(githubUser);
// }

// getUserAwait();

// const url = 'https://foodish-api.herokuapp.com/api/images/pizza';

// async function getFood(){
// 	const res = await fetch(url);
// 	const val = await res.json();
	
// 	console.log(val)
	

// }
// getFood();



// const getUser = (param:any) => {
// 	return new Promise((resolve, reject) => {
// 	  setTimeout(() => {
// 		if (param) {
// 		  resolve("Promise funcionou");
// 		} else {
// 		  reject('erro');
// 		}
// 	  }, 2000);
// 	});
//   };

//   getUser(false).then(res=>{
// 	  console.log(res);

//   }).catch(err=>{
// 	  console.log(err)
//   })































