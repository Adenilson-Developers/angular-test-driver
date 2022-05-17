import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix `, () => {

        const service = new UniqueIdService();

        const id = service.generatedUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    });

    // testando duplicidade dos ids gerados
    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times `,()=>{

        const service = new UniqueIdService();
        const firstId = service.generatedUniqueIdWithPrefix('app');
        const secoundId = service.generatedUniqueIdWithPrefix('app');
        expect(firstId).not.toBe(secoundId);
    })
});