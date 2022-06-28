# NgTest1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Documentando funcionalidades

 <Garotos, vocês devem se esforçar para encontrar suas póprias vozes... Todos nós temos uma grande necessidade de aceitação, mas vocês devem confiar nas suas crenças. Mesmos que as pessoas as achem estranhas ou impopulares, mesmo que todos forem embora.>

 ` Sociedade dos Poetas mortos ` 


O primeiro passo é construir um componente que será o componente de `like`

Criando service que será responsável por gera `IDs únicos ` para os componentes


export class UniqueIdService {
    private numberOfGeneratedIds = 0;

    public generateUniqueIdWithPrefix(prefix: string ): string{
        // se o prefixo passado n tiver prefixo ele lança um erro
        if (!prefix){
            throw Error('Prefix can not be empty');
        }
        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds++;
        return `${prefix}-${uniqueId}`; // retorno o id utilizando prefixo 
    }

    // retorna a quantidade de ids gerado
    public getNumberOfGeneratedUniqueIds(): number{
        return this.numberOfGeneratedIds;
    }

    //esse metodo vai delegar a geração de id único 
    private generateUniqueId(): string {
        return uuidv4();
    }
}

## Criando o test do uniqueId
describe('o artefato que queremos testar', () =>{
    it('Primeira condição que queremos teestar'() =>{
        // Lógica do teste que queremos testar
    })
})

// seguinte estrutura para escrever tests
it('alguma coisa `should` fazer algo `when` determinada condição estiverem presente')


Obs: -> O Angular usa por debaixo dos panos o jasmine por padrão o Angular faz com que essas funções já estejam disponíveis para rodar no test, n sendo necessário se preucupar em configurar o amviente para usar o Jasmine, porque já está tudo configurado
[https://jasmine.github.io/]

describe(UniqueIdService.name, () =>{

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniquIds.name} should return the number of generateIds when called`, () =>{

        const service = new uniqueIdService(); // Criando uma instância do serviço 

        const id = service.generateuniqueIdWithPrefix(); // pedindo para gerar um ID

        expect(id.startWth).toBeTrue('app-')
        
        // espero que esse id que foi gerado contenha `app-`

        // toBeTrue - verifica se o resultado é verdadeiro
    })
})

obs: O Angular já vem como o `Karma` para que possamos realizar os tests - o `karma` é um executor de tests - sendo assim ele é responsável por executar o test [https://karma-runner.github.io/latest/index.html]

it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniquIds.name} should not generate duplicate IDs when called multiple time`, ()=>{
    const service = new UniqueIdService();
    const ids = new set();
    //gerando 50 ids
    for (let i = 0; i < 50; i++){
        ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);

})
// Testando o getNumberUniqueIds

it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} should return the number of generatedIds when colled`,()=>{
// gerar dois aids e verificar se no final e igual a dois

const service = new UniqueIdService();
service.generateUniqueIdWithPrefix('app');
service.generateUniqueIdWithPrefix('app');
expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
})

obs:
 // o set() não aceita elementos duplicados, caso esteja repetido ele ignora 1
<=====>
O karma executa os testes de forma aleatória 
 a ideia do teste é não ter estado compartilhado a cada execução dos `it`, ou seja, antes de cada `it`, deve ter uma instãncia unica para que essa instância exista só diante o esse teste

## Entendendo o beforeEach
 Eu não quero criar uma instãncia de UniqueIdService em cada `it`, mas eu também quero ter uma instância de UniqueIdService em cada `it`, para isso eu vou usar o `beforeEach()`, o `beforeEach()` significa que o código que vc colocar dentro, será execultado, antes da chamada de cada `it` 
 
os dados que estão no `it` não pode sofrer influência dos dados de outros testes 


 subscribe(UniqueIdService.name, ()=>{
    let service: UniqueIdService();

    beforeEach(()=>{
        service = new UniqueIdService();
    });

    it('Condição que eu quero testar + alguma coisa `should` fazer algo `when` determinada condição estiverem presente', ()=>{'lógica de teste'});

    it('Condição que eu quero testar + alguma coisa `should` fazer algo `when` determinda condição estiveresm presente'() => {'logica do teste'})
 })

 // testando exerções 
 * se passar um valor null, undefined, estring vazia, tudo isso faz o metódo lançar uma exceção

 it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called empty`, ()=>{
    const emptyValues = [null, undefined, ''];
    emptyValues.forEach(emptyValue =>{
        expect(()=> service.generateUniqueIdWithPrefix(emptyValue)).toThrow();
    })
 })

 // outros casos de exceções 



