import * as fakerStatic from 'faker';
import { HeaderResponse } from '../containers/Header/header.types';

export class HeaderFaker {
    private header: HeaderResponse = {
        project: {},
        collaborator: {},
        accountabilityExtraInfo: {},
    } as HeaderResponse;

    constructor() {
        this.header.justification = fakerStatic.lorem.paragraph();
        this.header.purpose = fakerStatic.lorem.word();
        this.header.createdOn = fakerStatic.time.recent();
        this.header.analyst = true;
        this.header.project.title = fakerStatic.lorem.word();
        this.header.collaborator.name = fakerStatic.name.findName();
        this.header.collaborator.email = fakerStatic.internet.email();
        this.header.costCenters = [
            {
                id: fakerStatic.random.number(),
                name: fakerStatic.name.findName(),
            },
        ];
        this.header.accountabilityExtraInfo.eventDate = fakerStatic.time.recent();
        this.header.accountabilityExtraInfo.budgetForBreakfast = true;
        this.header.accountabilityExtraInfo.amountOfPeople = 20;
    }

    public generate() {
        return this.header;
    }
}
