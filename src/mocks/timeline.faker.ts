import * as fakerStatic from 'faker';
import {
    CARDTYPE,
    TimelineProps as TimelineResponse,
} from '../containers/Timeline/timeline.types';

export class TimelineFaker {
    private timeline: TimelineResponse = {
        content: [],
    } as TimelineResponse;

    constructor() {
        this.timeline.content = [
            {
                amountSpent: fakerStatic.lorem.word(),
                amountTotal: fakerStatic.lorem.word(),
                cardDate: fakerStatic.time.recent(),
                cardType: CARDTYPE.EXPENSE,
                contentType: 'hotel-fee',
                currencySymbol: 'R$',
                expenseTypeCode: 'hotel-fee',
                expenseTypeIcon: '',
                id: fakerStatic.random.number(),
                notes: fakerStatic.lorem.paragraph(),
                status: 'base',
            },
        ];
    }

    public generate() {
        return this.timeline;
    }
}
