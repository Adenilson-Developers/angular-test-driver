import { UniqueIdService } from "./unique-id.service";



describe(UniqueIdService.name, () => {

    let service: UniqueIdService

    beforeEach(()=> {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix `, () => {


        const id = service.generatedUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    });

    // testando duplicidade dos ids gerados
    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times `,()=>{
       
        const ids = new Set();
        for( let i = 0; i < 50; i++){
            ids.add(service.generatedUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);

        // const firstId = service.generatedUniqueIdWithPrefix('app');
        // const secoundId = service.generatedUniqueIdWithPrefix('app');
        // expect(firstId).not.toBe(secoundId);
    })

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniquIds.name} should return the number of generateIds when called`, ()=> {
        
        service.generatedUniqueIdWithPrefix('app');
        service.generatedUniqueIdWithPrefix('app');

        expect(service.getNumberOfGeneratedUniquIds()).toBe(2);
    })
});