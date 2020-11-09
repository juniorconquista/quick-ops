import * as fakerStatic from 'faker';
import { SidebarResponse } from '../containers/Sidebar/sidebar.types';

export class SidebarFaker {
    private sidebar: SidebarResponse = {
        content: [],
    } as SidebarResponse;

    constructor() {
        this.sidebar.content.push({
            currency: {
                symbol: 'R$',
            },
            balance: fakerStatic.random.number(),
            returned: fakerStatic.random.number(),
            received: fakerStatic.random.number(),
            declared: fakerStatic.random.number(),
            approved: fakerStatic.random.number(),
            updatedOn: fakerStatic.random.number(),
        });
    }

    public generate() {
        return this.sidebar;
    }
}
