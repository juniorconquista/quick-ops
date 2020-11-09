import moment from 'moment';

import { ReactComponent as Hotel } from '../../assets/icons/hotel-bell.svg';
import { ReactComponent as Food } from '../../assets/icons/burger.svg';
import { ReactComponent as Users } from '../../assets/icons/group.svg';
import { ReactComponent as Asterisk } from '../../assets/icons/asterisk.svg';

export const handleIcon = (type: string) => {
    switch (type) {
        case 'concierge-bell':
            return Hotel;
        case 'utensils':
            return Food;
        case 'evaluation':
            return Users;
        default:
            return Asterisk;
    }
};

export const formatDate = (date: number) => moment(date).format('DD/MM/YYYY');
