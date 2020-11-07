type CostCenter = {
    id: number;
    name: string;
};

export interface HeaderResponse {
    justification: string;
    purpose: string;
    createdOn: any;
    analyst: boolean;
    project: {
        title: string;
    };
    collaborator: {
        name: string;
        email: string;
    };
    accountabilityExtraInfo: {
        amountOfPeople: number;
        eventDate: any;
        budgetForBreakfast: boolean;
    };
    costCenters: CostCenter[];
}