it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called empty`, ()=>{
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach(emptyValue =>{
        expect(()=> service.generateUniqueIdWithPrefix(emptyValue)).toThrow();
    })
 })

 // expressão regular
private validId = /^[A-Za-z]+[\w\-\:\\.]*$/;

public generateUniqueIdWithPreix(prefix: string): string {
    // chamando uma expressão regular, se esse prefix não seguir a regra, ele vai lançar uma excessão 
    if(!prefix || !this.validId.test(prefix))
}

Obs - Tem uma lacuna que o teste acaba ajudando a identificar, eu tentei consertar alguma coisa, quebrei outra, então para resolver é preciso combinar as duas condições, eu testo no código, if(!prefix é null, é undefined, é uma string em branco, ou || !this.valid.test(prefix)){
    se não passou no teste, então eu estou botando as duas condições aqui.;
}

// Expectatia com contexto - testando expectativa no loop

da a flexibilidade para saber onde está gerando o erro do loop - toda vez que você tiver expectativa no loop, voc~e coloca um contexto para saber qual valor está fazendo o seu teste falhar 

const emptyValues = ['null', 'undefined', '', '0', '1', 'app'];

emptyValues.forEach(emptyValue => {
    expect(() => service.generateUniqueIdWithPrefix(emptyValue))
    .withContext(`Empty value: ${emptyValue}`)
    .toThrow();
})

Ou seja estou passando o contexto dessa expectativa quando ela falhar, Ex se o app falhar ele vai mostrar que o erro está no app



<toBe, toBeTrue, toBeTruethy>
// Esses três metodos são responsável por testar valores booleanos 

expect(true).toBeTrue(); 
// espera um tipo literal - const x = true;

expect(true).toBe(true); 
// ele compara, se isso é igual a isso - tipo literal true e igual a tipo literal true ?

expect(true).toBeTruthy();
// se for verdadeiro ou falso ele passa 


## Testando component e entendendo a estrutura do test 

[ Em run time no angular que está compilando o projeto um component precisa pertencer a um modulo e no ambiente de teste é a mesma coisa  ]

describe(nome da classe que você quer testar , () => {

// o fixture é o wrap que dentro dele tem a instância do meu component
    let fixture: ComponentFixture<LikeWidgetComponent>= null

    beforeEach(async () =>{

        [o TestBad é uma ferramenta criada pela equipe do Angular para criar módulos de testes nos quais o component que queremos testar deve fazer parte.  ]

        // TestBad - configura para mim um modulo de test

        await TestBad.configureTestingModulo({
            // lembrando que ele é identico ao module por isso eu passo as mesmas funcionalidade [declarations, providers ]

            declarations: [LikeWidgetComponent],
            providers: [UniqueIdService],


        }).compileComponent();
            ** esse compileComponent vai aguardar a compilação do component mais o template , porque o angular por debaixo dos panos usa o template atraves de uma requisição assicrona 

    })

                // TestBad cria para mim createComponente, ai você para a classe do componente como parámetro
    component = TestBad.createComponent(LikeWidgetComponent)

    [quando você cria um component o retorno desse metódo não é o component criado pelo Angular é um `wrap` e o `wrap` embrulha o component que foi criado é da um monte de metódos ultilitários que você vai usar durante o tests, esse cara é chamado de `componentFixture` ]

    it('Should created component',() => {
        const instance = fixture.componentInstance;
        expect(instance).toBeTruthy();
    });

    it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('Should Not auto-generate ID during ngOnInit when  (@Input id) is assigned',()=>{
        const component = fixture.componentInstance;
        const someId = 'someId'
        component.id = someId;
        
        // O angular vai despara o mecanismo de detecção e vai passar pelo ngOnInit()
        [lembrando que o dev é responsável pelo mécanismo detectChanges() do Angular]
        fixture.detectChanges();
        expect(component.id).toBe(someId)
    });

      it(`#${LikeWidgetComponent.prototype.like.name} should trigger @(Output liked) when called `, () => {
        // usando spyOn para espionar o método
        spyOn(component.liked, 'emit')
        fixture.detectChanges();
        component.liked.subscribe(()=>{
            expect(component.liked.emit).toHaveBeenCalled()
            // verificando se o método foi chamado ou não, usando toHaveBeenCalled 
        });
        component.like();
    });

})

**[spyOn - o spy vai possuir o metodo emit substituindo o metodo emit por ele e quando o emit() for chamado, quem vai ser chamado é o spy e o por debaixo dos panos vai guardar uma referêncio pro emit() original - então entre a chamada do spy que agora é o emit e o emit verdadeiro tem o meio de campo que o spy vai avisar o jasmine, levantando uma flag dizendo que esse metódo foi chamdo] 


// Asseções assíncronas 
  ** done

  [O done avisa se o teste falhou ou não, nesse caso  ]

  it(`#${LikeWidgetComponent.prototype.name} should trigger emission when called`, done =>{
    fixture.detectChanges();
    component.like();
    component.liked.subscribe( ()=>{
        expect(true).toBeTrue();

        done();
    })
    component.like();

  
