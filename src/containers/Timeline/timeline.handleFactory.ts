import Expense from '../../components/Timeline/Expense';
import Evaluation from '../../components/Timeline/Evaluation';
import Accountability from '../../components/Timeline/Accountability';

import { CARDTYPE } from './timeline.types';

const handler = (type: CARDTYPE) => {
    switch (type) {
        case CARDTYPE.EXPENSE:
            return Expense;
        case CARDTYPE.EVALUATION:
            return Evaluation;
        default:
            return Accountability;
    }
};

const handlerFactory = (type: CARDTYPE) => handler(type);
export default handlerFactory;
